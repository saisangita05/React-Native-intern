import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ReusableButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default ReusableButton;
