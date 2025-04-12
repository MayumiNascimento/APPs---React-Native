import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
  imc: number | null;
}

export default function Result({ imc }: Props) {
  const getClassification = (imc: number) => {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 24.9) return 'Peso normal';
  if (imc < 25) return 'Sobrepeso';
  if (imc < 34.9) return 'Obesidade grau 1';
  if (imc < 39.9) return 'Obesidade grau 2';
  return 'Obesidade grau 3';
};

  if (imc === null) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu IMC: {imc.toFixed(1)}</Text>
      <Text style={styles.subtitle}>{getClassification(imc)}</Text>
    </View>
  );
}
