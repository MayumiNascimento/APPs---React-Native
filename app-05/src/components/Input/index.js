import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

interface Props {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
}

export default function InputField({ label, value, onChange, placeholder }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </View>
  );
}
