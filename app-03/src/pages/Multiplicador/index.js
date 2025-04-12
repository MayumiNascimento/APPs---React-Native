import{ useState } from 'react';
import { View, Text } from 'react-native';

import Input from '../../components/Input';
import Botao from '../../components/Botao/index';
import Resultado from  '../../components/Resultado/index'
import {styles} from './styles'
 
function Multiplicador () {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
 
  const calcularMultiplicacao = () => {

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      setResultado(num1 * num2);
    } else {
      setResultado(null);
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>
      
      <View style={styles.inputContainer}>
        <Input
          placeholder="Digite o primeiro número"
          value={numero1}
          onChangeText={setNumero1}
        />
        
        <Input
          placeholder="Digite o segundo número"
          value={numero2}
          onChangeText={setNumero2}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Botao
          label="Calcular"
          cor="#4CAF50"
          onPress={calcularMultiplicacao}
        /> 
        
      </View>
      
      <Resultado resultado={resultado} />
    </View>
  );
};
 

 
export default Multiplicador;