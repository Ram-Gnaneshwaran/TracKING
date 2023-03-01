import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyledComponent } from 'nativewind';



const StudentMap = (props) => {

  const navigatge = useNavigation();

  const handleNavigation = () => {
    navigatge.goBack();
  }

    const selected  = props.route.params.paramKey;
  return (
    <SafeAreaView className = "flex-1 items-center justify-start bg-white">

    {/* Logo */}
    <Image 
    className = "mt-10"
    source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
    />

    {/* Destination Text */}
    <Text className="text-2xl font-bold mt-5">{selected}</Text>


    {/* Go Back Button */}
    <TouchableOpacity onPress={handleNavigation}>
        <StyledComponent 
            component={View} 
            className="flex-row px-10 py-4 ml-4 bg-black mt-5 " 
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
            <Text className="text-xl font-semibold mr-4 text-white" >Change Destination</Text>
            {/* Button Logo */}
            <Image 
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Back.png')} 
            />
            </StyledComponent>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default StudentMap