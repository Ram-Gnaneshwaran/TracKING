import { Image, Text, SafeAreaView, Pressable, View} from 'react-native';
import { StyledComponent } from "nativewind";
import AnimatedLottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

export default function StudentScreen1() {
  return (
        <SafeAreaView className = "flex-1 items-center justify-start bg-white">
        {/* Logo */}
        <Image 
        className = "mt-10"
        source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
        />
        <StatusBar style="auto" />
        {/* Destination Button */}
        <Pressable onPress={(console.log("Student"))}>
        <StyledComponent 
            component={View} 
            className="flex-row px-6 py-2 bg-black mt-10 " 
            style={{
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 4,
                shadowColor: '#707070',
                shadowOffset: {width: -5, height: 5},
                shadowOpacity: 1,
                shadowRadius: 0,
            }}>
            {/* Button Text */}
            <Text className="text-lg font-semibold text-white mr-4" >Destination</Text>
            </StyledComponent>
        </Pressable>
        {/* Lottie Component */}
        <StyledComponent 
        component={View} 
        className="flex items-center justify-start" >
        <AnimatedLottieView 
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/location.json')}
            style={{width: '80%', aspectRatio: 1}}
            autoPlay
            loop
            />
        </StyledComponent>

        {/* Find Shuttle Button */}
        <Pressable onPress={(console.log("Student"))}>
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
            <Text className="text-xl font-semibold mr-4" >Find Shuttle</Text>
            {/* Button Logo */}
            <Image 
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Bus.png')} 
            />
            </StyledComponent>
        </Pressable>
        </SafeAreaView>
  )
};