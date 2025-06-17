import { colors } from '@/constants/theme';
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

const _layout = () => {
  useEffect(()=>{
    SystemUI.setBackgroundColorAsync(colors.neutral900)
  })
  return (
    <Stack screenOptions={{
      headerShown: false,}}>   
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})