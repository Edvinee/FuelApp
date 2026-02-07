import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform } from 'react-native';

type PrebookedVehicle = {
  id: string;
  vehicleNo: string;
  deviceId: string;
  status: string;
  amount: string;
};

const DEMO_PREBOOKED: PrebookedVehicle[] = [
  {
    id: '1',
    vehicleNo: 'XXXX XXXX XXXX 1234',
    deviceId: 'Bharath Petroleum',
    status: 'INR 5,200.00',
    amount: '5200',
  },
  {
    id: '2',
    vehicleNo: 'XXXX XXXX XXXX 5678',
    deviceId: 'Indian Oil',
    status: 'INR 3,500.00',
    amount: '3500',
  },
  {
    id: '3',
    vehicleNo: 'XXXX XXXX XXXX 9012',
    deviceId: 'HPCL',
    status: 'INR 2,100.00',
    amount: '2100',
  },
  {
    id: '4',
    vehicleNo: 'XXXX XXXX XXXX 3456',
    deviceId: 'Bharath Petroleum',
    status: 'INR 4,800.00',
    amount: '4800',
  },
  {
    id: '5',
    vehicleNo: 'XXXX XXXX XXXX 7890',
    deviceId: 'Indian Oil',
    status: 'INR 1,900.00',
    amount: '1900',
  },
  {
    id: '6',
    vehicleNo: 'XXXX XXXX XXXX 2345',
    deviceId: 'HPCL',
    status: 'INR 6,300.00',
    amount: '6300',
  },
  {
    id: '7',
    vehicleNo: 'XXXX XXXX XXXX 6789',
    deviceId: 'Bharath Petroleum',
    status: 'INR 3,200.00',
    amount: '3200',
  },
  {
    id: '8',
    vehicleNo: 'XXXX XXXX XXXX 0123',
    deviceId: 'Indian Oil',
    status: 'INR 4,500.00',
    amount: '4500',
  },
];

export default function PrebookedVehiclesScreen() {
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
            <Text style={styles.batteryText}>55</Text>
          </View>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Prebooked Vehicles</Text>

        <TouchableOpacity onPress={() => router.push('/dashboard')} style={styles.iconButton}>
          <View style={styles.homeIcon}>
            <View style={styles.homeRoof} />
            <View style={styles.homeBody} />
            <View style={styles.homeDoor} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentInner}
        showsVerticalScrollIndicator={false}
      >
        {DEMO_PREBOOKED.map((vehicle) => (
          <View key={vehicle.id} style={styles.card}>
            <View style={styles.cardRow}>
              <View style={styles.labelColumn}>
                <Text style={styles.labelText}>Vehicle No.</Text>
                <Text style={styles.labelText}>Device ID</Text>
                <Text style={styles.labelText}>Status</Text>
              </View>
              <View style={styles.valueColumn}>
                <Text style={styles.valueText}>: {vehicle.vehicleNo}</Text>
                <Text style={styles.deviceIdText}>: {vehicle.deviceId}</Text>
                <Text style={styles.valueText}>: {vehicle.status}</Text>
              </View>
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
  batteryText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 2,
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
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardRow: {
    flexDirection: 'row',
  },
  labelColumn: {
    width: 100,
  },
  valueColumn: {
    flex: 1,
  },
  labelText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  valueText: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 8,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  deviceIdText: {
    fontSize: 14,
    color: '#4a90c2',
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
    alignSelf: 'center',
    marginBottom: Platform.OS === 'ios' ? 8 : 12,
    marginTop: 6,
  },
});
