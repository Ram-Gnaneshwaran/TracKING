import { Image, Text, SafeAreaView, Pressable, View, TouchableOpacity} from 'react-native';
import { StyledComponent } from "nativewind";
import AnimatedLottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';


export default function DriverHome() {
    const navigation = useNavigation()

    //Firebase SignOut
    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Home")
            console.log("Signed Out!")
        })
        .catch(error => alert(error.message))
    }
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

       {/* Sign Out Button */}
       <TouchableOpacity onPress={handleSignOut}>
        <StyledComponent 
            component={View} 
            className="flex-row px-10 py-4 ml-8 bg-black mt-10 " 
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
            <Text className="text-xl font-semibold mr-4 text-white" >Sign Out</Text>
            {/* Button Logo */}
            <Image 
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Login_Icon.png')} 
            />
            </StyledComponent>
        </TouchableOpacity>

        </SafeAreaView>
  )
};