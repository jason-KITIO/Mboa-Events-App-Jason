import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import Add from '../../assets/img/add'

const Lien = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  return (
    <View style={styles.liens}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Facebook" value="Facebook" />
        <Picker.Item label="Instagram" value="Instagram" />
        <Picker.Item label="X" value="X" />
      </Picker>
      <TextInput
        style={[styles.input, styles.Costum]}
        placeholder="Ex: Mariage de Aline & Christian"
      />
      <View style={styles.Add}>
        <Add />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  liens: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 150,
  },
  Costum: {
    width: '32%',
  },
  Add: {
    padding: 10,
    backgroundColor: '#041578',
    borderRadius: 8,
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Lien;