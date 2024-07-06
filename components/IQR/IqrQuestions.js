import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

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

  const [average, setAverage] = useState(null);

  const handleAnswer = (question, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: value,
    }));
  };

  const calcularMedia = () => {
    const total = Object.values(answers).reduce((acc, value) => acc + (value !== null ? value : 0), 0);
    const count = Object.values(answers).filter((value) => value !== null).length;
    const media = count > 0 ? (total / count) * 100 : 0;
    const mediaArredondada = Math.round(media);
    setAverage(mediaArredondada);
  };
  const getClassification = (score) => {
    if (score < 60) {
      return { text: 'Aterro Inadequado', color: 'red' };
    } else if (score >= 60 && score < 80) {
      return { text: 'Aterro Controlado', color: '#FFC100' };
    } else if (score >= 80 && score <= 100) {
      return { text: 'Aterro Adequado', color: 'blue' };
    } else {
      return { text: '', color: 'transparent' };
    }
  };

  const classification = average !== null ? getClassification(average) : null;

  return (
    <View style={styles.container}>
      {/* pergunta 1 */}
      <Text style={styles.question}>O isolamento visual do empreendimento frente à vizinhança é adequado?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question1 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question1', 1)}
        >
          <Text style={[styles.buttonText, answers.question1 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question1 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question1', 0)}
        >
          <Text style={[styles.buttonText, answers.question1 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>

      {/* pergunta 2 */}
      <Text style={styles.question}>Na portaria do empreendimento há balança instalada e funcionando?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question2 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question2', 1)}
        >
          <Text style={[styles.buttonText, answers.question2 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question2 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question2', 0)}
        >
          <Text style={[styles.buttonText, answers.question2 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>

      {/* pergunta 3 */}
      <Text style={styles.question}>O empreendimento tem em toda sua área cercamento?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question3 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question3', 1)}
        >
          <Text style={[styles.buttonText, answers.question3 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question3 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question3', 0)}
        >
          <Text style={[styles.buttonText, answers.question3 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 4 */}
      <Text style={styles.question}>Os demais equipamentos do empreedimento são adequados?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question4 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question4', 1)}
        >
          <Text style={[styles.buttonText, answers.question4 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question4 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question4', 0)}
        >
          <Text style={[styles.buttonText, answers.question4 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 5 */}
      <Text style={styles.question}>A qualidade das vias de acesso até o empreendimento são adequadas?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question5 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question5', 1)}
        >
          <Text style={[styles.buttonText, answers.question5 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question5 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question5', 0)}
        >
          <Text style={[styles.buttonText, answers.question5 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 6 */}
      <Text style={styles.question}>O acesso à frente de trabalho dentro do empreendimento é adequado?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question6 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question6', 1)}
        >
          <Text style={[styles.buttonText, answers.question6 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question6 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question6', 0)}
        >
          <Text style={[styles.buttonText, answers.question6 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 7 */}
      <Text style={styles.question}>Existe controle do recebimento de resíduos empreendimento?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question7 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question7', 1)}
        >
          <Text style={[styles.buttonText, answers.question7 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question7 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question7', 0)}
        >
          <Text style={[styles.buttonText, answers.question7 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 8 */}
      <Text style={styles.question}>Há ocorrência de resíduos descobertos na área do empreendimento?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question8 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question8', 1)}
        >
          <Text style={[styles.buttonText, answers.question8 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question8 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question8', 0)}
        >
          <Text style={[styles.buttonText, answers.question8 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 9 */}
      <Text style={styles.question}>Há presença de urubu e gaivotas na área do empreendimento?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question9 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question9', 1)}
        >
          <Text style={[styles.buttonText, answers.question9 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question9 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question9', 0)}
        >
          <Text style={[styles.buttonText, answers.question9 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 10 */}
      <Text style={styles.question}>Há presença de mosca em grande quantidade na área do empreendimento?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question10 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question10', 1)}
        >
          <Text style={[styles.buttonText, answers.question10 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question10 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question10', 0)}
        >
          <Text style={[styles.buttonText, answers.question10 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 11 */}
      <Text style={styles.question}>Há a presença de catadores na área do empreendimento?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question11 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question11', 1)}
        >
          <Text style={[styles.buttonText, answers.question11 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question11 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question11', 0)}
        >
          <Text style={[styles.buttonText, answers.question11 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 12 */}
      <Text style={styles.question}>Há a presença de animais na área do empreendimento?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question12 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question12', 1)}
        >
          <Text style={[styles.buttonText, answers.question12 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question12 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question12', 0)}
        >
          <Text style={[styles.buttonText, answers.question12 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 13 */}
      <Text style={styles.question}>O empreendimento possui sistema de drenagem pluvial adequado?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question13 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question13', 1)}
        >
          <Text style={[styles.buttonText, answers.question13 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question13 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question13', 0)}
        >
          <Text style={[styles.buttonText, answers.question13 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 14 */}
      <Text style={styles.question}>O empreendimento possui sistema de drenagem de lixiviados adequados?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question14 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question14', 1)}
        >
          <Text style={[styles.buttonText, answers.question14 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question14 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question14', 0)}
        >
          <Text style={[styles.buttonText, answers.question14 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 15 */}
      <Text style={styles.question}>O empreendimento possui sistema de drenagem de gases adequado?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question15 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question15', 1)}
        >
          <Text style={[styles.buttonText, answers.question15 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question15 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question15', 0)}
        >
          <Text style={[styles.buttonText, answers.question15 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 16 */}
      <Text style={styles.question}>O empreendimento possui sistema de tratamento de lixiviado adequado?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question16 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question16', 1)}
        >
          <Text style={[styles.buttonText, answers.question16 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question16 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question16', 0)}
        >
          <Text style={[styles.buttonText, answers.question16 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 17 */}
      <Text style={styles.question}>O empreendimento possui sistema de tratamento de gases adequado?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question17 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question17', 1)}
        >
          <Text style={[styles.buttonText, answers.question17 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question17 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question17', 0)}
        >
          <Text style={[styles.buttonText, answers.question17 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 18 */}
      <Text style={styles.question}>O empreendimento possui plano de emergência?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question18 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question18', 1)}
        >
          <Text style={[styles.buttonText, answers.question18 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question18 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question18', 0)}
        >
          <Text style={[styles.buttonText, answers.question18 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>
      {/* pergunta 19 */}
      <Text style={styles.question}>O empreendimento possui iluminação adequada para trabalho noturno?</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, answers.question19 === 1 && styles.selectedButton]}
          onPress={() => handleAnswer('question19', 1)}
        >
          <Text style={[styles.buttonText, answers.question19 === 1 && styles.selectedButtonText]}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, answers.question19 === 0 && styles.selectedButton]}
          onPress={() => handleAnswer('question19', 0)}
        >
          <Text style={[styles.buttonText, answers.question19 === 0 && styles.selectedButtonText]}>Não</Text>
        </TouchableOpacity>
      </View>


      {/* BOTÃO DE CALCULO */}
      <TouchableOpacity style={styles.buttonCalcular} onPress={calcularMedia}>
        <Text style={styles.selectedButtonText}>Realizar Estudo</Text>
      </TouchableOpacity>

      {/* Resultado */}
      {average !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultado}>Média: {average} % 👇</Text>
          <View style={[styles.classificationContainer, { backgroundColor: classification.color }]}>
            <Text style={styles.classificationText}>{classification.text}</Text>
          </View>
        </View>
      )}
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonCalcular: {
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#238636',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#238636',
    borderColor: '#238636',
  },
  selectedButtonText: {
    color: '#fff',
  },
  buttonText: {
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  classificationContainer: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  classificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
