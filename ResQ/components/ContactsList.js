import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContactsList({ contacts = [] }) {
  return (
    <View style={styles.list}>
      {contacts.map((c, i) => (
        <View key={`${c.phone}-${i}`} style={styles.item}>
          <Text style={styles.name}>{c.name}</Text>
          <Text style={styles.phone}>{c.phone}</Text>
        </View>
      ))}
      {contacts.length === 0 && <Text style={styles.empty}>No contacts</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { gap: 8 },
  item: { backgroundColor: '#1f2937', padding: 12, borderRadius: 8 },
  name: { color: '#fff', fontWeight: 'bold' },
  phone: { color: '#bbb' },
  empty: { color: '#777' },
});
