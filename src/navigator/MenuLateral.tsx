import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions()

  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuInterno {...props}/>}
    screenOptions={{
     drawerType: (width >= 768) ? 'permanent' : 'front',
    }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps)=>{
 return (
  <DrawerContentScrollView>

    {/* Avatar */}
    <View 
      style={styles.avatarContainer}
    >
      <Image 
      source={{
        uri: 'https://palmira.gov.co/wp-content/plugins/elementskit/widgets/yelp/assets/images/profile-placeholder.png'
      }}
      style={styles.avatar}
      />
    </View>

    {/* Opciones de menu */}
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuBoton} onPress={()=> navigation.navigate('StackNavigator')}>
        <Text style={styles.menuText}>Navegacion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuBoton}>
        <Text style={styles.menuText}  onPress={()=> navigation.navigate('SettingsScreen')}>Ajustes</Text>
      </TouchableOpacity>
    </View>

  </DrawerContentScrollView>
 )
}