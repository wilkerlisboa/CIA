import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './style';

export default function Inicio() {
  const openLink = () => {
    // Substitua 'https://seulinkaqui.com' pelo link desejado
    Linking.openURL('http://www.tuxtu.com.br/sepea');
  };

  return (
    <TouchableOpacity onPress={openLink}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/adaptative.png')} resizeMode="cover" />
        <Text style={styles.paragraph}>
          Calculadora de Indicadores Ambientais
        </Text>
      </View>
    </TouchableOpacity>
  );
}
