import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type VehicleItem = {
  id: string;
  registration: string;
  brand: string;
  fuelType: string;
  addedSince: string;
  icon: 'car' | 'pickup' | 'bus' | 'jeep';
};

const VEHICLES: VehicleItem[] = [
  {
    id: '1',
    registration: 'TN 01 AB 1234',
    brand: 'BMW',
    fuelType: 'Any Petrol',
    addedSince: 'Added since 1st Oct 2023',
    icon: 'car',
  },
  {
    id: '2',
    registration: 'TN 01 AB 1234',
    brand: 'Ford',
    fuelType: 'Any Petrol',
    addedSince: 'Added since 1st Oct 2023',
    icon: 'pickup',
  },
  {
    id: '3',
    registration: 'TN 01 AB 1234',
    brand: 'Standard',
    fuelType: 'Any Petrol',
    addedSince: 'Added since 1st Oct 2023',
    icon: 'bus',
  },
  {
    id: '4',
    registration: 'TN 01 AB 1234',
    brand: 'Jeep',
    fuelType: 'Any Petrol',
    addedSince: 'Added since 1st Oct 2023',
    icon: 'jeep',
  },
];

export default function TransactionHistoryScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Top status bar */}
      <View style={styles.topStatusArea}>
        <View style={styles.statusRow}>
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
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Transaction History</Text>

        <TouchableOpacity onPress={() => router.push('/dashboard')} style={styles.iconButton}>
          <View style={styles.homeIcon}>
            <View style={styles.homeRoof} />
            <View style={styles.homeBody} />
            <View style={styles.homeDoor} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentInner}
        showsVerticalScrollIndicator={false}
      >
        {/* Top buttons */}
        <View style={styles.primaryCard}>
          <View style={styles.primaryIcon}>
            <View style={styles.walletBody} />
            <View style={styles.walletArrow} />
          </View>
          <Text style={styles.primaryText}>Wallet Transaction</Text>
        </View>

        <View style={styles.primaryCard}>
          <View style={styles.primaryIcon}>
            <View style={styles.carBody} />
            <View style={styles.carRoof} />
          </View>
          <Text style={styles.primaryText}>Fuel Transaction</Text>
        </View>

        <View style={styles.primaryCard}>
          <View style={styles.primaryIcon}>
            <View style={styles.docRect} />
            <View style={styles.docLine1} />
            <View style={styles.docLine2} />
          </View>
          <Text style={styles.primaryText}>E-Statement</Text>
        </View>

        <View style={styles.separator} />

        {/* Vehicle list */}
        {VEHICLES.map((v) => (
          <View key={v.id} style={styles.vehicleRow}>
            <View style={styles.vehicleIconCard}>
              {v.icon === 'car' && (
                <View style={styles.vehicleCarIcon}>
                  <View style={styles.vehicleCarBody} />
                  <View style={styles.vehicleCarRoof} />
                </View>
              )}
              {v.icon === 'pickup' && (
                <View style={styles.vehiclePickupIcon}>
                  <View style={styles.vehiclePickupCab} />
                  <View style={styles.vehiclePickupBed} />
                </View>
              )}
              {v.icon === 'bus' && (
                <View style={styles.vehicleBusIcon}>
                  <View style={styles.vehicleBusBody} />
                  <View style={styles.vehicleBusWindow1} />
                  <View style={styles.vehicleBusWindow2} />
                </View>
              )}
              {v.icon === 'jeep' && (
                <View style={styles.vehicleJeepIcon}>
                  <View style={styles.vehicleJeepBody} />
                  <View style={styles.vehicleJeepRoof} />
                </View>
              )}
            </View>

            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleRegistration}>{v.registration}</Text>
              <Text style={styles.vehicleBrand}>{v.brand}</Text>
              <Text style={styles.vehicleFuel}>{v.fuelType}</Text>
              <Text style={styles.vehicleAdded}>{v.addedSince}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  topStatusArea: {
    backgroundColor: '#1a3a5c',
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
  },
  statusRow: {
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
  bar1: { height: 4 },
  bar2: { height: 5.5 },
  bar3: { height: 7.5 },
  bar4: { height: 10 },
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
  },

  header: {
    backgroundColor: '#1a3a5c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  homeIcon: {
    width: 20,
    height: 20,
    position: 'relative',
  },
  homeRoof: {
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
    borderBottomColor: '#FFFFFF',
  },
  homeBody: {
    position: 'absolute',
    bottom: 0,
    left: 2,
    width: 16,
    height: 12,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  homeDoor: {
    position: 'absolute',
    bottom: 0,
    left: 6,
    width: 4,
    height: 6,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentInner: {
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 24,
  },

  primaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0b6ea8',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
  },
  primaryIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletBody: {
    width: 32,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  walletArrow: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderLeftWidth: 8,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#FFFFFF',
  },
  carBody: {
    width: 32,
    height: 16,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  carRoof: {
    position: 'absolute',
    top: 4,
    width: 20,
    height: 8,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  docRect: {
    width: 26,
    height: 32,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  docLine1: {
    position: 'absolute',
    top: 10,
    left: 6,
    width: 14,
    height: 2,
    backgroundColor: '#FFFFFF',
  },
  docLine2: {
    position: 'absolute',
    top: 18,
    left: 6,
    width: 10,
    height: 2,
    backgroundColor: '#FFFFFF',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },

  separator: {
    height: 1,
    backgroundColor: '#dddddd',
    marginVertical: 16,
  },

  vehicleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  vehicleIconCard: {
    width: 80,
    height: 64,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  vehicleCarIcon: {
    width: 48,
    height: 24,
    borderWidth: 2,
    borderColor: '#0a6ea8',
    borderRadius: 4,
  },
  vehicleCarBody: {
    flex: 1,
  },
  vehicleCarRoof: {
    position: 'absolute',
    top: 2,
    left: 6,
    width: 32,
    height: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#0a6ea8',
  },
  vehiclePickupIcon: {
    width: 48,
    height: 24,
    position: 'relative',
  },
  vehiclePickupCab: {
    position: 'absolute',
    left: 0,
    top: 4,
    width: 18,
    height: 16,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#0a6ea8',
  },
  vehiclePickupBed: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 26,
    height: 14,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#0a6ea8',
  },
  vehicleBusIcon: {
    width: 48,
    height: 24,
    position: 'relative',
  },
  vehicleBusBody: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 48,
    height: 18,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#0a6ea8',
  },
  vehicleBusWindow1: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 10,
    height: 6,
    backgroundColor: '#0a6ea8',
  },
  vehicleBusWindow2: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 10,
    height: 6,
    backgroundColor: '#0a6ea8',
  },
  vehicleJeepIcon: {
    width: 48,
    height: 24,
    position: 'relative',
  },
  vehicleJeepBody: {
    position: 'absolute',
    bottom: 0,
    left: 4,
    width: 40,
    height: 16,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#0a6ea8',
  },
  vehicleJeepRoof: {
    position: 'absolute',
    top: 4,
    left: 10,
    width: 24,
    height: 8,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#0a6ea8',
  },

  vehicleInfo: {
    flex: 1,
  },
  vehicleRegistration: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 2,
  },
  vehicleBrand: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  vehicleFuel: {
    fontSize: 13,
    color: '#777777',
    marginTop: 2,
  },
  vehicleAdded: {
    fontSize: 12,
    color: '#999999',
    marginTop: 4,
  },

  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: Platform.OS === 'ios' ? 8 : 12,
    marginTop: 6,
  },
});

