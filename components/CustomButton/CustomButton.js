import React from 'react';
import { Text, View, StyleSheet, Pressable, Touchable, TouchableOpacity } from 'react-native';

export default function CustomButton(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={({ pressed }) => [{ backgroundColor: pressed ? 'blue' : 'white' }, styles.button ]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
    pressed: {
        backgroundColor: 'red',
    }
});