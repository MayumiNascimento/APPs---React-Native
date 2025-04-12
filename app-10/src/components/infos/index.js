import { View, Text } from 'react-native';
import { styles } from './styles';

function Infos ({ data }) {
  if (!data) return null;
  
  return (
    <View style={styles.container}>
      <Text>{data.nome}</Text>
      <Text>{data.idade}</Text>
      <Text>{data.sexo}</Text>
      <Text>{data.escolaridade}</Text>
      <Text>{data.limite.toFixed(0)}</Text>
      <Text>{data.status ? 'Brasileiro' : 'Não é Brasileiro'}</Text>
    </View>
  );
};

export default Infos