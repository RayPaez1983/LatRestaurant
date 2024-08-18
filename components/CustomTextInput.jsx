import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CustomTextInput = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    color: '#fff',
    backgroundColor: 'transparent', // Transparent background for input fields
  },
  form: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'transparent', // Transparent background
    borderColor: 'transparent', // Transparent border
    color: '#fff', // Text color
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '25%',
    left: 0,
    right: 0,
    shadowColor: '#fff', // Shadow color
    shadowOffset: { width: 0, height: 5 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 5, // Android shadow
  },
});

export default CustomTextInput;
