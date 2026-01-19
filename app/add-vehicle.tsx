import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function AddVehicleScreen() {
  const router = useRouter();

  const vehicleTypes = [
    { id: 1, name: 'Car', icon: 'car' },
    { id: 2, name: 'Private Car', icon: 'privateCar' },
    { id: 3, name: 'Bus', icon: 'bus' },
    { id: 4, name: 'Crane', icon: 'crane' },
    { id: 5, name: 'Bike', icon: 'bike' },
    { id: 6, name: 'Truck', icon: 'truck' },
  ];

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
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backIcon}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.navTitle}>Add Vehicle</Text>
          <TouchableOpacity onPress={() => router.push('/dashboard')} style={styles.homeButton}>
            <View style={styles.homeIcon}>
              <View style={styles.homeRoof} />
              <View style={styles.homeBody} />
              <View style={styles.homeDoor} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Instruction Text */}
        <Text style={styles.instructionText}>Select vehicle type.</Text>

        {/* Vehicle Type Grid */}
        <View style={styles.gridContainer}>
          {vehicleTypes.map((vehicle) => (
            <TouchableOpacity 
              key={vehicle.id} 
              style={styles.vehicleCard}
              onPress={() => {
                router.push({
                  pathname: '/brand-selection',
                  params: { vehicleType: vehicle.name }
                });
              }}
            >
              <View style={styles.vehicleIconContainer}>
                {vehicle.icon === 'car' && (
                  <View style={styles.carIcon}>
                    <View style={styles.carBody} />
                    <View style={styles.carRoof} />
                  </View>
                )}
                {vehicle.icon === 'privateCar' && (
                  <View style={styles.privateCarIcon}>
                    <View style={styles.privateCarBody} />
                    <View style={styles.privateCarRoof} />
                  </View>
                )}
                {vehicle.icon === 'bus' && (
                  <View style={styles.busIcon}>
                    <View style={styles.busBody} />
                    <View style={styles.busWindow1} />
                    <View style={styles.busWindow2} />
                    <View style={styles.busWindow3} />
                  </View>
                )}
                {vehicle.icon === 'crane' && (
                  <View style={styles.craneIcon}>
                    <View style={styles.craneBody} />
                    <View style={styles.craneBoom} />
                  </View>
                )}
                {vehicle.icon === 'bike' && (
                  <View style={styles.bikeIcon}>
                    <View style={styles.bikeFrame} />
                    <View style={styles.bikeWheel1} />
                    <View style={styles.bikeWheel2} />
                  </View>
                )}
                {vehicle.icon === 'truck' && (
                  <View style={styles.truckIcon}>
                    <View style={styles.truckCab} />
                    <View style={styles.truckBed} />
                  </View>
                )}
              </View>
              <Text style={styles.vehicleText}>{vehicle.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Home Indicator */}
      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#2a4a6c',
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  navTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  homeButton: {
    padding: 4,
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 24,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  vehicleCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  vehicleIconContainer: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  vehicleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a3a5c',
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  // Car Icon (Sedan)
  carIcon: {
    width: 56,
    height: 32,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carBody: {
    position: 'absolute',
    bottom: 0,
    left: 8,
    width: 40,
    height: 20,
    backgroundColor: '#1a3a5c',
    borderRadius: 2,
  },
  carRoof: {
    position: 'absolute',
    top: 0,
    left: 12,
    width: 32,
    height: 16,
    backgroundColor: '#1a3a5c',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  // Private Car Icon (SUV/Station Wagon)
  privateCarIcon: {
    width: 56,
    height: 36,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  privateCarBody: {
    position: 'absolute',
    bottom: 0,
    left: 6,
    width: 44,
    height: 24,
    backgroundColor: '#1a3a5c',
    borderRadius: 2,
  },
  privateCarRoof: {
    position: 'absolute',
    top: 0,
    left: 10,
    width: 36,
    height: 20,
    backgroundColor: '#1a3a5c',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  // Bus Icon
  busIcon: {
    width: 56,
    height: 40,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  busBody: {
    position: 'absolute',
    bottom: 0,
    left: 4,
    width: 48,
    height: 28,
    backgroundColor: '#1a3a5c',
    borderRadius: 2,
  },
  busWindow1: {
    position: 'absolute',
    top: 6,
    left: 8,
    width: 8,
    height: 8,
    backgroundColor: '#4a90c2',
    borderRadius: 1,
  },
  busWindow2: {
    position: 'absolute',
    top: 6,
    left: 20,
    width: 8,
    height: 8,
    backgroundColor: '#4a90c2',
    borderRadius: 1,
  },
  busWindow3: {
    position: 'absolute',
    top: 6,
    right: 8,
    width: 8,
    height: 8,
    backgroundColor: '#4a90c2',
    borderRadius: 1,
  },
  // Crane Icon
  craneIcon: {
    width: 56,
    height: 48,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  craneBody: {
    position: 'absolute',
    bottom: 0,
    left: 8,
    width: 40,
    height: 24,
    backgroundColor: '#1a3a5c',
    borderRadius: 2,
  },
  craneBoom: {
    position: 'absolute',
    top: 4,
    right: 0,
    width: 24,
    height: 3,
    backgroundColor: '#1a3a5c',
    borderRadius: 1.5,
    transform: [{ rotate: '-20deg' }],
  },
  // Bike Icon (Motorcycle)
  bikeIcon: {
    width: 48,
    height: 32,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bikeFrame: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 32,
    height: 16,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1a3a5c',
    borderRadius: 8,
  },
  bikeWheel1: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1a3a5c',
  },
  bikeWheel2: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1a3a5c',
  },
  // Truck Icon
  truckIcon: {
    width: 56,
    height: 36,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  truckCab: {
    position: 'absolute',
    bottom: 0,
    left: 4,
    width: 20,
    height: 20,
    backgroundColor: '#1a3a5c',
    borderRadius: 2,
  },
  truckBed: {
    position: 'absolute',
    bottom: 0,
    right: 4,
    width: 28,
    height: 16,
    backgroundColor: '#1a3a5c',
    borderRadius: 2,
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
