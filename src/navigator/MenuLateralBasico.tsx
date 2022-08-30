import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBsico = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
    screenOptions={{
     drawerType: (width >= 768) ? 'permanent' : 'front'
    }}
    >
      <Drawer.Screen options={{title:'Home'}} name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen options={{title:'Settings'}} name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}