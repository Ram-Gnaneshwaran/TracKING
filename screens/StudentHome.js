import { Image, Text, SafeAreaView, Pressable, View, TouchableOpacity} from 'react-native';
import { StyledComponent } from "nativewind";
import AnimatedLottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';


export default function StudentHome() {

    //Navigation 
    const navigation = useNavigation()

    //Destination
    const [selected, setSelected] = useState("");

    //Destination Data
    const data = [
        {key:'1', value:'SJT'},
        {key:'2', value:'Main Block'},
        {key:'3', value:'Men Hostel'},
        {key:'4', value:'Women Hostel'},
        {key:'5', value:'TT'},
        {key:'6', value:'SMV'},
        {key:'6', value:'MGB'},
    ]

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

        {/* Destination Button */}
        <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data} 
            save="value"
            boxStyles={{
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 4,    
                shadowColor: '#171717',
                shadowOffset: {width: -5, height: 5},
                shadowOpacity: 1,
                shadowRadius: 0,
                marginTop: 30,
                minWidth: 100,
                }}
            dropdownStyles ={ {
                minHeight: 100,
            }}
                />
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
        <Pressable onPress={() => {}}>
        <StyledComponent 
            component={View} 
            className="flex-row px-10 py-4 ml-4 bg-white mt-10 " 
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

        {/* Sign Out Button */}
        <TouchableOpacity onPress={handleSignOut}>
        <StyledComponent 
            component={View} 
            className="flex-row px-10 py-4 ml-4 bg-black mt-10 " 
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