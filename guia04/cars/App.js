import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Toyota',
    src: require('./src/imgs/toyota.jpg')
  },
  {
    id: '2',
    title: 'Mazda',
    src: require('./src/imgs/mazda.jpg')
  },
  {
    id: '3',
    title: 'Mitsubishi',
    src: require('./src/imgs/mitsubishi.jpeg')
  },
]

//Creando componente hijo Item
const Item = ({ title,img }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.img} source={img} />
  </View>
)

export default function App() {
  //Función para renderizar la lista de carros
  const renderItem = ({ item }) => (
    //Utilizando el componente hijo antes creado
    <Item title={item.title} img={item.src} />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  img: {
    width: 200,
    height: 125,
    borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    margin: 8,
  }
});
