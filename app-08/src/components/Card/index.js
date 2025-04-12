import { View, Text } from 'react-native';
import { styles } from './styles';

export default function Card({ titulo, salario, descricao, contato }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.texto}>Salário: {salario}</Text>
      <Text style={styles.texto}>Descrição: {descricao}</Text>
      <Text style={styles.texto}>Contato: {contato}</Text>
    </View>
  );
}