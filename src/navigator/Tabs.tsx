import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
// import { Tab2Screen } from '../screens/Tab2Screen';
// import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { styles, colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {

    return Platform.OS === 'ios'
        ? <TabsIOS/>
        : <TabsAndroid/>

}


const BottomTabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () =>{
  return (
    <BottomTabsAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{backgroundColor: colores.prmary}}
        screenOptions={({route})=>({
            tabBarIcon: ({color, focused})=>{
                let iconName: string = '';
                console.log(route.name)
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'airplane-outline'
                    break;
                    case 'Tab2Screen':
                        iconName = 'american-football-outline'
                    break; 
                    case 'StackNavigator':
                        iconName = 'arrow-redo-circle-outline'
                    break;
                }
                return <Text style={{color}} >
                    <Icon name={iconName} size={20} />
                    </Text>
            }
        })}
    >
      <BottomTabsAndroid.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabsAndroid.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabNavigator} />
      <BottomTabsAndroid.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabsAndroid.Navigator>
  );
}

const BottomTabsIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabsIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={({route})=>({
            tabBarIcon: ({color, focused, size})=>{
                let iconName: string = '';
                console.log(route.name)
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'T1'
                    break;
                    case 'Tab2Screen':
                        iconName = 'T2'
                    break; 
                    case 'StackNavigator':
                        iconName = 'St'
                    break;
                }
                return <Text style={{color}} >{iconName}</Text>
            },
            tabBarStyle:{
                borderColor: colores.prmary,
                borderTopWidth: 0,
                elevation: 0
            },
            tabBarActiveTintColor: colores.prmary,
            tabBarLabelStyle:{
                fontSize:15
            }
        })}
    >
      {/* <Tab.Screen name="Tab1Screean" options={{title:'Tab1', tabBarIcon: (props)=> <Text style={{color: props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabsIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabsIOS.Screen name="Tab2Screen" options={{title:'Tab2'}} component={TopTabNavigator} />
      <BottomTabsIOS.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabsIOS.Navigator>
  );
}