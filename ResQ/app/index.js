import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Index() {
  const router = useRouter();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, { toValue: 1, duration: 1600, useNativeDriver: false }).start();
    const t = setTimeout(() => router.replace('/auth/login'), 2000);
    return () => clearTimeout(t);
  }, [router, progress]);

  const w = progress.interpolate({ inputRange: [0, 1], outputRange: [0, Math.min(width * 0.6, 400)] });

  return (
    <View style={styles.body}>
      <Text style={styles.logo}>RES<Text style={styles.plus}>Q+</Text></Text>
      <View style={styles.barBg}>
        <Animated.View style={[styles.barFill, { width: w }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center' },
  logo: { color: '#ea2a33', fontWeight: 'bold', fontSize: 48, marginBottom: 32 },
  plus: { fontSize: 56 },
  barBg: { width: Math.min(width * 0.6, 400), height: 8, backgroundColor: '#222', borderRadius: 12, overflow: 'hidden' },
  barFill: { height: '100%', backgroundColor: '#ea2a33', borderRadius: 12 },
});
