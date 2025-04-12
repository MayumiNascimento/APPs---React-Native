import { TextInput } from 'react-native';
import {styles} from './styles'
 
function Input ({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;