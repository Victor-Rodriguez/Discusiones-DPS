import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            alert("Modal has been closed");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel de Centroamérica.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </Modal>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.banner}
            source={require("./src/assets/images/bg.jpg")}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>¿Qué hacer en El Salvador?</Text>
          <ScrollView horizontal>
            <View>
              <TouchableHighlight
                onPress={() => {setModalVisible(!modalVisible)}}
              >
                <Image
                  style={styles.ciudad}
                  source={require("./src/assets/images/actividad1.jpg")}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/assets/images/actividad2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/assets/images/actividad3.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/assets/images/actividad4.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/assets/images/actividad5.jpg")}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/assets/images/mejores1.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/assets/images/mejores2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/assets/images/mejores3.jpg")}
              />
            </View>
          </View>

          <Text style={styles.titulo}>Rutas Turísticas</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/assets/images/ruta1.jpg")}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/assets/images/ruta2.jpg")}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/assets/images/ruta3.jpg")}
              />
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./src/assets/images/ruta4.jpg")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  ciudad: {
    width: 250,
    height: 250,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vistaModal: {
    flex: 1,
    backgroundColor: '#000000aa'
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center'
  }
});
