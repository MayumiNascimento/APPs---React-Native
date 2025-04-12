import { View, Text } from 'react-native'

import {styles} from './styles'

function Projetos(){

  return(       
      <View style={styles.content}>
      <Text style={styles.titulo}>Projetos</Text>
      <Text style={styles.descricao}>Belesys: sistema web para gestão de salões de beleza</Text>
      <Text style={styles.descricao}>My brief: aplicativo para gestão de informações</Text>
      <Text style={styles.descricao}>Car Park: aplicativo para estacionamentos</Text>
      <Text style={styles.descricao}>Adopet: site para divulgação de ONG Animal</Text>
    </View>
  )
}
export default Projetos;
    