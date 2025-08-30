import { useContext } from 'react';
import { EmergencyContext } from '../store/EmergencyContext';

export default function useEmergency() {
  const ctx = useContext(EmergencyContext);
  if (!ctx) throw new Error('useEmergency must be used within <EmergencyProvider>');
  return ctx;
}
