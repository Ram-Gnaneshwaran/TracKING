import HomeScreen from './screens/HomeScreen';
import StudentHome from './screens/StudentHome';
import DriverHome from './screens/DriverHome';
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

       {/* Student Login*/}
       <Stack.Screen name="StudentLogin" options = {{headerShown : false }} component={StudentLogin} />

        {/* Student Home*/}
        <Stack.Screen name="StudentHome" options = {{headerShown : false }} component={StudentHome} />


       {/* Driver Login */}
       <Stack.Screen name="DriverLogin" options = {{headerShown : false }} component={DriverLogin} />

        {/* Driver Home */}
        <Stack.Screen name="DriverHome" options = {{headerShown : false }} component={DriverHome} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

