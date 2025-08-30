import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const options = [
  { label: 'Fire', icon: '🔥' },
  { label: 'Flood', icon: '🌎' },
  { label: 'Medical', icon: '⚕️' },
  { label: 'Crime', icon: '🛠️' },
  { label: 'Blood camp', icon: '💧' },
];

export default function Service() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service</Text>
      <Text style={styles.sectionHeading}>What kind of emergency</Text>
      <View style={styles.emergencyRow}>
        {options.map(o => (
          <View key={o.label} style={styles.emergencyOption}>
            <TouchableOpacity style={styles.iconCircle} onPress={() => { /* navigate to details if exist */ }}>
              <Text style={styles.iconText}>{o.icon}</Text>
            </TouchableOpacity>
            <Text style={styles.label}>{o.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', paddingTop: 24 },
  title: { fontSize: 24, color: '#ea2a33', fontWeight: 'bold' },
  sectionHeading: { fontSize: 18, color: '#ea2a33', marginVertical: 16 },
  emergencyRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', gap: 16, width: '100%', paddingHorizontal: 16 },
  emergencyOption: { alignItems: 'center', width: '28%' },
  iconCircle: { width: 64, height: 64, backgroundColor: '#ea2a33', borderRadius: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  iconText: { fontSize: 28, color: '#fff' },
  label: { color: '#fff' },
});
