import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react' 
import FontAwesome from'react-native-vector-icons/FontAwesome'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
       <View style = {styles.loginContainer}> 
        <Text style = {styles.loginText}>LOGIN</Text>
       </View>  
       <View style = {styles.inputContainer}> 
       <FontAwesome name ={'user'} size={20} color={"white"} style = {styles.inputIcon}  />
        < TextInput style= {styles.textInput} placeholder = "Enter your name"/> 
       </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({ 
  container : {
    backgroundColor: 'black',
    flex: 1 , 
  },
  loginText : {
    textAlign: 'center', 
    fontSize: 60,
    fontWeight : '400', 
    marginTop : 200,
    color: 'white',
    marginBottom : 20,
  }, 
  inputContainer: {
   backgroundColor: "grey", 
   borderRadius : 20, 
   flexDirection :"row",
   width : 300,
   marginHorizontal : 40, 
   marginVertical : 20, 
   height : 50,
   alignItems : "center",
  }, 
  inputIcon : {
   marginLeft : 10,
  },
   textInput :{
    marginLeft : 20,
    flex : 1,
  },
})