import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';

export default function IosQuestions() {
  const [answers, setAnswers] = useState({
    areaTotal: '',
    areaProjeto: '',
  });

  const [indiceOcupacao, setIndiceOcupacao] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  const handleAnswer = (question, value) => {
    // Substitui vírgula por ponto e remove caracteres não numéricos
    const sanitizedValue = value.replace(/[^0-9,.]/g, '').replace(',', '.');
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: sanitizedValue,
    }));
  };

  const calcularIndiceOcupacao = () => {
    const { areaTotal, areaProjeto } = answers;
    const total = parseFloat(areaTotal.replace(',', '.'));
    const projeto = parseFloat(areaProjeto.replace(',', '.'));

    if (!isNaN(total) && !isNaN(projeto) && total !== 0) {
      const indice = (projeto / total) * 100;
      setIndiceOcupacao(indice.toFixed(1));
    } else {
      setIndiceOcupacao(null);
    }
    // Mostra o modal após calcular
    setModalVisible(true);
  };

  const closeModal = () => {
    // Fecha o modal e limpa os resultados
    setModalVisible(false);
    setIndiceOcupacao(null);
  };

  return (
    <View style={styles.container}>
      {/* pergunta 1 */}
      <Text style={styles.question}>Qual o tamanho total da propriedade (m²)?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={answers.areaTotal}
        onChangeText={(value) => handleAnswer('areaTotal', value)}
      />

      {/* pergunta 2 */}
      <Text style={styles.question}>Qual o tamanho da área da propriedade que será implantado o projeto (m²)?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={answers.areaProjeto}
        onChangeText={(value) => handleAnswer('areaProjeto', value)}
      />

      {/* BOTÃO DE CALCULO */}
      <TouchableOpacity style={styles.buttonCalcular} onPress={calcularIndiceOcupacao}>
        <Text style={styles.selectedButtonText}>Calcular Índice de Ocupação</Text>
      </TouchableOpacity>

      {/* Modal de Resultado */}
      <Modal isVisible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.resultado}>IOS: {indiceOcupacao} % 👈</Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginTop: 8,
    width: '80%',
    textAlign: 'center',
  },
  buttonCalcular: {
    marginTop: 50,
    marginBottom: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#238636',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  selectedButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#238636',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
