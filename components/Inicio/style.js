import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    paragraph: {
        margin: 24,
        marginTop:180,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 130,
        width: 240,
        position:'absolute',
        marginTop: -150,
        zIndex: 0,
    }
});

export default styles;