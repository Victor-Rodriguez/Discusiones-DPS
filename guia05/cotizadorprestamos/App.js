import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';


export default function App() {
  const [capital, setCapital] = useState(0)
  const [interest, setInterest] = useState(0)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (capital && interest && months) calculate()
    else reset()
  }, [capital, interest, months])
  
  const calculate = () => {
    reset()
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar')
    } else if (!interest) {
      setErrorMessage('Añade el interes del prestamo')
    } else if (!months) {
      setErrorMessage('Selecciona los meses a pagar')
    }else {
      const i = interest / 100
      const fee = capital / ((1 - Math.pow(i + 1, - months )) / i)
      setTotal({
        monthlyFee: fee.toFixed(2).replace(',', '.'),
        totalPayable: (fee * months).toFixed(2).replace(',','.')
      })
    }
  }

  const reset = () => {
    setErrorMessage('')
    setTotal(null)
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.header}>
        <Text style={styles.headApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <Result
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer/>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  headApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  }
});
