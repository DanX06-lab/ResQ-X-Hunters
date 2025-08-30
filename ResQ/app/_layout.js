import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';
import { AuthProvider } from '../store/AuthContext';
import { LocationProvider } from '../store/LocationContext';
import { EmergencyProvider } from '../store/EmergencyContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <LocationProvider>
        <EmergencyProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
            <StatusBar barStyle="light-content" />
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#121212' } }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="auth/login" />
              <Stack.Screen name="auth/signup" />
              <Stack.Screen name="(tabs)" />
            </Stack>
          </SafeAreaView>
        </EmergencyProvider>
      </LocationProvider>
    </AuthProvider>
  );
}
