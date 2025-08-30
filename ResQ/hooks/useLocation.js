import { useContext } from 'react';
import { LocationContext } from '../store/LocationContext';

export default function useLocation() {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error('useLocation must be used within <LocationProvider>');
  return ctx;
}
