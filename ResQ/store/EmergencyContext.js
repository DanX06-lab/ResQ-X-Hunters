import React, { createContext, useMemo, useState, useCallback } from 'react';

export const EmergencyContext = createContext(null);

export function EmergencyProvider({ children }) {
  const [alerts, setAlerts] = useState([]); // list of active alerts
  const addAlert = useCallback((a) => setAlerts((prev) => [a, ...prev]), []);
  const clearAlerts = useCallback(() => setAlerts([]), []);

  const value = useMemo(() => ({ alerts, addAlert, clearAlerts }), [alerts, addAlert, clearAlerts]);
  return <EmergencyContext.Provider value={value}>{children}</EmergencyContext.Provider>;
}
