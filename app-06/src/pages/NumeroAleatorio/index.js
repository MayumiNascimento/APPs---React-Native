import { View, Text } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import Botao from '../../components/botao/index'

export default function NumeroAleatorio () {

  const [numero, setNumero] = useState(null);

  const sortearNumero = () => {
    const aleatorio = Math.floor(Math.random() * 11);
    setNumero(aleatorio);
  };

  return(
    <View style={styles.container}>

      <Text style={styles.titulo}>Jogo do Número Aleatório</Text>
      <Text style={styles.instrucao}>Pense em um numero de 0 a 10</Text>

      <Text style={styles.numero}>{numero}</Text>
      <Botao onPress={sortearNumero} titulo={"Descobrir"} />
    </View>
  )
}