import { Text, View, ScrollView } from 'react-native';
import Card from '../../components/Card/index';
import {styles} from './styles'

export default function Anuncios() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios</Text>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false}>
        <Card img={'https://s2-techtudo.glbimg.com/BCqlJVcBFept2TRfoVf5z0kYUGg=/0x0:1200x800/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png'} 
        texto='Bicicleta nova para adultos, unico dono.'
        preco='R$250'/>

        <Card img={'https://diariodocomercio.com.br/wp-content/uploads/2024/08/gol.jpg'} 
        texto='Carro seminovo, reformado recentemente com motor original.'
        preco='R$12000'/>

        <Card img={'https://www.moto.com.br/assets/motos_mais_buscadas/NC750X.webp'} 
        texto='Moto nova com preço competitivo, pegar ou largar.'
        preco='R$8000'/>

      </ScrollView>
    </View>
  );
}
