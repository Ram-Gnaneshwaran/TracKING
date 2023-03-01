import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



const StudentMap = ({route}) => {

    const { selected } = route.paramKey;
  return (
    <SafeAreaView className = "flex-1 items-center justify-start bg-white">
    {/* Logo */}
    <Image 
    className = "mt-10"
    source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
    />
    <Text>{selected}</Text>
    </SafeAreaView>
  )
}

export default StudentMap