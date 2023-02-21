import { Image, Text, SafeAreaView, Pressable, View} from 'react-native';
import { StyledComponent } from "nativewind";
import AnimatedLottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

export default function  HomeScreen({navigation}) {
  return (
        <SafeAreaView className = "flex-1 items-center justify-start bg-white">
        {/* Logo */}
        <Image 
        className = "mt-36"
        source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
        />
        <StatusBar style="auto" />
        {/* Text */}
        <Text className = "text-4xl font-semibold mt-10 ">Who are you ?</Text>

        {/* Container */}
        <StyledComponent 
        component={View} 
        className=" flex-row mt-10 " >

        {/* Student Button */}
        <Pressable onPress={() => navigation.navigate('StudentLogin')}>
            <StyledComponent 
            component={View} 
            className="flex-row px-10 py-4 mr-8 bg-white mt-10 " 
            style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            shadowColor: '#171717',
            shadowOffset: {width: -5, height: 5},
            shadowOpacity: 1,
            shadowRadius: 0,
            }}>
            {/* Button Text */}
            <Text className="text-xl font-semibold mr-4" >Student</Text>
            {/* Button Logo */}
            <Image 
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Student.png')} 
            />
            </StyledComponent>
        </Pressable>
        
        {/* Border */}
        <StyledComponent 
            component={View} 
            className=" bg-white text-xl font-semibold px-14 mt-16 " 
            style={{
            borderTopColor: "black",
            borderTopWidth: 1,
            }}>
            </StyledComponent>
        </StyledComponent>

        {/* Container 2 */}
        <StyledComponent 
        component={View} 
        className=" flex-row mt-10 " >

        {/* Border */}
        <StyledComponent 
            component={View} 
            className=" bg-white text-xl font-semibold px-14 mt-16 " 
            style={{
            borderTopColor: "black",
            borderTopWidth: 1,
            }}>
            </StyledComponent>

        {/* Driver Button */}
        <Pressable onPress={() => navigation.navigate('DriverLogin')}>
            <StyledComponent 
            component={View} 
            className="flex-row px-10 py-4 ml-8 bg-white mt-10 " 
            style={{
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 4,
            shadowColor: '#171717',
            shadowOffset: {width: -5, height: 5},
            shadowOpacity: 1,
            shadowRadius: 0,
            }}>
            {/* Button Text */}
            <Text className="text-xl font-semibold mr-4" >Driver</Text>
            {/* Button Logo */}
            <Image 
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Bus.png')} 
            />
            </StyledComponent>
        </Pressable>
        </StyledComponent>
        </SafeAreaView>
  )
};