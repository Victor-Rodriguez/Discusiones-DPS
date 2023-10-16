import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableWithoutFeedback, Animated, View, Alert } from 'react-native'
import { Picker } from "@react-native-picker/picker";

const Formulario = ({ busqueda, guardarbusqueda, guardarconsultar }) => {
    const { pais } = busqueda
    const [animacionBoton] = useState(new Animated.Value(1))

    const consultarPais = () => {
        if (pais.trim() === '') {
            mostrarAlerta()
            return
        }
        //Consultar API
        guardarconsultar(true)
    }

    const mostrarAlerta = () => {
        Alert.alert('Error', 'Debe seleccionar un pais'), [{ Text: 'Entendido' }]
    }

    const animacionEntrada = () => {
        Animated.spring(animacionBoton, {
            toValue: 0.7,
            useNativeDriver: true,
            duration: 500,
        }).start()
    }

    const animacionSalida = () => {
        Animated.spring(animacionBoton, {
            toValue: 1,
            useNativeDriver: true,
            duration: 500,
        }).start()
    }

    const estiloAnimacion = {
        transform: [
            {
                scale: animacionBoton,
            }
        ],
    }



    return (
        <>
            <View>
                <View>
                    <Text style={styles.input}>Pais</Text>
                </View>
                <View>
                    <Picker 
                        style={styles.itemPais}
                        selectedValue={pais}
                        onValueChange={pais => guardarbusqueda({...busqueda, pais})}
                        onPress={() => consultarPais()}
                    >
                        <Picker.Item label='--Seleccione un pais--' value='' />
                        <Picker.Item label='Canada' value='ca' />
                        <Picker.Item label='El Salvador' value='sv' />
                        <Picker.Item label='Guatemala' value='gt' />
                        <Picker.Item label='Honduras' value='hn' />
                        <Picker.Item label='Nicaragua' value='ni' />
                        <Picker.Item label='Panama' value='pa' />
                        <Picker.Item label='Costa Rica' value='cr' />
                        <Picker.Item label='Mexico' value='mx' />
                        <Picker.Item label='Argentina' value='ar' />
                        <Picker.Item label='Estados Unidos' value='us' />
                        <Picker.Item label='Colombia' value='co' />
                        <Picker.Item label='España' value='es' />
                        <Picker.Item label='Peru' value='pe' />
                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={() => animacionEntrada()}
                    onPressOut={() => animacionSalida()}
                    onPress={() => consultarPais()}
                >
                    <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                        <View style={styles.btnBuscar}>
                            <Text style={styles.textoBuscar}>Buscar Pais</Text>
                        </View>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}

export default Formulario

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    itemPais: {
        height: 60,
        backgroundColor: '#fff'
    },
    btnBuscar: {
        marginTop: 20,
        height: 50,
        backgroundColor: '#000',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    textoBuscar: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})