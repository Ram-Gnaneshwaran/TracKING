import { Image, Text, SafeAreaView, Pressable, View} from 'react-native';
import { StyledComponent } from "nativewind";
import AnimatedLottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

export default function DriverScreen() {
  return (
        <SafeAreaView className = "flex-1 items-center justify-start bg-white">

        {/* Logo */}
        <Image 
        className = "mt-10"
        source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
        />

        <StatusBar style="auto" />

        {/* Lottie Component */}
        <StyledComponent 
        component={View} 
        className="flex items-center justify-start mt-24" >
            <AnimatedLottieView 
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/driver.json')}
            style={{width: '60%', aspectRatio: 1}}
            autoPlay
            loop
            />
        </StyledComponent>

        {/* Stylised Text */}
        <StyledComponent 
        component={Text} 
        className="flex items-center justify-start text-xl" >
            <Text > Your </Text>
            <Text className=" text-green-500 font-bold">Location</Text>
            <Text > is being </Text>
            <Text className=" font-bold"> TracKed!</Text>
        </StyledComponent>

        {/* Captions*/}
        <StyledComponent 
        component={Text} 
        className="text-gray-500 mt-4" >
            <Text > Students can now find you in their app! </Text>
        </StyledComponent>

        </SafeAreaView>
  )
};