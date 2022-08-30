import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChactScreen } from '../screens/ChactScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from "../theme/appTheme";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
   const {top} = useSafeAreaInsets()
  return (
    <Tab.Navigator
        style={{padding: top}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route})=>({

            tabBarIcon: ({color, focused})=>{
                let iconName: string = '';
                console.log(route.name)
                switch (route.name) {
                    case 'ChactScreen':
                        iconName = 'chatbox-ellipses-outline'
                    break;
                    case 'ContactsScreen':
                        iconName = 'cube-outline'
                    break; 
                    case 'AlbumsScreen':
                        iconName = 'images-outline'
                    break;
                }
                return <Text style={{color}} >
                <Icon name={iconName} size={20} />
                </Text>
            },

            tabBarStyle:{
                shadowColor: 'transparent',
                elevation: 0,
            },
            tabBarPressColor: colores.prmary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle:{
                backgroundColor: colores.prmary
            }
        })}
    >
      <Tab.Screen name="ChactScreen" options={{title:'Chact'}} component={ChactScreen} />
      <Tab.Screen name="ContactsScreen" options={{title:'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title:'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}