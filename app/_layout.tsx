import { colors } from '@/constants/theme';
import { AuthProvider } from '@/context/authContext';
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

const StackLayout = () => {
  useEffect(()=>{
    SystemUI.setBackgroundColorAsync(colors.neutral900)
  },[])
  return (
    <Stack screenOptions={{
      headerShown: false,}}>   
    </Stack>
  )
}
export default function RootLayout(){
  return(
    <AuthProvider>
       <StackLayout />
    </AuthProvider>
  )
}


const styles = StyleSheet.create({})