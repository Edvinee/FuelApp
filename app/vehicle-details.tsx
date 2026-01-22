import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function VehicleDetailsScreen() {
  const router = useRouter();
  const { vehicleType, brand } = useLocalSearchParams();
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('Any Petrol');

  const fuelTypes = [
    'Power',
    'Power 99',
    'Petrol/CNG',
    'Any Petrol',
    'Diesel',
    'Any Diesel',
    'Unleaded',
    'Turbojet',
  ];

  // Generate vehicle model name based on brand (for demo purposes)
  const getVehicleModel = () => {
    if (vehicleType === 'Bike') {
      const bikeModels: { [key: string]: string } = {
        'Ducati': 'Ducati Streetfighter',
        'Honda': 'Honda CBR',
        'Yamaha': 'Yamaha R1',
        'Suzuki': 'Suzuki GSX-R',
        'Kawasaki': 'Kawasaki Ninja',
        'Harley-Davidson': 'Harley-Davidson Sportster',
        'BMW': 'BMW S1000RR',
        'Triumph': 'Triumph Speed Triple',
        'Royal Enfield': 'Royal Enfield Classic',
        'Bajaj': 'Bajaj Pulsar',
        'Hero': 'Hero Splendor',
        'TVS': 'TVS Apache',
      };
      return bikeModels[brand as string] || `${brand} Motorcycle`;
    }
    return `${brand} ${vehicleType}`;
  };

  const vehicleModel = getVehicleModel();

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
        {/* Heading */}
        <Text style={styles.heading}>Enter Vehicle Details</Text>

        {/* Vehicle Icon */}
        <View style={styles.vehicleIconContainer}>
          <View style={styles.motorcycleIcon}>
            <View style={styles.bikeFrame} />
            <View style={styles.bikeWheel1} />
            <View style={styles.bikeWheel2} />
            <View style={styles.bikeSeat} />
            <View style={styles.bikeHandlebar} />
          </View>
        </View>

        {/* Vehicle Model Name */}
        <Text style={styles.vehicleModel}>{vehicleModel}</Text>

        {/* Registration Number Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Registration Number"
            placeholderTextColor="#999999"
            value={registrationNumber}
            onChangeText={setRegistrationNumber}
          />
          <View style={styles.inputUnderline} />
        </View>

        {/* Fuel Type Selection */}
        <Text style={styles.fuelTypeHeading}>Select Fuel Type</Text>
        <View style={styles.fuelTypeList}>
          {fuelTypes.map((fuelType) => (
            <TouchableOpacity
              key={fuelType}
              style={styles.radioButtonContainer}
              onPress={() => setSelectedFuelType(fuelType)}
            >
              <View style={styles.radioButton}>
                {selectedFuelType === fuelType && <View style={styles.radioButtonSelected} />}
              </View>
              <Text style={styles.radioButtonLabel}>{fuelType}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Select Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.selectButton}
          onPress={() => {
            // Handle vehicle details submission
            console.log('Vehicle Details:', {
              vehicleType,
              brand,
              model: vehicleModel,
              registrationNumber,
              fuelType: selectedFuelType,
            });
            // Navigate to next step or dashboard
            router.push('/dashboard');
          }}
        >
          <Text style={styles.selectButtonText}>Select</Text>
        </TouchableOpacity>
      </View>

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
    paddingBottom: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 32,
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  vehicleIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  motorcycleIcon: {
    width: 120,
    height: 80,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bikeFrame: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 80,
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: '#1a9a8e',
    borderRadius: 20,
  },
  bikeWheel1: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: '#1a9a8e',
  },
  bikeWheel2: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: '#1a9a8e',
  },
  bikeSeat: {
    position: 'absolute',
    top: 30,
    left: 50,
    width: 30,
    height: 8,
    backgroundColor: '#1a9a8e',
    borderRadius: 4,
  },
  bikeHandlebar: {
    position: 'absolute',
    top: 15,
    left: 60,
    width: 20,
    height: 3,
    backgroundColor: '#1a9a8e',
    borderRadius: 1.5,
    transform: [{ rotate: '-20deg' }],
  },
  vehicleModel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  inputContainer: {
    marginBottom: 32,
  },
  input: {
    fontSize: 16,
    color: '#000000',
    paddingVertical: 12,
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
  fuelTypeHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  fuelTypeList: {
    gap: 12,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#666666',
  },
  radioButtonLabel: {
    fontSize: 16,
    color: '#000000',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'ios' ? 20 : 24,
    paddingTop: 16,
    backgroundColor: '#FFFFFF',
  },
  selectButton: {
    backgroundColor: '#1a9a8e',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
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
  },
});
