import React from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>TUXTU Conectividade Ambiental © 2024 Todos os direitos reservados.</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/tuxtuconectividade/')}>
                    <Icon name="facebook" size={30} color="#3b5998" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/tuxtuconectividade/')}>
                    <Icon name="instagram" size={30} color="#C13584" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=5596991953535')}>
                    <Icon name="whatsapp" size={30} color="#25D366" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/tuxtu/')}>
                    <Icon name="linkedin" size={30} color="#0e76a8" style={styles.icon} />
                </TouchableOpacity>
            </View>
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
    iconContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    icon: {
        marginHorizontal: 20,
    },
});
