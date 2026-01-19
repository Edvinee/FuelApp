import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea}>
        {/* Top Status Bar Area */}
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41 PM</Text>
          <View style={styles.statusIconsContainer}>
            <View style={styles.statusIcons}>
              <View style={styles.signalBars}>
                <View style={[styles.bar, styles.bar1]} />
                <View style={[styles.bar, styles.bar2]} />
                <View style={[styles.bar, styles.bar3]} />
                <View style={[styles.bar, styles.bar4]} />
              </View>
              <View style={styles.wifiIcon}>
                <View style={styles.wifiArc1} />
                <View style={styles.wifiArc2} />
                <View style={styles.wifiArc3} />
              </View>
              <View style={styles.battery}>
                <View style={styles.batteryBody}>
                  <View style={styles.batteryLevel25} />
                </View>
                <View style={styles.batteryTip} />
                <Text style={styles.batteryText}>25</Text>
              </View>
            </View>
            <View style={styles.houseIcon}>
              <View style={styles.houseRoof} />
              <View style={styles.houseBody} />
              <View style={styles.houseDoor} />
            </View>
          </View>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo and Branding Section */}
          <View style={styles.logoSection}>
            <View style={styles.logoContainer}>
              <View style={styles.logoCircle}>
                <View style={styles.logoF}>
                  <View style={styles.fVertical} />
                  <View style={styles.fTopHorizontalBlue} />
                  <View style={styles.fMiddleHorizontalBlue} />
                </View>
              </View>
            </View>
            <Text style={styles.appName}>FuelTrans</Text>
            <Text style={styles.tagline}>Reimagine Fuel Retailing</Text>
          </View>

          {/* Input Fields */}
          <View style={styles.inputSection}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>User Name</Text>
              <TextInput
                style={styles.input}
                placeholder="User Name"
                placeholderTextColor="#000000"
                value={username}
                onChangeText={setUsername}
              />
              <View style={styles.inputUnderline} />
            </View>

            <View style={styles.passwordContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#000000"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <View style={styles.inputUnderline} />
              </View>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonSection}>
            <TouchableOpacity 
              style={styles.loginButton}
              onPress={() => router.push('/dashboard')}
            >
              <LinearGradient
                colors={['#1a3a5c', '#4a90c2']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginButtonGradient}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.registerButton}
              onPress={() => router.push('/register')}
            >
              <Text style={styles.registerButtonText}>New User Registration</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Powered By FuelTrans Version 1.0.0</Text>
          <View style={styles.homeIndicator} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  safeArea: {
    flex: 1,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: Platform.OS === 'web' ? 24 : 20,
    paddingTop: Platform.OS === 'ios' ? 8 : 12,
    paddingBottom: 8,
    minHeight: 44,
  },
  time: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.3,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  statusIconsContainer: {
    alignItems: 'flex-end',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2.5,
    height: 11,
    justifyContent: 'center',
  },
  bar: {
    width: 3,
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  bar1: {
    height: 4,
  },
  bar2: {
    height: 5.5,
  },
  bar3: {
    height: 7.5,
  },
  bar4: {
    height: 10,
  },
  wifiIcon: {
    width: 17,
    height: 13,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wifiArc1: {
    position: 'absolute',
    width: 7,
    height: 7,
    borderWidth: 1.5,
    borderColor: '#000000',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 7,
    top: 0,
    right: 0,
  },
  wifiArc2: {
    position: 'absolute',
    width: 11,
    height: 11,
    borderWidth: 1.5,
    borderColor: '#000000',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 11,
    top: 1.5,
    right: -1.5,
  },
  wifiArc3: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderWidth: 1.5,
    borderColor: '#000000',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 15,
    top: 3,
    right: -3,
  },
  battery: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  batteryBody: {
    width: 22,
    height: 11,
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 2.5,
    overflow: 'hidden',
    position: 'relative',
  },
  batteryLevel25: {
    position: 'absolute',
    left: 1.5,
    top: 1.5,
    bottom: 1.5,
    width: '25%',
    backgroundColor: '#000000',
    borderRadius: 1,
  },
  batteryTip: {
    width: 2,
    height: 5.5,
    backgroundColor: '#000000',
    borderRadius: 0,
  },
  batteryText: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 2,
  },
  houseIcon: {
    width: 20,
    height: 20,
    position: 'relative',
    marginTop: 4,
  },
  houseRoof: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4a90c2',
  },
  houseBody: {
    position: 'absolute',
    bottom: 0,
    left: 2,
    width: 16,
    height: 12,
    borderWidth: 2,
    borderColor: '#4a90c2',
  },
  houseDoor: {
    position: 'absolute',
    bottom: 0,
    left: 6,
    width: 4,
    height: 6,
    backgroundColor: '#4a90c2',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 48,
  },
  logoContainer: {
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoF: {
    width: 48,
    height: 48,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fVertical: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 6,
    height: 48,
    backgroundColor: '#000000',
    borderRadius: 3,
  },
  fTopHorizontalBlue: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 32,
    height: 6,
    backgroundColor: '#4a90c2',
    borderRadius: 3,
  },
  fMiddleHorizontalBlue: {
    position: 'absolute',
    left: 0,
    top: 20,
    width: 26,
    height: 6,
    backgroundColor: '#4a90c2',
    borderRadius: 3,
  },
  appName: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  tagline: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 0.2,
    textAlign: 'center',
    opacity: 0.7,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  inputSection: {
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    color: '#666666',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  input: {
    color: '#000000',
    fontSize: 16,
    paddingVertical: 8,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  inputUnderline: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginTop: 4,
  },
  passwordContainer: {
    position: 'relative',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  forgotPasswordText: {
    color: '#4a90c2',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  buttonSection: {
    marginBottom: 32,
  },
  loginButton: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  registerButton: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  registerButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  footer: {
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 8 : 12,
    paddingTop: 16,
  },
  footerText: {
    color: '#666666',
    fontSize: 12,
    marginBottom: 8,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 2.5,
  },
});
