import React from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { Card, Text } from 'react-native-paper';

export function Rooms() {
    return (
        <View style={styles.contenedor}>
            <Text variant='headlineLarge' style={styles.titulo}>Habitaciones</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.contenedorCarta}>
                    <Card mode='outlined' style={styles.carta}>
                        <Card.Cover style={styles.imagenCarta} source={require('../assets/images/habitacion-doble-deluxe.jpg')} />
                        <Card.Content style={styles.textoImagen}>
                            <Text variant="titleSmall">Habitacion Doble Deluxe</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.contenedorCarta}>
                    <Card mode='outlined' style={styles.carta}>
                        <Card.Cover source={require('../assets/images/habitacion-cama-grande-deluxe.jpg')} />
                        <Card.Content style={styles.textoImagen}>
                            <Text variant="titleSmall">Habitacion Deluxe</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.contenedorCarta}>
                    <Card mode='outlined'>
                        <Card.Cover source={require('../assets/images/habitacion-con-ducha.jpg')} />
                        <Card.Content style={styles.textoImagen}>
                            <Text variant="titleSmall">Habitacion Doble Deluxe</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.contenedorCarta}>
                    <Card mode='outlined'>
                        <Card.Cover source={require('../assets/images/habitacion-ejecutiva-dos-camas.jpg')} />
                        <Card.Content style={styles.textoImagen}>
                            <Text variant="titleSmall">Habitacion Doble Deluxe</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.contenedorCarta}>
                    <Card mode='outlined'>
                        <Card.Cover source={require('../assets/images/habitacion-ejecutiva-cama-grande.jpg')} />
                        <Card.Content style={styles.textoImagen}>
                            <Text variant="titleSmall">Habitacion Doble Deluxe</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.contenedorCarta}>
                    <Card mode='outlined'>
                        <Card.Cover source={require('../assets/images/suite-junior.jpg')} />
                        <Card.Content style={styles.textoImagen}>
                            <Text variant="titleSmall">Habitacion Doble Deluxe</Text>
                        </Card.Content>
                    </Card>
                </View>
                <View style={styles.contenedorCarta}>
                    <Card mode='outlined'>
                        <Card.Cover source={require('../assets/images/suite-presidencial.jpg')} />
                        <Card.Content style={styles.textoImagen}>
                            <Text variant="titleSmall">Habitacion Doble Deluxe</Text>
                        </Card.Content>
                    </Card>
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
    contenedorCarta: {
        marginRight: 10,
        /* backgroundColor: 'gray' */
    },
    carta: {
        width: 250,
    },
    imagenCarta: {
        width: '100%',
    },
    textoImagen: {
        alignItems: 'center'
    }

})