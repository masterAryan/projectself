import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import  { choose } from './screens/choose';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import login from './screens/Login';
import CreateTT from './screens/CreateTT';
const Stack  = createStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown  : false}}>
    <Stack.Screen name="create" component={CreateTT} />
      <Stack.Screen name="screen1" component={choose} />
    <Stack.Screen name="screen" component={login} />
    
    
      
    
    
    </Stack.Navigator>
    </NavigationContainer>
    
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
