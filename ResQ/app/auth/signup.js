import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [conf, setConf] = useState('');

  const onSignup = () => {
    // TODO: call authService.signup({ email, pass })
    router.replace('/auth/login');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Create Account</Text>
      <TextInput placeholder="Email" placeholderTextColor="#aaa" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#aaa" secureTextEntry value={pass} onChangeText={setPass} style={styles.input} />
      <TextInput placeholder="Confirm" placeholderTextColor="#aaa" secureTextEntry value={conf} onChangeText={setConf} style={styles.input} />
      <TouchableOpacity style={styles.btn} onPress={onSignup}><Text style={styles.btnText}>SIGN UP</Text></TouchableOpacity>
      <Text style={styles.footer}>Already have an account? <Link href="/auth/login" style={styles.link}>Login</Link></Text>
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
