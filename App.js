import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cartao from './src/components/cartaorpg';

export default function App() {

  const cartoes = [
    {
      nome: 'Espada antiga',
      descricao: 'Uma antiga espada usada há séculos perdidos.',
      encantamento: 'Afiado: O seu poder de corte é em muito incrementado.',
      qualidade: "Rara",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoPlBhUVchOScR3TTS2i2-N5Ei7C5VzVmDOw&usqp=CAU"
    },
    {
      nome: 'Cajado de madeira',
      descricao: 'Um simples cajado de madeira. Útil para canalizar magias.',
      encantamento: 'Conexão:  O usuário passa a conseguir teletransportar-se para ela, independente de o quão longe esteja. Ideal para surpreender inimigos.',
      qualidade: "Comum",
      imgUrl: "https://i.pinimg.com/474x/db/7c/b7/db7cb7d4b93748dfbdadb7eef04b9bad.jpg"
    },
    {
      nome: 'Murakumogiri',
      descricao: 'Um bisento que já esteve em posse de um grande paladino conhecido como "Sir Newgate".',
      encantamento: 'Alcance:Ao ser aplicado em uma arma, ela passará a possuir a propriedade de ter um tamanho incrementado, mas o incremento é completamente invisível por qualquer um que não esteja a segurando.',
      qualidade: "Lendário",
      imgUrl: "https://pbs.twimg.com/media/ElvZKEdXgAAowsW.jpg"
    },
  ]

  return (
    <View style={styles.container}>
      {cartoes.map(c => <Cartao cartao={c}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});