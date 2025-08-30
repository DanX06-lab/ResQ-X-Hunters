import React, { createContext, useMemo, useState, useCallback } from 'react';

export const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [location, setLocation] = useState(null); // { latitude, longitude, accuracy }

  const updateLocation = useCallback((next) => setLocation(next), []);

  const value = useMemo(() => ({ location, updateLocation }), [location, updateLocation]);
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}
