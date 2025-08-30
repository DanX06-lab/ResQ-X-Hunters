// Placeholder permissions helpers. For real permissions, install expo-location / expo-notifications.

export async function requestLocationPermission() {
  // TODO: Integrate expo-location and requestForegroundPermissionsAsync
  // const { status } = await Location.requestForegroundPermissionsAsync();
  // return status === 'granted';
  return true; // assume granted for now
}

export async function requestNotificationPermission() {
  // TODO: Integrate expo-notifications and requestPermissionsAsync
  return true;
}
