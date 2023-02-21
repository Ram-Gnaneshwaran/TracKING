import HomeScreen from './screens/HomeScreen';
import StudentHome from './screens/StudentHome';
import DriverScreen from './screens/DriverScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudentLogin from './screens/StudentLogin';
import DriverLogin from './screens/DriverLogin';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // React Navigation
    <NavigationContainer>

      {/* React Stack Navigator */}
        <Stack.Navigator>

          {/* Home Screen */}
        <Stack.Screen name="Home" options = {{headerShown : false }} component={HomeScreen}/>

        {/* Student Screen 1 */}
        <Stack.Screen name="StudentHome" options = {{headerShown : false }} component={StudentHome} />

       {/* Student Login*/}
       <Stack.Screen name="StudentLogin" options = {{headerShown : false }} component={StudentLogin} />

       {/* Driver Login */}
       <Stack.Screen name="DriverLogin" options = {{headerShown : false }} component={DriverLogin} />

        {/* Driver Screen */}
        <Stack.Screen name="Driver" options = {{headerShown : false }} component={DriverScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

