import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#1a3a5c', '#4a90c2']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        {/* Top Status Bar Area */}
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
                <View style={[styles.batteryLevel, { width: '55%' }]} />
              </View>
              <View style={styles.batteryTip} />
            </View>
          </View>
        </View>

        {/* Centered Content */}
        <View style={styles.content}>
          {/* Logo - F in Circle */}
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <View style={styles.logoF}>
                {/* Vertical line of F */}
                <View style={styles.fVertical} />
                {/* Top horizontal line */}
                <View style={styles.fTopHorizontal} />
                {/* Middle horizontal line */}
                <View style={styles.fMiddleHorizontal} />
              </View>
            </View>
          </View>

          {/* App Name */}
          <Text style={styles.appName}>FuelTrans</Text>

          {/* Tagline */}
          <Text style={styles.tagline}>Reimagine Fuel Retailing</Text>
        </View>

        {/* Home Indicator */}
        <View style={styles.homeIndicator} />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
    height: 12,
  },
  bar: {
    width: 3,
    backgroundColor: 'white',
  },
  bar1: {
    height: 4,
  },
  bar2: {
    height: 6,
  },
  bar3: {
    height: 8,
  },
  bar4: {
    height: 10,
  },
  wifiIcon: {
    width: 18,
    height: 14,
    position: 'relative',
  },
  wifiArc1: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderWidth: 1.5,
    borderColor: 'white',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 8,
    top: 0,
    right: 0,
  },
  wifiArc2: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderWidth: 1.5,
    borderColor: 'white',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 12,
    top: 2,
    right: -2,
  },
  wifiArc3: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: 'white',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: 16,
    top: 4,
    right: -4,
  },
  battery: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  batteryBody: {
    width: 24,
    height: 12,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 2,
    overflow: 'hidden',
    position: 'relative',
  },
  batteryLevel: {
    position: 'absolute',
    left: 1,
    top: 1,
    bottom: 1,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  batteryTip: {
    width: 2,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 0.5,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoF: {
    width: 50,
    height: 50,
    position: 'relative',
  },
  fVertical: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 6,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  fTopHorizontal: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 30,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  fMiddleHorizontal: {
    position: 'absolute',
    left: 0,
    top: 20,
    width: 25,
    height: 6,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  appName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 8,
  },
});
