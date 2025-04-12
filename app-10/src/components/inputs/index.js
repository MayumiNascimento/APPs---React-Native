import { Text, TextInput } from 'react-native';
import { styles } from './styles';

function Inputs ({ label, placeholder, value, onChangeText, keyboardType }) {
  return (
    <Text style={styles.label}>
      {label}: <TextInput 
        style={styles.input}
        placeholder={placeholder} 
        value={value}
        onChangeText={onChangeText} 
        keyboardType={keyboardType} 
      />
    </Text>
  );
};

export default Inputs