import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ {
        
      }}>
        <Stack.Screen name="Login" component={LoginScreen} /> 
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
      </NavigationContainer >
  );
}

const styles = StyleSheet.create({});
