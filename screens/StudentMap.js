import { View, Text } from 'react-native'
import React from 'react'

const StudentMap = () => {
  return (
    <SafeAreaView className = "flex-1 items-center justify-start bg-white">
    {/* Logo */}
    <Image 
    className = "mt-10"
    source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
    />

    <Text>Map</Text>
    </SafeAreaView>
  )
}

export default StudentMap