import { View, Text } from 'react-native'

import {styles} from './styles'

function Experiencia(){

  return(       
      <View style={styles.content}>
      
      <Text style={styles.titulo}>Experiência</Text>
      <Text style={styles.descricao}>Desenvolvimento e manuntenção de sistemas web</Text>
       <Text style={styles.descricao}>Analista de sistemas</Text>
        <Text style={styles.descricao}>Analista de UX</Text>

    </View>
  )
}
export default Experiencia;