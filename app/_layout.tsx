import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Suppress MetaMask extension errors on web
  useEffect(() => {
    if (Platform.OS === 'web') {
      // Suppress MetaMask connection errors
      const originalError = console.error;
      console.error = (...args: any[]) => {
        const errorMessage = args.join(' ');
        // Ignore MetaMask-related errors
        if (
          errorMessage.includes('MetaMask') ||
          errorMessage.includes('Failed to connect to MetaMask') ||
          errorMessage.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
        ) {
          return; // Suppress the error
        }
        originalError.apply(console, args);
      };

      // Also catch unhandled errors
      const handleError = (event: ErrorEvent) => {
        if (
          event.message?.includes('MetaMask') ||
          event.message?.includes('Failed to connect to MetaMask') ||
          event.filename?.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn')
        ) {
          event.preventDefault();
          return false;
        }
      };

      window.addEventListener('error', handleError);

      return () => {
        console.error = originalError;
        window.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="add-vehicle" options={{ headerShown: false }} />
        <Stack.Screen name="brand-selection" options={{ headerShown: false }} />
        <Stack.Screen name="vehicle-details" options={{ headerShown: false }} />
        <Stack.Screen name="review-details" options={{ headerShown: false }} />
        <Stack.Screen name="prebook-fuel" options={{ headerShown: false }} />
        <Stack.Screen name="prebook-fuel-details" options={{ headerShown: false }} />
        <Stack.Screen name="prebooked-vehicles" options={{ headerShown: false }} />
        <Stack.Screen name="view-qr" options={{ headerShown: false }} />
        <Stack.Screen name="transaction-history" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
