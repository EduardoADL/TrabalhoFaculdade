import React from "react";
import { View, Text, SafeAreaView, TextInpu, StyleSheet, Alert  } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import Button from '../../components/button/Button'



const Formulario = ({navigation}) => {

    const confirm = () => {
        Alert.alert('Ponto cadastrado');
        navigation.navigate('Inicial');
    }

    return (
        <SafeAreaView style={styles.all}>
            <View style={styles.container}>
                <Text style={styles.label}>Funcionário</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Thales', value: 'Thales' },
                        { label: 'Vitor', value: 'Vitor' },
                        { label: 'Higor', value: 'Higor' },
                        { label: 'Hugo', value: 'Hugo' },
                    ]}
                />
            </View>
            <View style={styles.container_abaixo}>
                <Text style={styles.label}>Situação</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Pronto', value: 'Pronto' },
                        { label: 'Dispensado', value: 'Dispensado' },
                        { label: 'Serviço', value: 'Serviço' },
                    ]}
                />
            </View>
            <View style={styles.container_abaixo}>
                <Text style={styles.label}>Dia do mês</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '1', value: '1' },
                        { label: '2', value: '2' },
                        { label: '3', value: '3' },
                        { label: '4', value: '4' },
                        { label: '5', value: '5' },
                        { label: '6', value: '6' },
                        { label: '7', value: '7' },
                        { label: '8', value: '8' },
                        { label: '9', value: '9' },
                        { label: '10', value: '10' },
                        { label: '11', value: '11' },
                        { label: '12', value: '12' },
                        { label: '13', value: '13' },
                        { label: '14', value: '14' },
                        { label: '15', value: '15' },
                        { label: '16', value: '16' },
                        { label: '17', value: '17' },
                        { label: '18', value: '18' },
                        { label: '19', value: '19' },
                        { label: '20', value: '20' },
                        { label: '21', value: '21' },
                        { label: '22', value: '22' },
                        { label: '23', value: '23' },
                        { label: '24', value: '24' },
                        { label: '25', value: '25' },
                        { label: '26', value: '26' },
                        { label: '27', value: '27' },
                        { label: '28', value: '28' },
                        { label: '29', value: '29' },
                        { label: '30', value: '30' },
                        { label: '31', value: '31' },
                    ]}
                />
            </View>
            <View style={styles.container_abaixo}>
                <Text style={styles.label}>Dia da Semana</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Domingo', value: 'Domingo' },
                        { label: 'Segunda-Feira', value: 'Segunda_Feira' },
                        { label: 'Terça-Feira', value: 'Terca_Feira' },
                        { label: 'Quarta-Feira', value: 'Quarta_Feira' },
                        { label: 'Quinta-Feira', value: 'Quinta_Feira' },
                        { label: 'Sexta-Feira', value: 'Sexta_Feira' },
                        { label: 'Sábado', value: 'Sabado' },
                        
                    ]}
                />
            </View>
            <View style={styles.container_abaixo}>
                <Text style={styles.label}>Mês</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Janeiro', value: 'Janeiro' },
                        { label: 'Fevereiro', value: 'Fevereiro' },
                        { label: 'Março', value: 'Março' },
                        { label: 'Abril', value: 'Abril' },
                        { label: 'Maio', value: 'Maio' },
                        { label: 'Junho', value: 'Junho' },
                        { label: 'Julho', value: 'Julho' },
                        { label: 'Agosto', value: 'Agosto' },
                        { label: 'Setembro', value: 'Setembro' },
                        { label: 'Outubro', value: 'Outubro' },
                        { label: 'Novembro', value: 'Novembro' },
                        { label: 'Dezembro', value: 'Dezembro' },
                    ]}
                />

                <Button text='Cadastrar Ponto' onPress={ confirm } />
            </View>

        </SafeAreaView>
    )

}
export default Formulario;

const styles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        marginLeft:12,
        width: 350 ,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingLeft: 10, // to ensure the text is never behind the icon
    },
    label:{
        color: "black",
        fontSize: 24,
        marginBottom: 5,
        fontWeight:"bold"
    },
    container:{
        display: "flex",
        alignItems:'center',
        justifyContent:'center'
    },
    container_abaixo:{
        display: "flex",
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20
    },
    all:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})