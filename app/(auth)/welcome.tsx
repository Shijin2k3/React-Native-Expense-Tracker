import Button from '@/components/Button'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import React from 'react'
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native'

const Welcome = () => {
  const router=useRouter()
  return (
   <ScreenWrapper>
     <View style={styles.container}>
        {/* login button and image */}

       <View>
       <TouchableOpacity onPress={()=>router.push("/(auth)/Login")} style={styles.loginButton}>
          <Typo fontWeight={'500'}>Sign in</Typo>
       </TouchableOpacity>
       <Animated.Image 
       source={require('../../assets/images/welcome.png')}
       style={styles.welcomeImage} resizeMode='contain'/> 
       </View>
       
       {/* footer */}
       <View style={styles.footer}>
         <View style={{alignItems:"center"}}>
          <Typo fontWeight={"800"} size={30}>Always Take control</Typo>
          <Typo fontWeight={"800"} size={30}>of your finance</Typo>
         </View>
         <View style={{alignItems:"center",gap:2}}>
          <Typo  size={17} color={colors.textLight}>Finances must be arranged to set a better</Typo>
          <Typo  size={17}>lifestyle in future .</Typo>
         </View>
         <View style={styles.buttonContainer}>
            <Button onPress={()=>router.push('/(auth)/Register')}>
               <Typo size={22} color={colors.neutral900} fontWeight={600}>Get Started</Typo>
            </Button>
         </View>
       </View>
     </View>

   </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        paddingTop:spacingY._7,
    },
    welcomeImage:{
        width:"100%",
        height:verticalScale(300),
        alignSelf:'center',
        marginTop:verticalScale(100)

    },
    loginButton:{
        alignSelf:"flex-end",
        marginRight:spacingX._20
    },
    footer:{
        backgroundColor:colors.neutral900,
        alignItems:"center",
        paddingTop:verticalScale(30),
        paddingBottom:verticalScale(45),
        gap:spacingY._20,
        shadowColor:"white",
        shadowOffset:{width:0,height:-10},
        elevation:10,
        shadowRadius:25,
        shadowOpacity:0.15
    },
    buttonContainer:{
        width:"100%",
        paddingHorizontal:spacingX._25
    }
})