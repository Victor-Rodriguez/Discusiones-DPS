import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from './src/utils/colors';


export default function App() {
  //Definir el state de citas
  const [citas, setCitas] = useState([])
  const [mostrarForm, setMostrarForm] = useState(false)

  useEffect(() => {
    const obtenerCitasStorage = async () => {
      try {
        const citasStorage = await AsyncStorage.getItem('citas');
        if (citasStorage) {
          setCitas(JSON.parse(citasStorage))
        }
      } catch (error) {
        console.log(error);
      }
    }
    obtenerCitasStorage();
  }, [])

  //Elimina los pacientes del state
  const eliminarPaciente = id => {
    const citasFiltradas = citas.filter(cita => cita.id !== id)
    setCitas(citasFiltradas)
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  }
  //Mostra u oculta el formulario
  const mostrarFormulario = () => {
    setMostrarForm(!mostrarForm)
  }
  //Ocultar teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss()
  }
  //Almacenar las citas en storage
  const guardarCitasStorage = async (citasJson) => {
    try {
      await AsyncStorage.setItem('citas', citasJson)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Adminitrador de Citas</Text>
        <View>
          <TouchableHighlight style={styles.btnMostrarForm} onPress={() => mostrarFormulario()}>
            <Text style={styles.textoMostrarForm}>{mostrarForm ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarForm ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                setMostrarForm={setMostrarForm}
                guardarCitasStorage={guardarCitasStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas'
                : 'No hay citas, agrega una'} </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({ item }) => <Cita item={item}
                  eliminarPaciente={eliminarPaciente} />}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.PRIMARY_COLOR,
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
