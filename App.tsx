import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBsico } from './src/navigator/MenuLateralBasico';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        {/* <MenuLateralBsico/> */}
        <MenuLateral/>
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any)=>{
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App