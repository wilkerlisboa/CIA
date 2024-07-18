import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Modal, Alert } from 'react-native';

export default function IadQuestions() {
    const [currentArea, setCurrentArea] = useState('');
    const [previousArea, setPreviousArea] = useState('');
    const [result, setResult] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleCalculate = () => {
        const current = parseFloat(currentArea.replace(',', ''));
        const previous = parseFloat(previousArea.replace(',', ''));

        if (isNaN(current) || isNaN(previous) || current === 0) {
            Alert.alert("Erro", "Por favor, insira valores válidos para as áreas.");
            return;
        }

        // Corrigindo a fórmula: IAD = (previous / current) * 100
        const iad = (previous / current) * 100;

        setResult(iad.toFixed(2));
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            {/* PERGUNTA 1 */}
            <Text style={styles.question}>Qual o tamanho da área total avaliada em hectares?</Text>
            <TextInput 
                style={styles.input}
                value={currentArea}
                onChangeText={setCurrentArea}
                keyboardType="numeric"
            />

            {/* PERGUNTA 2 */}
            <Text style={styles.question}>Qual o tamanho da área desertificada em hectares?</Text>
            <TextInput 
                style={styles.input}
                value={previousArea}
                onChangeText={setPreviousArea}
                keyboardType="numeric"
            />

            {/* BOTÃO DE CALCULO */}
            <TouchableOpacity style={styles.buttonCalcular} onPress={handleCalculate}>
                <Text style={styles.selectedButtonText}>Calcular Índice de Desertificação</Text>
            </TouchableOpacity>

            {/* MODAL */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.resultado}>Índice de Desertificação: {result}%</Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
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
