import { Text, View, StyleSheet, Image } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.paragraph}>
        SEPEA - CIA - Calculadora de Indicadores Ambientais
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 30,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 130,
    width: 137  ,

  }
});
