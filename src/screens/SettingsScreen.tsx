import React from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {
// Hook para que no se soprease del area del telefono los elementos 
  const insets = useSafeAreaInsets()

  return (
    <View style={{marginTop: insets.top + 20, ...styles.globalMargin}}>
        <Text style={styles.title}>SettingsScreen</Text>
    </View>
  )
}
