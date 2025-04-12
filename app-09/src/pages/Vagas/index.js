import { FlatList, View, Text } from 'react-native';
import Card from '../../components/Card/index';
import { data } from '../../data'
import { styles } from './styles';

export default function Vagas() {

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              titulo={item.titulo}
              salario={item.salario}
              descricao={item.descricao}
              contato={item.contato}
            />
          )}
        /> 
          
    </View>
  )
}