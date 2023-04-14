import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Cartao(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.cartao.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>Nome: {props.cartao.nome}</Text>
                <Text style={styles.descricao}>Descrição: {props.cartao.descricao}</Text>
                <Text style={styles.encantamento}>Encantamento: {props.cartao.encantamento}</Text>
                <Text style={styles.qualidade}>Qualidade: {props.cartao.qualidade}</Text>
                <Button style={styles.botao} color = 'gold' title="Trocar"/>
            </View>
        </View>
    );
}