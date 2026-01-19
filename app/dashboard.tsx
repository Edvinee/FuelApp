import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
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
                <View style={styles.batteryLevel25} />
              </View>
              <View style={styles.batteryTip} />
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

          {/* Action Cards */}
          <View style={styles.cardsSection}>
            {/* Add Vehicle Card */}
            <TouchableOpacity style={[styles.card, styles.addVehicleCard]}>
              <Text style={styles.cardText}>Add Vehicle</Text>
              <View style={styles.cardIcon}>
                <View style={styles.carIcon}>
                  <View style={styles.carBody} />
                  <View style={styles.carRoof} />
                  <View style={styles.carWheel1} />
                  <View style={styles.carWheel2} />
                </View>
              </View>
            </TouchableOpacity>

            {/* Pre booked Card */}
            <TouchableOpacity style={[styles.card, styles.preBookedCard]}>
              <Text style={styles.cardText}>Pre booked</Text>
              <View style={styles.cardIcon}>
                <View style={styles.handIcon}>
                  <View style={styles.handPalm} />
                  <View style={styles.handFinger1} />
                  <View style={styles.handFinger2} />
                  <View style={styles.handFinger3} />
                  <View style={styles.handThumb} />
                  <View style={styles.checkmarkButton}>
                    <View style={styles.checkmark} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Transaction Card */}
            <TouchableOpacity style={[styles.card, styles.transactionCard]}>
              <Text style={styles.cardText}>Transaction</Text>
              <View style={styles.cardIcon}>
                <View style={styles.transactionIcon}>
                  <View style={styles.arrowUpRight} />
                  <View style={styles.arrowDownLeft} />
                </View>
              </View>
            </TouchableOpacity>

            {/* View QR Card */}
            <TouchableOpacity style={[styles.card, styles.viewQRCard]}>
              <Text style={styles.cardText}>View QR</Text>
              <View style={styles.cardIcon}>
                <View style={styles.qrIcon}>
                  <View style={styles.qrSquare1} />
                  <View style={styles.qrSquare2} />
                  <View style={styles.qrSquare3} />
                  <View style={styles.qrSquare4} />
                  <View style={styles.qrSquare5} />
                  <View style={styles.qrSquare6} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Home Indicator */}
        <View style={styles.homeIndicator} />
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
    alignItems: 'center',
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 40,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#4a90c2',
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
  cardsSection: {
    gap: 16,
    marginBottom: 32,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addVehicleCard: {
    backgroundColor: '#21618C',
  },
  preBookedCard: {
    backgroundColor: '#2980B9',
  },
  transactionCard: {
    backgroundColor: '#3498DB',
  },
  viewQRCard: {
    backgroundColor: '#5DADE2',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  cardIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Car Icon
  carIcon: {
    width: 36,
    height: 24,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carBody: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    width: 32,
    height: 14,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4a90c2',
    borderRadius: 3,
  },
  carRoof: {
    position: 'absolute',
    top: 0,
    left: 6,
    width: 20,
    height: 10,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4a90c2',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomWidth: 0,
  },
  carWheel1: {
    position: 'absolute',
    bottom: 0,
    left: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4a90c2',
  },
  carWheel2: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4a90c2',
  },
  // Hand Icon with Checkmark Button
  handIcon: {
    width: 32,
    height: 32,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handPalm: {
    position: 'absolute',
    bottom: 4,
    left: 8,
    width: 16,
    height: 12,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4a90c2',
    borderRadius: 3,
  },
  handFinger1: {
    position: 'absolute',
    top: 2,
    left: 6,
    width: 3,
    height: 10,
    backgroundColor: '#4a90c2',
    borderRadius: 1.5,
  },
  handFinger2: {
    position: 'absolute',
    top: 2,
    left: 10,
    width: 3,
    height: 10,
    backgroundColor: '#4a90c2',
    borderRadius: 1.5,
  },
  handFinger3: {
    position: 'absolute',
    top: 2,
    left: 14,
    width: 3,
    height: 10,
    backgroundColor: '#4a90c2',
    borderRadius: 1.5,
  },
  handThumb: {
    position: 'absolute',
    top: 6,
    right: 2,
    width: 4,
    height: 8,
    backgroundColor: '#4a90c2',
    borderRadius: 2,
  },
  checkmarkButton: {
    position: 'absolute',
    bottom: 6,
    right: 4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#4a90c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: 4,
    height: 4,
    borderWidth: 1.5,
    borderColor: '#4a90c2',
    borderTopWidth: 0,
    borderRightWidth: 0,
    transform: [{ rotate: '-45deg' }],
    marginTop: -1,
  },
  // Transaction Icon (Circular Arrows)
  transactionIcon: {
    width: 32,
    height: 32,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowUpRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: '#4a90c2',
    borderRightColor: '#4a90c2',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  arrowDownLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4a90c2',
    borderLeftColor: '#4a90c2',
  },
  // QR Code Icon
  qrIcon: {
    width: 32,
    height: 32,
    position: 'relative',
  },
  qrSquare1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 8,
    height: 8,
    backgroundColor: '#4a90c2',
    borderWidth: 1.5,
    borderColor: '#4a90c2',
  },
  qrSquare2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: '#4a90c2',
    borderWidth: 1.5,
    borderColor: '#4a90c2',
  },
  qrSquare3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 8,
    height: 8,
    backgroundColor: '#4a90c2',
    borderWidth: 1.5,
    borderColor: '#4a90c2',
  },
  qrSquare4: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: '#4a90c2',
    borderWidth: 1.5,
    borderColor: '#4a90c2',
  },
  qrSquare5: {
    position: 'absolute',
    top: 14,
    left: 10,
    width: 4,
    height: 4,
    backgroundColor: '#4a90c2',
  },
  qrSquare6: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 4,
    height: 4,
    backgroundColor: '#4a90c2',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: Platform.OS === 'ios' ? 8 : 12,
    marginTop: 16,
  },
});
