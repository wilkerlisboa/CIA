import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card } from 'react-native-paper';

import Inicio from './components/Inicio/Inicio';
import Iqr from './components/IQR/Iqr';
import Footer from './components/Footer/footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Inicio />
        <Card style={styles.card}>
          <Iqr/>
        </Card>
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 7,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginVertical: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
});
