import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SOSButton({ onPress, size = 220 }) {
  return (
    <TouchableOpacity accessibilityRole="button" onPress={onPress} style={[styles.btn, { width: size, height: size, borderRadius: size / 2 }] }>
      <Text style={[styles.text, { fontSize: size * 0.33 }]}>SOS</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#ea2a33', justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontWeight: 'bold' },
});
