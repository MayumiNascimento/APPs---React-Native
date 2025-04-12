import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import {styles} from './styles'

interface Props {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

function Input({ label, value, onChange }: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        placeholder="0.00"
      />
    </View>
  );
}

export default Input