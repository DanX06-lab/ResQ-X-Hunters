import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlertBanner({ message = 'Alert!', type = 'info' }) {
  const color = type === 'error' ? '#ff4d4f' : type === 'success' ? '#28a745' : '#ea2a33';
  return (
    <View style={[styles.banner, { borderLeftColor: color }] }>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: { backgroundColor: '#1f2937', padding: 12, borderRadius: 8, borderLeftWidth: 4 },
  text: { color: '#fff' },
});
