import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';
import Bai1 from './Bai1';
import Bai2 from './Bai2';
import Bai3 from './Bai3';

const Stack = createStackNavigator();
const Navi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Bai1' component={Bai1}  />
        <Stack.Screen name='Bai2' component={Bai2}  />
        <Stack.Screen name='Bai3' component={Bai3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navi

const styles = StyleSheet.create({})