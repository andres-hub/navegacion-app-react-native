import { StyleSheet } from "react-native";

export const colores = {
    prmary: '#5856D6'
}


export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal: 20
    },
    title:{
        fontSize: 30,
        marginBottom: 10
    },
    botonGrande:{
        width: 100,
        height:100,
        backgroundColor:'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    bottonGrandeTexto:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer:{
        marginTop: 10,
        alignItems: 'center'
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius:100
    },
    menuContainer:{
        marginVertical:20,
        marginHorizontal:50,
    },
    menuBoton:{
        marginVertical:10,
        flexDirection: 'row'
    },
    menuText:{
        fontSize:20,
        paddingLeft:20
    }
});