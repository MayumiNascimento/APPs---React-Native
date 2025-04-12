import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import Input from '../../components/Input';
import Resultado from '../../components/Resultado';
import { styles } from './styles';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    if (!isNaN(pesoNum) && !isNaN(alturaNum) && alturaNum !== 0) {
      const resultado = pesoNum / (alturaNum * alturaNum);
      setImc(resultado);
    } else {
      setImc(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo do IMC</Text>
      <Input label="Peso (kg)" value={peso} onChange={setPeso} placeholder="Ex: 70.5" />
      <Input label="Altura (m)" value={altura} onChange={setAltura} placeholder="Ex: 1.75" />
        <Button title="Calcular IMC" onPress={calcularIMC} />
        <Resultado imc={imc} />
    </View>
  );
}
