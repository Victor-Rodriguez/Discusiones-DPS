import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from "react-native-paper";

export default function Places() {
    return (
        <View style={styles.contenedor}>
            <Text variant='headlineLarge' style={styles.titulo}>¿Qué hay cerca?</Text>
            <View style={styles.listado}>
                <View style={styles.listaItem}>
                    <Image style={styles.lugares} source={require('../assets/images/monumento-salvador-del-mundo.jpg')} />
                    <Text variant='labelSmall' style={styles.nombreLugar}>Monumento Salvador del Mundo</Text>
                </View>
                <View style={styles.listaItem}>
                    <Image style={styles.lugares} source={require('../assets/images/catedral.jpg')} />
                    <Text variant='labelSmall' style={styles.nombreLugar}>Catedral</Text>
                </View>
                <View style={styles.listaItem}>
                    <Image style={styles.lugares} source={require('../assets/images/palacio-nacional.jpg')} />
                    <Text variant='labelSmall' style={styles.nombreLugar}>Palacio Nacional</Text>
                </View>
                <View style={styles.listaItem}>
                    <Image style={styles.lugares} source={require('../assets/images/teatro-nacional.jpg')} />
                    <Text variant='labelSmall' style={styles.nombreLugar}>Teatro Nacional</Text>
                </View>
                <View style={styles.listaItem}>
                    <Image style={styles.lugares} source={require('../assets/images/plaza-libertad-san-salvador.png')} />
                    <Text variant='labelSmall' style={styles.nombreLugar}>Plaza Libertad</Text>
                </View>
                <View style={styles.listaItem}>
                    <Image style={styles.lugares} source={require('../assets/images/metrocentro.jpg')} />
                    <Text variant='labelSmall' style={styles.nombreLugar}>Metrocentro</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginHorizontal: 10
    },
    titulo: {
        fontWeight: "bold",
        fontSize: 24,
        marginVertical: 10,
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    listaItem: {
        flexBasis: '49%'
    },
    lugares: {
        width: "100%",
        height: 200,
        marginVertical: 5,
    },
    nombreLugar: {
        textAlign: 'center',
        /* backgroundColor: 'gray' */
    }
})