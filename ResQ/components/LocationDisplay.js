import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LocationDisplay({ latitude, longitude }) {
  if (latitude == null || longitude == null) {
    return <Text style={styles.text}>Location: fetching...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lat: {latitude.toFixed(5)}</Text>
      <Text style={styles.text}>Lng: {longitude.toFixed(5)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', gap: 12 },
  text: { color: '#fff' },
});
