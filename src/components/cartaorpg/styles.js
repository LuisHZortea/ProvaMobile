import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 5,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewImg: {
        width: '30%',
        height: 300,
        backgroundColor: 'white'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 0
    },
    viewData: {
        backgroundColor: 'saddlebrown',
        padding: 10,
        width: '70%',
        height: '100%',
    },
    nome: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    descricao: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    encantamento: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5 
    },
    qualidade: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5 
    },
    botao: {
        backgroundColor: 'yellow'
    }
});

export default styles;