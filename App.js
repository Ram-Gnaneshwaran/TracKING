import HomeScreen from './screens/HomeScreen';
import StudentScreen1 from './screens/StudentScreen1';
import DriverScreen from './screens/DriverScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
        <Stack.Screen name="Student1" component={StudentScreen1} />
        <Stack.Screen name="Driver" component={DriverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

