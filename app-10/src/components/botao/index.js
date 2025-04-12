import { Pressable, Text } from 'react-native';
import { styles } from './styles';

function Botao ({ onPress, label }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default Botao