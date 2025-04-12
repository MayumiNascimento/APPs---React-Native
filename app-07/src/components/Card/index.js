import { Text, View, Image } from 'react-native';
import {styles} from './styles'

export default function Card(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: props.img}}/>
      <Text style={styles.texto}>{props.texto}</Text>
      <Text style={styles.texto}>{props.preco}</Text>
    </View>
  );
}
