import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';


const Button = ({text, onPress}) => {
    return(
    <SafeAreaView>
        <TouchableOpacity onPress={ onPress }>
            <View style={styles.botao}>
                <Text style={styles.texto}>{text}</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
    )
}
export default Button;

const styles = StyleSheet.create({
    botao:{
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom:25,
        paddingTop:25,
        backgroundColor:'#6495ED',
        borderRadius:4,
        marginTop: 35
    },
    texto:{
        color: 'black',
        fontSize: 16,
        fontWeight:'bold'
    }
})