import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedorPrincipal: {
        marginTop: 10,
        marginBottom: 20,
        padding: 10,
    },
    cardContainer: {
        flexDirection: 'row',
    },
    contenedorImage: {
        backgroundColor: '#AE445A',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        padding: 3,
        marginRight: 5,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 75
    },
    contenedorInfo: {
        flex: 3,
        fontFamily: 'Open Sans',
        marginLeft: 10,
    },
    nombre: {
        textAlign: 'left',
        fontSize: 16
    },
    descripcion: {
        textAlign: 'left',
        marginBottom: 5,
    },
    contenedorTitulo: {
        backgroundColor: '#AE445A',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        color: '#451952',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textoCalorias: {
        color: '#F39F5A',
        fontWeight: 'bold'
    }
})