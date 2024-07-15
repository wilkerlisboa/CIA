import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import IqrQuestions from './IqrQuestions';
import IosQuestions from '../IOS/IosQuestions';

export default function Iqr() {
  const [selectedValue, setSelectedValue] = useState('');

  const renderSelectedComponent = () => {
    switch (selectedValue) {
      case '1':
        return <IosQuestions/>;
      case '2':
        return <IqrQuestions />;
      case '3':
        return <Text>Em breve</Text>;
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
        <Picker.Item label="IOS - Índice de Ocupação do Solo" value="1" />
        <Picker.Item label="IQR - Índice de Qualidade de Resíduo Sólido" value="2" />
        <Picker.Item label="Em breve" value="3" />
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
