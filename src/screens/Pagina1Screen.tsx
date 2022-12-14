import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props extends StackScreenProps<any, any>{}

export const Pagina1Screen = ( {navigation}: Props) => {

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Pagina1Screen </Text>
        <Button title='Ir pagina 2'
        onPress={()=> navigation.navigate('Pagina2Screen')}
        />
        <Text style={{marginVertical: 20, fontSize:20, marginLeft:5}} >Navegar con argumentos</Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={()=> navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
          >
            <Text style={styles.bottonGrandeTexto}>
              <Icon name='person-circle-outline' size={30} />
              Pedro
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={()=> navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
          >
            <Text style={styles.bottonGrandeTexto}>
              Maria
              <Icon name='person-outline' size={25} />
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
