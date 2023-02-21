import { Image, KeyboardAvoidingView, Text, TextInput, View, Pressable} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyledComponent } from 'nativewind'


const StudentLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    // Keyboard Avoid View
    <KeyboardAvoidingView>

    {/* Safe Area View */}
      <SafeAreaView className = "flex items-center bg-white h-screen" >
        {/* Logo */}
        <Image 
            className = "mt-10"
            source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
            />

        {/* Login Form */}
        <StyledComponent 
        component = {View} 
        className =" flex items-center mt-10 px-10 py-16 pt-6 bg-white"
        style={{
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 4,
            shadowColor: '#171717',
            shadowOffset: {width: -5, height: 5},
            shadowOpacity: 1,
            shadowRadius: 0,
            }}
        >
            {/* Login Text */}
            <Text className="text-3xl font-bold" >Login </Text>

            {/* Email Input  */}
            <TextInput 
                className ="mt-10 bg-white w-52 h-10 px-5"
                style = {{
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 4,
                }}
                placeholder='Email' 
                value={email} 
                onChangeText={ text => setEmail(text)} 
                />

            {/* Password Input  */}
             <TextInput 
                className ="mt-10 bg-white w-52 h-10 px-5 "
                style = {{
                    borderWidth: 2,
                    borderColor: "black",
                    borderRadius: 4,
                }}
                placeholder='Password' 
                secureTextEntry
                value= {password}
                onChangeText={ text => setPassword(text)} 
                />          

            {/* Login Button */}
            <Pressable onPress={() => console.log(email + password)}>
                <StyledComponent 
                component={View} 
                className="flex-row px-10 py-4 bg-black mt-10 " 
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
                <Text className="text-xl font-semibold mr-4 text-white" >Login</Text>
                {/* Button Logo */}
                <Image 
                    source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Login_Icon.png')} 
                    />
                </StyledComponent>
            </Pressable>

            {/* Register Button */}
            <Pressable onPress={() => console.log(email + password)}>
                <StyledComponent 
                component={View} 
                className="flex-row px-5 py-4 bg-white mt-10 " 
                    style={{
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 4,
                    shadowColor: 'black',
                    shadowOffset: {width: -5, height: 5},
                    shadowOpacity: 1,
                    shadowRadius: 0,
                    }}>
                {/* Button Text */}
                <Text className="text-xl font-semibold mr-4 text-black" >Register</Text>
                {/* Button Logo */}
                <Image 
                    source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Register_Icon.png')} 
                    />
                </StyledComponent>
            </Pressable>
  
        </StyledComponent>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default StudentLogin