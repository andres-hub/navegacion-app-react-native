import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {
  
  useEffect(()=>{
    console.log('Tab1Screen effec')
  },[])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            Iconos
        </Text>
        <Text>
          <TouchableIcon iconName="airplane-outline" />
          <TouchableIcon iconName="beer-outline" />
          <TouchableIcon iconName="american-football-outline" />
          <TouchableIcon iconName="battery-charging-outline" />
          <TouchableIcon iconName="boat-outline" />
          <TouchableIcon iconName="at-circle-outline" />
          <TouchableIcon iconName="basket-outline" />
        </Text>
    </View>
  )
}
