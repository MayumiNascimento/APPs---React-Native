import { useState } from 'react';
import { Text, View, Switch } from 'react-native';

import Slider from '@react-native-community/slider';

import Infos from '../../components/infos/index';
import Inputs from '../../components/inputs/index';
import Botao from '../../components/botao/index';
import PickerField from '../../components/picker/index';

import {styles} from './styles'

function Form() {
  const [status, setStatus] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);

const [results, setResults] = useState(null);

  const salvarDados = () => {
    setResults({
      nome,
      idade,
      sexo,
      escolaridade,
      limite,
      status
    });
  };

    const sexoItems = [
    { label: "Selecione o Sexo", value: "" },
    { label: "Masculino", value: "Masculino" },
    { label: "Feminino", value: "Feminino" }
  ];

  const escolaridadeItems = [
    { label: "Selecione a Escolaridade", value: "" },
    { label: "Ensino Fundamental", value: "Ensino Fundamental" },
    { label: "Ensino Médio", value: "Ensino Médio" },
    { label: "Ensino Superior", value: "Ensino Superior" },
    { label: "Ensino Técnico", value: "Ensino Técnico" }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Abertura de Contas</Text>


     <Inputs 
        label="Nome" 
        placeholder="Nome aqui" 
        value={nome}
        onChangeText={setNome} 
      />
      
      <Inputs 
        label="Idade" 
        placeholder="Idade aqui" 
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric" 
      />

      <PickerField 
        label="Sexo" 
        selectedValue={sexo} 
        onValueChange={setSexo} 
        items={sexoItems} 
      />
      
      <PickerField 
        label="Escolaridade" 
        selectedValue={escolaridade} 
        onValueChange={setEscolaridade} 
        items={escolaridadeItems} 
      />

      <View>
        <Text>Limite na Conta: {limite.toFixed(0)}</Text>
        <Slider
          minimumTrackTintColor='purple'
          maximumTrackTintColor='green'
          thumbTintColor='red'
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(value) => setLimite(value)}
          
        /> 
      </View>

      <Text style={{ textAlign: 'left', fontSize: 16 }}>
        {(status) ? "Brasileiro" : "Não é Brasileiro"}
        <Switch
          value={status}
          onValueChange={(valorSwitch) => setStatus(valorSwitch)}
        />
      </Text>
      <Botao onPress={salvarDados} 
        label="Salvar dados"/>
      
        <Infos data={results} />
    </View>
  );
}

export default Form;