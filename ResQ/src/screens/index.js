import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();
  const progress = useRef(new Animated.Value(0)).current; // 0 -> 1

  useEffect(() => {
    // animate progress bar
    Animated.timing(progress, {
      toValue: 1,
      duration: 1600,
      useNativeDriver: false,
    }).start();

    const t = setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }, 2000);
    return () => clearTimeout(t);
  }, [navigation, progress]);

  const widthInterpolate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Math.min(width * 0.6, 400)],
  });

  return (
    <View style={styles.body}>
      <View style={styles.splashContainer}>
        <Text style={styles.logoText}>
          RES<Text style={styles.logoPlus}>Q+</Text>
        </Text>
        <View style={styles.sliderBarBg}>
          <Animated.View style={[styles.sliderBarFill, { width: widthInterpolate }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashContainer: {
    width: '94%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 4,
    marginBottom: 40,
    color: '#ea2a33',
    textAlign: 'center',
  },
  logoPlus: {
    fontSize: 56,
  },
  sliderBarBg: {
    width: Math.min(width * 0.6, 400),
    height: 8,
    backgroundColor: '#222',
    borderRadius: 12,
    overflow: 'hidden',
  },
  sliderBarFill: {
    height: '100%',
    backgroundColor: '#ea2a33',
    borderRadius: 12,
  },
});

export default SplashScreen;
