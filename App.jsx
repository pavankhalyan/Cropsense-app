import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import LoginScreen from './src/screen/LoginScreen';
import DashboardScreen from './src/screen/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ {
        
      }}>
        <Stack.Screen name ="CROPSENSE" component={LoginScreen} options={{headerShown: false}}/> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
      </NavigationContainer >
  );
}

const styles = StyleSheet.create({ });
