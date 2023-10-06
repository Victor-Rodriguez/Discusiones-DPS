import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export function Header() {
    return (
        <View style={styles.contenedorImagen}>
            <Image style={styles.banner} source={require('../assets/images/hotel-banner.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorImagen: {
        flexDirection: 'row'
    },
    banner: {
        height: 250,
        flex: 1
    }
})