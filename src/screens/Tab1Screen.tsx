import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';


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
          <Icon name="airplane-outline" size={80} color="#900" />
        </Text>
    </View>
  )
}
