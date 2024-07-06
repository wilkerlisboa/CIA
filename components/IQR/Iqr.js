import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import IqrQuestions from './IqrQuestions.js'; // Ajuste o caminho conforme necessário

export default function Iqr() {
  const [selectedValue, setSelectedValue] = useState('');

  const renderSelectedComponent = () => {
    switch (selectedValue) {
      case '1':
        return <IqrQuestions />;
      case '2':
        return <Text>Em breve...</Text>;
      case '3':
        return <Text>Em breve...</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seleção do Indicador:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Seleção do Indicador" value="" />
        <Picker.Item label="IQR - Índice de Qualidade de Aterros Sanitários" value="1" />
        <Picker.Item label="Em breve" value="2" />
        <Picker.Item label="Em breve" value="3" />
      </Picker>
      {renderSelectedComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    width: 200,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});
