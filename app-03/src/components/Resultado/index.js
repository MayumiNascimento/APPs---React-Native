import { View, Text } from 'react-native';
import {styles} from  './styles'
 
function Resultado ({ resultado }){
  if (resultado === null) return null;
 
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Resultado: {resultado}</Text>
    </View>
  );
};

export default Resultado;