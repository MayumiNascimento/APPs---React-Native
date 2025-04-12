import { TouchableOpacity, Text } from 'react-native';
import {styles} from './styles'
 
function Button ({ onPress, label, cor })  {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: cor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

 
export default Button;