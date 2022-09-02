import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
// Hook para que no se soprease del area del telefono los elementos 
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top + 20, ...styles.globalMargin}}>
        <Text style={styles.title}>SettingsScreen</Text>
        <Text>{ JSON.stringify(authState, null, 4) }</Text>
        {
          authState.favoriteIcon && (
            <Icon name={authState.favoriteIcon} size={ 150 } color= { colores.prmary } />
          )
        }
    </View>
  )
}
