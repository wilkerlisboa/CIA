import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>TUXTU Conectividade Ambiental © 2024 Todos os direitos reservados.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    text: {
        color: '#888',
        fontSize: 12,
    },
});