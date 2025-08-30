// Placeholder location service. For real GPS, install expo-location and implement.
export async function getCurrentLocation() {
  // Return a mocked location for now
  return { latitude: 12.9716, longitude: 77.5946, accuracy: 50 };
}

export async function reverseGeocode({ latitude, longitude }) {
  // Mocked reverse geocode
  return { city: 'Bengaluru', country: 'India', lat: latitude, lng: longitude };
}
