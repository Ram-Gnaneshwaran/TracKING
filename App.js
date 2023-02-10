import { StatusBar } from 'expo-status-bar';
import { Image, Text, SafeAreaView, Pressable, View} from 'react-native';
import { StyledComponent } from "nativewind";
import AnimatedLottieView from 'lottie-react-native';

export default function App() {
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

  );
}

//HomeScreen.js

// <SafeAreaView className = "flex-1 items-center justify-start bg-white">
// {/* Logo */}
// <Image 
// className = "mt-36"
// source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
// />
// <StatusBar style="auto" />
//  {/* Text */}
//  <Text className = "text-4xl font-semibold mt-10 ">Who are you ?</Text>

//  {/* Container */}
//  <StyledComponent 
//    component={View} 
//    className=" flex-row mt-10 " >

//    {/* Student Button */}
//    <Pressable onPress={(console.log("Student"))}>
//      <StyledComponent 
//      component={View} 
//      className="flex-row px-10 py-4 mr-8 bg-white mt-10 " 
//      style={{
//        borderWidth: 1,
//        borderColor: "black",
//        borderRadius: 4,
//        shadowColor: '#171717',
//        shadowOffset: {width: -5, height: 5},
//        shadowOpacity: 1,
//        shadowRadius: 0,
//      }}>
//      {/* Button Text */}
//      <Text className="text-xl font-semibold mr-4" >Student</Text>
//      {/* Button Logo */}
//      <Image 
//      source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Student.png')} 
//      />
//      </StyledComponent>
//    </Pressable>
//    {/* Border */}
//    <StyledComponent 
//      component={View} 
//      className=" bg-white text-xl font-semibold px-14 mt-16 " 
//      style={{
//        borderTopColor: "black",
//        borderTopWidth: 1,
//      }}>
//      </StyledComponent>
//  </StyledComponent>

//  {/* Container 2 */}
//  <StyledComponent 
//    component={View} 
//    className=" flex-row mt-10 " >

//    {/* Border */}
//    <StyledComponent 
//      component={View} 
//      className=" bg-white text-xl font-semibold px-14 mt-16 " 
//      style={{
//        borderTopColor: "black",
//        borderTopWidth: 1,
//      }}>
//      </StyledComponent>

//    {/* Driver Button */}
//    <Pressable onPress={(console.log("Student"))}>
//      <StyledComponent 
//      component={View} 
//      className="flex-row px-10 py-4 ml-8 bg-white mt-10 " 
//      style={{
//        borderWidth: 1,
//        borderColor: "black",
//        borderRadius: 4,
//        shadowColor: '#171717',
//        shadowOffset: {width: -5, height: 5},
//        shadowOpacity: 1,
//        shadowRadius: 0,
//      }}>
//      {/* Button Text */}
//      <Text className="text-xl font-semibold mr-4" >Driver</Text>
//      {/* Button Logo */}
//      <Image 
//      source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Bus.png')} 
//      />
//      </StyledComponent>
//    </Pressable>
//  </StyledComponent>
// </SafeAreaView>


//Student.js

// <SafeAreaView className = "flex-1 items-center justify-start bg-white">
// {/* Logo */}
// <Image 
// className = "mt-10"
// source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
// />
// <StatusBar style="auto" />
// {/* Destination Button */}
// <Pressable onPress={(console.log("Student"))}>
//   <StyledComponent 
//       component={View} 
//       className="flex-row px-6 py-2 bg-black mt-10 " 
//       style={{
//         borderWidth: 1,
//         borderColor: "white",
//         borderRadius: 4,
//         shadowColor: '#707070',
//         shadowOffset: {width: -5, height: 5},
//         shadowOpacity: 1,
//         shadowRadius: 0,
//       }}>
//       {/* Button Text */}
//       <Text className="text-lg font-semibold text-white mr-4" >Destination</Text>
//       </StyledComponent>
// </Pressable>
// {/* Lottie Component */}
// <StyledComponent 
// component={View} 
// className="flex items-center justify-start" >
//   <AnimatedLottieView 
//     source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/location.json')}
//     style={{width: '80%', aspectRatio: 1}}
//     autoPlay
//     loop
//     />
// </StyledComponent>

// {/* Find Shuttle Button */}
// <Pressable onPress={(console.log("Student"))}>
//   <StyledComponent 
//       component={View} 
//       className="flex-row px-10 py-4 ml-8 bg-white mt-10 " 
//       style={{
//         borderWidth: 1,
//         borderColor: "black",
//         borderRadius: 4,    
//         shadowColor: '#171717',
//         shadowOffset: {width: -5, height: 5},
//         shadowOpacity: 1,
//         shadowRadius: 0,
//       }}>
//       {/* Button Text */}
//       <Text className="text-xl font-semibold mr-4" >Find Shuttle</Text>
//       {/* Button Logo */}
//       <Image 
//       source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Bus.png')} 
//       />
//       </StyledComponent>
// </Pressable>
// </SafeAreaView>

//Driver.js

// <SafeAreaView className = "flex-1 items-center justify-start bg-white">

// {/* Logo */}
// <Image 
//   className = "mt-10"
//   source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/Logo.png')} 
//   />

// <StatusBar style="auto" />

// {/* Lottie Component */}
// <StyledComponent 
//   component={View} 
//   className="flex items-center justify-start mt-24" >
//     <AnimatedLottieView 
//       source={require('/Users/gnaneshwaran/Documents/GitProjects/TracKing/my-app/assets/driver.json')}
//       style={{width: '60%', aspectRatio: 1}}
//       autoPlay
//       loop
//       />
// </StyledComponent>

// {/* Stylised Text */}
// <StyledComponent 
//   component={Text} 
//   className="flex items-center justify-start text-xl" >
//     <Text > Your </Text>
//     <Text className=" text-green-500 font-bold">Location</Text>
//     <Text > is being </Text>
//     <Text className=" font-bold"> TracKed!</Text>
// </StyledComponent>

// {/* Captions*/}
// <StyledComponent 
//   component={Text} 
//   className="text-gray-500 mt-4" >
//     <Text > Students can now find you in their app! </Text>
// </StyledComponent>

// </SafeAreaView>
