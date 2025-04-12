import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Input from '../../components/Input';
import Result from '../../components/Resultado';
import { styles } from './styles'

export default function AlcoolGasolina() {

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const precoAlcool = parseFloat(alcool.replace(',', '.'));
    const precoGasolina = parseFloat(gasolina.replace(',', '.'));

    if (!isNaN(precoAlcool) && !isNaN(precoGasolina) && precoGasolina !== 0) {
      const calculo = precoAlcool / precoGasolina;
      setResultado(calculo);
    } else {
      setResultado(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alcool ou Gasolina</Text>
      <Input label="Preço do Álcool (R$)" value={alcool} onChange={setAlcool} />
      <Input label="Preço da Gasolina (R$)" value={gasolina} onChange={setGasolina} />
      <Button title="Calcular" onPress={calcular} />
      <Result result={resultado} />
    </View>
  );
}

