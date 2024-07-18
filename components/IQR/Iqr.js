import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import IqrQuestions from './IqrQuestions';
import IosQuestions from '../IOS/IosQuestions';
import IaaQuestions from '../IAA/IaaQuestions';
import IadQuestions from '../IAD/IadQuestions';

export default function Iqr() {
  const [selectedValue, setSelectedValue] = useState('');

  const renderSelectedComponent = () => {
    switch (selectedValue) {
      case '1':
        return <IaaQuestions />
      case '2':
        return  <IadQuestions />
      case '3':
        return <IaaQuestions />
      case '4':
        return <IosQuestions />;
      case '5':
        return <IqrQuestions />;
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
        <Picker.Item label="IAD - Índice de de Área Desertificada  " value="2" />
        <Picker.Item label="IAA - Índice de Variação de Área Agrícola " value="3" />
        <Picker.Item label="IOS - Índice de Ocupação do Solo" value="4" />
        <Picker.Item label="IQR - Índice de Qualidade de Resíduo Sólido" value="5" />
      </Picker>
      {renderSelectedComponent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
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
