import React from 'react';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#222' }, tabBarActiveTintColor: '#ea2a33' }}>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="service" options={{ title: 'Service' }} />
      <Tabs.Screen name="contacts" options={{ title: 'Mycontacts' }} />
    </Tabs>
  );
}
