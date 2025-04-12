import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default function Botao (props) {

 return (
    <TouchableOpacity style={styles.botao} onPress={props.onPress}>
      <Text style={styles.textoBotao}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}