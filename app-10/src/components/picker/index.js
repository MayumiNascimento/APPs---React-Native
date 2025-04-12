import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

function PickerField ({ label, selectedValue, onValueChange, items }) {
  return (
    <Text style={styles.label}>
      {label}:
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </Text>
  );
};

export default PickerField