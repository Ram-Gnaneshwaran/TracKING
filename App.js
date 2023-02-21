import HomeScreen from './screens/HomeScreen';
import StudentScreen1 from './screens/StudentScreen1';
import DriverScreen from './screens/DriverScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    // React Navigation
    <NavigationContainer>

      {/* React Stack Navigator */}
        <Stack.Navigator>

          {/* Home Screen */}
        <Stack.Screen name="Home" component={HomeScreen}/>

        {/* Student Screen 1 */}
        <Stack.Screen name="Student1" component={StudentScreen1} />

        {/* Driver Screen */}
        <Stack.Screen name="Driver" component={DriverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

