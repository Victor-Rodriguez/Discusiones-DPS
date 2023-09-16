import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Card } from '@rneui/themed' //react-native-elements
import { styles } from './ComidaTipica.styles'
import { data } from '../utils/data'


export function ComidaTipica() {
    return (
        <ScrollView>
            <View style={styles.contenedorTitulo}>
                <Text style={styles.titulo}>Comida Típica Salvadoreña</Text>
            </View>
            <View style={styles.contenedorPrincipal}>
                {data.map(food => (

                    <Card key={food.nombre}>
                        <View style={styles.cardContainer}>
                            <View style={styles.contenedorImage}>
                                <Image source={food.src} style={styles.image} />
                            </View>
                            <View style={styles.contenedorInfo}>
                                <Card.Title style={styles.nombre}>{food.nombre}</Card.Title>
                                <Text style={styles.descripcion}>{food.descripcion}</Text>
                                <Text style={styles.textoCalorias}>Calorías: {food.calorias}</Text>
                            </View>

                        </View>
                    </Card>

                ))}
            </View>
        </ScrollView>

    )
}