import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient'; 
import { Image } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleRegister = (values) => {
    console.log('Form values:', values);
    navigation.navigate('Dashboard');
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Mobile number must contain only digits')
      .min(10, 'Mobile number must be at least 10 digits')
      .max(15, 'Mobile number cannot be more than 15 digits')
      .required('Mobile number is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', mobileNumber: '' }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => ( 



        <View style={styles.container}> 
        <View > 
           <Image source={require('./images/green.png')} />
        </View>
          <View style={styles.loginContainer}> 
            <Text style={styles.loginText}>Hello</Text>
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={20} color="white" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your name"
              placeholderTextColor="white"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          </View>
          {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          <View style={styles.inputContainer}>
            <FontAwesome name="mobile" size={20} color="white" style={styles.inputIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your Mobile Number"
              placeholderTextColor="white"
              keyboardType="phone-pad"
              onChangeText={handleChange('mobileNumber')}
              onBlur={handleBlur('mobileNumber')}
              value={values.mobileNumber}
            />
          </View>
          {touched.mobileNumber && errors.mobileNumber && (
            <Text style={styles.errorText}>{errors.mobileNumber}</Text>
          )}
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.loginButtonContainer}>
              <Text style={styles.login}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '400',
    marginTop: 200,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: 'grey',
    borderRadius: 20,
    flexDirection: 'row',
    width: 300,
    marginHorizontal: 40,
    marginVertical: 20,
    height: 50,
    alignItems: 'center',
  },
  inputIcon: {
    marginLeft: 10,
  },
  textInput: {
    marginLeft: 20,
    flex: 1,
    color: 'white',
  },
  errorText: {
    color: 'red',
    marginLeft: 40,
    marginBottom: 10,
  },
  loginButtonContainer: {
    marginTop: 50,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    width: 100,
    marginHorizontal: 130,
    marginVertical: 20,
    borderRadius: 18,
  },
  login: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
