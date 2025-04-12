import { View, Text } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/Botao'

function Contador(){

  const [numero, setNumero] = useState(0)

  function decrementar(){
    if (numero > 0)
      setNumero(numero-1)
  }

  return(
    <View>
      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <Text style={styles.contador}>{numero}</Text>

      <Botao titulo='Incrementar' cor='green' funcao={() => setNumero(numero + 1)}/>

      <Botao titulo='Decrementar' cor='red' funcao={decrementar}/>

      <Botao titulo='zerar' cor='black' funcao={() => setNumero(0)}/>
    </View>
  )
}

export default Contador