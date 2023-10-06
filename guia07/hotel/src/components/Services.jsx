import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { IconButton, Text } from "react-native-paper";

export function Services() {
    return (
        <View style={styles.contenedor}>
            <Text variant='headlineLarge' style={styles.titulo}>Servicios</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='coffee' size={20} />
                    <Text variant='labelMedium'>Muy buen desayuno</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='parking' size={20} />
                    <Text variant='labelMedium'>Parking gratis</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='swim' size={20} />
                    <Text variant='labelMedium'>Piscina al aire libre</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='silverware' size={20} />
                    <Text variant='labelMedium'>3 restaurantes</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='shower-head' size={20} />
                    <Text variant='labelMedium'>Baño Privado</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='eye' size={20} />
                    <Text variant='labelMedium'>Vistas</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='spa' size={20} />
                    <Text variant='labelMedium'>Spa y centro de bienestar</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='bathtub' size={20} />
                    <Text variant='labelMedium'>Bañera de hidromasaje</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='wifi' size={20} />
                    <Text variant='labelMedium'>WiFi en todo el alojamiento</Text>
                </View>
                <View style={styles.contenedorIcono}>
                    <IconButton icon='cigar-off' size={20} />
                    <Text variant='labelMedium'>Habitaciones sin humo</Text>
                </View>
            </ScrollView>
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
    contenedorIcono: {
        width: 190,
        height: 110,
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10
    },
})