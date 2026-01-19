import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [address, setAddress] = useState('');
  const [taxRegistration, setTaxRegistration] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Header Bar */}
      <View style={styles.headerBar}>
        <View style={styles.statusBar}>
          <Text style={styles.time}>9:41 PM</Text>
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
                <View style={styles.batteryLevel55} />
              </View>
              <View style={styles.batteryTip} />
            </View>
          </View>
        </View>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backIcon}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>User Registration</Text>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Form Fields */}
        <View style={styles.formSection}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>First Name*</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#666666"
              value={firstName}
              onChangeText={setFirstName}
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Last Name*</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#666666"
              value={lastName}
              onChangeText={setLastName}
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mobile Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              placeholderTextColor="#666666"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              keyboardType="phone-pad"
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Date Type *</Text>
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              placeholderTextColor="#666666"
              value={emailId}
              onChangeText={setEmailId}
              keyboardType="email-address"
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Address *</Text>
            <TextInput
              style={styles.input}
              placeholder="Address"
              placeholderTextColor="#666666"
              value={address}
              onChangeText={setAddress}
              multiline
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Tax Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="Tax Registration"
              placeholderTextColor="#666666"
              value={taxRegistration}
              onChangeText={setTaxRegistration}
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>User Name</Text>
            <TextInput
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor="#666666"
              value={userName}
              onChangeText={setUserName}
            />
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#666666"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Text style={styles.eyeIconText}>👁</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputUnderline} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirm Password"
                placeholderTextColor="#666666"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity 
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeIcon}
              >
                <Text style={styles.eyeIconText}>👁</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputUnderline} />
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.registerButton}>
            <LinearGradient
              colors={['#1a3a5c', '#4a90c2']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.registerButtonGradient}
            >
              <Text style={styles.registerButtonText}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => router.push('/')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerBar: {
    backgroundColor: '#1a3a5c',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Platform.OS === 'web' ? 24 : 20,
    paddingTop: Platform.OS === 'ios' ? 8 : 12,
    paddingBottom: 8,
    minHeight: 44,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.3,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
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
    backgroundColor: '#FFFFFF',
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
    borderColor: '#FFFFFF',
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
    borderColor: '#FFFFFF',
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
    borderColor: '#FFFFFF',
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
    borderColor: '#FFFFFF',
    borderRadius: 2.5,
    overflow: 'hidden',
    position: 'relative',
  },
  batteryLevel55: {
    position: 'absolute',
    left: 1.5,
    top: 1.5,
    bottom: 1.5,
    width: '55%',
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  batteryTip: {
    width: 2,
    height: 5.5,
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
  },
  titleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2a4a6c',
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  formSection: {
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 20,
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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    color: '#000000',
    fontSize: 16,
    paddingVertical: 8,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  eyeIcon: {
    padding: 8,
  },
  eyeIconText: {
    fontSize: 18,
  },
  inputUnderline: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginTop: 4,
  },
  buttonSection: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  registerButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  registerButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  loginButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  loginButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
});
