import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function IqrQuestions() {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    question12: null,
    question13: null,
    question14: null,
    question15: null,
    question16: null,
    question17: null,
    question18: null,
    question19: null,
  });

  const [iqr, setIqr] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [classification, setClassification] = useState({ text: '', color: 'transparent', backgroundColor: 'transparent' });

  const handleAnswer = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const calcularIQR = () => {
    const total = Object.values(answers).reduce((acc, value) => acc + (value !== null ? value : 0), 0);
    const count = Object.values(answers).filter((value) => value !== null).length;
    const iqrValue = count > 0 ? (total / count) * 100 : 0;
    const iqrArredondado = Math.round(iqrValue);
    setIqr(iqrArredondado);

    // Definir classificação
    const result = getClassification(iqrArredondado);
    setClassification(result);

    setModalVisible(true); // Mostrar modal após o cálculo
  };

  const getClassification = (score) => {
    if (score < 60) {
      return { text: 'Aterro Inadequado', color: 'white', backgroundColor: 'red'};
    } else if (score >= 60 && score < 80) {
      return { text: 'Aterro Controlado', color: 'white', backgroundColor: '#FFC100' };
    } else if (score >= 80 && score <= 100) {
      return { text: 'Aterro Adequado', color: 'white', backgroundColor: 'blue' };
    } else {
      return { text: '', color: 'transparent', backgroundColor: 'transparent' };
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setIqr(null); // Limpa o estado do IQR ao fechar a modal
    setClassification(
      
      { text: '', color: 'transparent', backgroundColor: 'transparent' }); // Limpa a classificação ao fechar a modal
  };

  return (
    <View style={styles.container}>
      {/* PERGUNTA 1 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O isolamento visual do empreendimento frente à vizinhança é adequado?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question1 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question1', 1)}
          >
            <Text style={[styles.buttonText, answers.question1 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question1 === 0 && styles.selectedButton, answers.question1 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question1', 0)}
          >
            <Text style={[styles.buttonText, answers.question1 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 2 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Na portaria do empreendimento há balança instalada e funcionando?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question2 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question2', 1)}
          >
            <Text style={[styles.buttonText, answers.question2 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question2 === 0 && styles.selectedButton, answers.question2 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question2', 0)}
          >
            <Text style={[styles.buttonText, answers.question2 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 3 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O empreendimento tem em toda sua área cercamento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question3 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question3', 1)}
          >
            <Text style={[styles.buttonText, answers.question3 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question3 === 0 && styles.selectedButton, answers.question3 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question3', 0)}
          >
            <Text style={[styles.buttonText, answers.question3 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 4 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Os demais equipamentos do empreendimento são adequados?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question4 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question4', 1)}
          >
            <Text style={[styles.buttonText, answers.question4 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question4 === 0 && styles.selectedButton, answers.question4 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question4', 0)}
          >
            <Text style={[styles.buttonText, answers.question4 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 5 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>A qualidade das vias de acesso até o empreendimento são adequadas?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question5 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question5', 1)}
          >
            <Text style={[styles.buttonText, answers.question5 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question5 === 0 && styles.selectedButton, answers.question5 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question5', 0)}
          >
            <Text style={[styles.buttonText, answers.question5 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 6 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O acesso à frente de trabalho dentro do empreendimento é adequado?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question6 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question6', 1)}
          >
            <Text style={[styles.buttonText, answers.question6 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question6 === 0 && styles.selectedButton, answers.question6 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question6', 0)}
          >
            <Text style={[styles.buttonText, answers.question6 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 7 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Existe controle do recebimento de resíduos empreendimento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question7 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question7', 1)}
          >
            <Text style={[styles.buttonText, answers.question7 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question7 === 0 && styles.selectedButton, answers.question7 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question7', 0)}
          >
            <Text style={[styles.buttonText, answers.question7 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
       {/* PERGUNTA 8 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>A área de armazenamento de resíduos é adequada?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question8 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question8', 1)}
          >
            <Text style={[styles.buttonText, answers.question8 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question8 === 0 && styles.selectedButton, answers.question8 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question8', 0)}
          >
            <Text style={[styles.buttonText, answers.question8 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 9 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Existe drenagem de chorume no empreendimento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question9 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question9', 1)}
          >
            <Text style={[styles.buttonText, answers.question9 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question9 === 0 && styles.selectedButton, answers.question9 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question9', 0)}
          >
            <Text style={[styles.buttonText, answers.question9 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 10 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O sistema de drenagem de chorume está funcionando?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question10 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question10', 1)}
          >
            <Text style={[styles.buttonText, answers.question10 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question10 === 0 && styles.selectedButton, answers.question10 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question10', 0)}
          >
            <Text style={[styles.buttonText, answers.question10 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 11 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Os drenos horizontais e verticais de gases estão adequados?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question11 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question11', 1)}
          >
            <Text style={[styles.buttonText, answers.question11 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question11 === 0 && styles.selectedButton, answers.question11 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question11', 0)}
          >
            <Text style={[styles.buttonText, answers.question11 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 12 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O sistema de captação de gás está em funcionamento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question12 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question12', 1)}
          >
            <Text style={[styles.buttonText, answers.question12 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question12 === 0 && styles.selectedButton, answers.question12 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question12', 0)}
          >
            <Text style={[styles.buttonText, answers.question12 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 13 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O sistema de cobertura de resíduos está adequado?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question13 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question13', 1)}
          >
            <Text style={[styles.buttonText, answers.question13 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question13 === 0 && styles.selectedButton, answers.question13 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question13', 0)}
          >
            <Text style={[styles.buttonText, answers.question13 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 14 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Existe refeitório no empreendimento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question14 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question14', 1)}
          >
            <Text style={[styles.buttonText, answers.question14 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question14 === 0 && styles.selectedButton, answers.question14 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question14', 0)}
          >
            <Text style={[styles.buttonText, answers.question14 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 15 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Os trabalhadores usam equipamentos de proteção individual (EPI) no empreendimento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question15 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question15', 1)}
          >
            <Text style={[styles.buttonText, answers.question15 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question15 === 0 && styles.selectedButton, answers.question15 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question15', 0)}
          >
            <Text style={[styles.buttonText, answers.question15 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 16 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Os trabalhadores recebem treinamento adequado no empreendimento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question16 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question16', 1)}
          >
            <Text style={[styles.buttonText, answers.question16 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question16 === 0 && styles.selectedButton, answers.question16 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question16', 0)}
          >
            <Text style={[styles.buttonText, answers.question16 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 17 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>Existe área de disposição final de resíduos no empreendimento?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question17 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question17', 1)}
          >
            <Text style={[styles.buttonText, answers.question17 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question17 === 0 && styles.selectedButton, answers.question17 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question17', 0)}
          >
            <Text style={[styles.buttonText, answers.question17 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 18 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O acesso à área de disposição final de resíduos é adequado?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question18 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question18', 1)}
          >
            <Text style={[styles.buttonText, answers.question18 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question18 === 0 && styles.selectedButton, answers.question18 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question18', 0)}
          >
            <Text style={[styles.buttonText, answers.question18 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* PERGUNTA 19 */}
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.question}>O empreendimento possui licença ambiental válida?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, answers.question19 === 1 && styles.selectedButton]}
            onPress={() => handleAnswer('question19', 1)}
          >
            <Text style={[styles.buttonText, answers.question19 === 1 && styles.selectedButtonText]}>Sim</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, answers.question19 === 0 && styles.selectedButton, answers.question19 === 0 && styles.selectedButtonNo]}
            onPress={() => handleAnswer('question19', 0)}
          >
            <Text style={[styles.buttonText, answers.question19 === 0 && styles.selectedButtonText]}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* BOTÃO */}
      <TouchableOpacity style={styles.buttonCalcular} onPress={calcularIQR}>
        <Text style={styles.selectedButtonText}>Calcular Índice de Qualidade de Resíduo Sólido</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.resultado}>{`IQR: ${iqr} % 👇`}</Text>
            <Text style={[styles.classificationText, { backgroundColor: classification.backgroundColor }]}>
              {classification.text}
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  selectedButton: {
    backgroundColor: '#238636',
    borderColor: '#238636',
  },
  selectedButtonNo: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  selectedButtonText: {
    color: '#fff',
  },
  buttonCalcular: {
    marginTop: 20,
    marginBottom: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#238636',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    paddingHorizontal: 80,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  classificationText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#238636',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
