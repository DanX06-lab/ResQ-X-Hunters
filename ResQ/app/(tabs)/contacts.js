import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactsList from '../../components/ContactsList';

export default function Contacts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My contacts</Text>
      <ContactsList contacts={[{ name: 'Alice', phone: '1234567890' }, { name: 'Bob', phone: '9876543210' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  title: { color: '#ea2a33', fontWeight: 'bold', fontSize: 20, marginBottom: 12 },
});
