import { View, Text } from 'react-native'

import {styles} from './styles'

function Dados(){

  return(       
      <View style={styles.content}>
      
      <Text style={styles.titulo}>Dados Pessoais</Text>
      <Text style={styles.descricao}>Mayumi Nascimento</Text>
      <Text style={styles.descricao}>24 anos</Text>   

    </View>
  )
}
export default Dados;