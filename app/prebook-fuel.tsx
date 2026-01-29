import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type VehicleCard = {
  id: string;
  registration: string;
  model: string;
  fuelType: string;
  litres: number;
  icon: 'bike' | 'car';
};

const DEMO_VEHICLES: VehicleCard[] = [
  {
    id: '1',
    registration: 'TN 01 AB 1234',
    model: 'Ducati Streetfighter',
    fuelType: 'Any Petrol',
    litres: 25,
    icon: 'bike',
  },
  {
    id: '2',
    registration: 'TN 01 AB 1234',
    model: 'Hyundai',
    fuelType: 'Any Petrol',
    litres: 50,
    icon: 'car',
  },
];

export default function PrebookFuelScreen() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const vehicles = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DEMO_VEHICLES;
    return DEMO_VEHICLES.filter((v) => {
      return (
        v.registration.toLowerCase().includes(q) ||
        v.model.toLowerCase().includes(q) ||
        v.fuelType.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Top status area (to match screenshot) */}
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

        <Text style={styles.headerTitle}>Prebook Fuel</Text>

        <TouchableOpacity onPress={() => router.push('/dashboard')} style={styles.iconButton}>
          <View style={styles.homeIcon}>
            <View style={styles.homeRoof} />
            <View style={styles.homeBody} />
            <View style={styles.homeDoor} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchRow}>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search Vehicle"
            placeholderTextColor="#666666"
            style={styles.searchInput}
          />
          <Ionicons name="search" size={18} color="#666666" style={styles.searchIcon} />
        </View>

        {/* List */}
        <View style={styles.cards}>
          {vehicles.map((v) => (
            <View key={v.id} style={styles.card}>
              <View style={styles.cardRow}>
                <View style={styles.vehicleIconWrap}>
                  <Ionicons
                    name={v.icon === 'bike' ? 'bicycle' : 'car-sport'}
                    size={56}
                    color="#0a6ea8"
                  />
                </View>

                <View style={styles.cardInfo}>
                  <Text style={styles.regText}>{v.registration}</Text>
                  <Text style={styles.modelText}>{v.model}</Text>
                  <Text style={styles.fuelTypeText}>{v.fuelType}</Text>
                  <Text style={styles.litresText}>
                    <Text style={styles.litresValue}>{v.litres}</Text> Lts.
                  </Text>
                </View>
              </View>

              <View style={styles.actionsRow}>
                <TouchableOpacity style={[styles.actionBtn, styles.stopBtn]}>
                  <Text style={[styles.actionText, styles.stopText]}>Stop Fuel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionBtn, styles.prebookBtn]}
                  onPress={() =>
                    router.push({
                      pathname: '/prebook-fuel-details',
                      params: {
                        registration: v.registration,
                        model: v.model,
                        mode: 'amount',
                      },
                    })
                  }
                >
                  <Text style={[styles.actionText, styles.prebookText]}>Prebook Fuel</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {vehicles.length === 0 && (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No vehicles found</Text>
              <Text style={styles.emptySub}>Try a different search.</Text>
            </View>
          )}
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

  topStatusArea: {
    backgroundColor: '#2a4a6c',
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
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 28,
    backgroundColor: '#f5f5f5',
  },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 44,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  searchIcon: {
    marginLeft: 10,
  },

  cards: {
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehicleIconWrap: {
    width: 92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInfo: {
    flex: 1,
    paddingLeft: 8,
  },
  regText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 2,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  modelText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 6,
    opacity: 0.9,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  fuelTypeText: {
    fontSize: 12,
    color: '#777777',
    marginBottom: 4,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  litresText: {
    fontSize: 12,
    color: '#000000',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  litresValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
    gap: 12,
  },
  actionBtn: {
    flex: 1,
    height: 34,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    backgroundColor: '#FFFFFF',
  },
  actionText: {
    fontSize: 12.5,
    fontWeight: '700',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  stopBtn: {
    borderColor: '#e74c3c',
  },
  stopText: {
    color: '#e74c3c',
  },
  prebookBtn: {
    borderColor: '#2ecc71',
  },
  prebookText: {
    color: '#2ecc71',
  },

  emptyState: {
    paddingVertical: 28,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  emptySub: {
    fontSize: 13,
    color: '#666666',
  },
});

