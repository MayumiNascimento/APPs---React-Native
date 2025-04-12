import { ScrollView, View, Text } from 'react-native';
import Card from '../../components/Card/index';
import { data } from '../../data'
import { styles } from './styles';

export default function Vagas() {

/*estilo em contentContainerStyle para mostrar o ultimo card por completo */
  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Vagas</Text>
      
        <ScrollView contentContainerStyle={{paddingBottom: 40}}> 
          {
            data.map((vaga) => (
              <Card 
                key={vaga.id}
                titulo={vaga.titulo}
                salario={vaga.salario}
                descricao={vaga.descricao}
                contato={vaga.contato}
              />
            ))
          }
          
      </ScrollView>
    </View>
  )
}