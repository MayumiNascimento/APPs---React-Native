import { View, Text, StyleSheet } from 'react-native';
import {styles} from './styles'

interface Props {
  result: number | null;
}

export default function Resultado({ result }: Props) {
  if (result === null) return null;

  const message = result < 0.7
    ? 'Álcool é mais vantajoso'
    : 'Gasolina é mais vantajosa';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Resultado: {result.toFixed(2)}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

