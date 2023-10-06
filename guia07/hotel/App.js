import React from 'react';
import { ScrollView, View } from 'react-native';
import { Header } from './src/components/Header';
import { Rooms } from './src/components/Rooms';
import { Services } from './src/components/Services';
import Places from './src/components/Places';

export default function App() {
  return (
    <>
      <ScrollView>
        <Header/>
        <Rooms/>
        <Services/>
        <Places/>
      </ScrollView>
    </>
  );
}