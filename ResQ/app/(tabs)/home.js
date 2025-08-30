import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Home() {
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    const animation = Animated.loop(Animated.timing(scrollAnim, { toValue: -width, duration: 15000, useNativeDriver: true, isInteraction: false }));
    animation.start();
    return () => animation.stop();
  }, [scrollAnim]);

  const repeatedText = 'Alert! '.repeat(20);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.marqueeContainer}>
          <Animated.Text style={[styles.marqueeText, { transform: [{ translateX: scrollAnim }] }]}>{repeatedText}</Animated.Text>
          <Animated.Text style={[styles.marqueeText, { transform: [{ translateX: Animated.add(scrollAnim, width) }], position: 'absolute', left: width }]}>{repeatedText}</Animated.Text>
        </View>
      </View>

      <View style={styles.centerContent}>
        <TouchableOpacity style={styles.sosButton}>
          <Text style={styles.sosButtonText}>SOS</Text>
        </TouchableOpacity>
        <Text style={styles.instruction}>Click here to send an emergency alert to your{"\n"}predefined contacts with your location</Text>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/(tabs)/service')}>
          <Text style={styles.actionButtonText}>my location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', justifyContent: 'space-between' },
  header: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 20 },
  marqueeContainer: { flex: 1, overflow: 'hidden', flexDirection: 'row', position: 'relative', height: 24 },
  marqueeText: { color: '#ea2a33', fontWeight: 'bold', fontSize: 16 },
  centerContent: { alignItems: 'center', paddingHorizontal: 20 },
  sosButton: { backgroundColor: '#ea2a33', borderRadius: width * 0.45, height: width * 0.9, width: width * 0.9, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  sosButtonText: { color: 'white', fontSize: width * 0.3, fontWeight: 'bold' },
  instruction: { color: 'white', fontStyle: 'italic', textAlign: 'center', marginBottom: 12, fontSize: 16 },
  actionButton: { backgroundColor: '#282828', paddingVertical: 12, borderRadius: 8, width: width * 0.55, marginTop: 14, alignItems: 'center' },
  actionButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
