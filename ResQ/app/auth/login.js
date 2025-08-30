import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    // TODO: integrate auth service
    router.replace('/(tabs)/home');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Login</Text>
      <TextInput placeholder="Username" placeholderTextColor="#aaa" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#aaa" secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <TouchableOpacity style={styles.btn} onPress={onLogin}><Text style={styles.btnText}>LOGIN</Text></TouchableOpacity>
      <Text style={styles.footer}>Don't have an account? <Link href="/auth/signup" style={styles.link}>Sign Up</Link></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: '#121212', padding: 24, alignItems: 'center', justifyContent: 'center' },
  heading: { color: '#ea2a33', fontSize: 28, fontWeight: 'bold', marginBottom: 24 },
  input: { width: '100%', backgroundColor: '#1f2937', color: '#fff', borderColor: '#ea2a33', borderWidth: 1, borderRadius: 8, padding: 12, marginBottom: 12 },
  btn: { width: '100%', backgroundColor: '#ea2a33', padding: 14, borderRadius: 24, marginTop: 8, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' },
  footer: { color: '#fff', marginTop: 16 },
  link: { color: '#ea2a33', fontWeight: 'bold' },
});
