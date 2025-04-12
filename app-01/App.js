import { View, Image } from 'react-native';

import Dados from './src/pages/Dados';
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';
import Projetos from './src/pages/Projetos';

export default function App() {
  return (
    <View style={{padding: 25}}>
      <Image style={{height: 250, width: 200, }} source={'https://e7.pngegg.com/pngimages/269/347/png-clipart-spongebob-squarepants-sandy-squirrel-sandy-cheeks-mr-krabs-squidward-tentacles-spongebob-squarepants-plankton-and-karen-spongebob-miscellaneous-child.png'} />
      
      <Dados />
      <Experiencia />
      <Formacao />
      <Projetos />

    </View>
  );
}