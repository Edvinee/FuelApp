import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Mode = 'amount' | 'quantity';

const AMOUNT_OPTIONS = [100, 200, 500, 1000, 2000, 2500];
const QUANTITY_OPTIONS = [20, 50, 75, 100, 200, 500];

export default function PrebookFuelDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    registration?: string;
    model?: string;
    mode?: Mode;
  }>();

  const [mode, setMode] = useState<Mode>(params.mode === 'quantity' ? 'quantity' : 'amount');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(200);
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(100);
  const [saveFavourite, setSaveFavourite] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const registration = params.registration || 'TN 01 AB 1234';
  const model = params.model || 'Ducati Streetfighter';

  const bottomLabel = useMemo(() => {
    if (mode === 'amount') {
      const value = selectedAmount ?? 0;
      return `Add ₹ ${value}`;
    }
    const value = selectedQuantity ?? 0;
    return `Fill ${value} L`;
  }, [mode, selectedAmount, selectedQuantity]);

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

      {/* Header with back + home */}
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

      {/* Blue vehicle info section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Define Prebook</Text>
        <Text style={styles.heroRegistration}>{registration}</Text>

        <View style={styles.heroBikeIcon}>
          <View style={styles.bikeFrame} />
          <View style={styles.bikeWheel1} />
          <View style={styles.bikeWheel2} />
          <View style={styles.bikeSeat} />
          <View style={styles.bikeHandlebar} />
        </View>

        <Text style={styles.heroModel}>{model}</Text>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setMode('amount')}
          >
            <Text style={[styles.tabText, mode === 'amount' && styles.tabTextActive]}>
              AMOUNT
            </Text>
            {mode === 'amount' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setMode('quantity')}
          >
            <Text style={[styles.tabText, mode === 'quantity' && styles.tabTextActive]}>
              QUANTITY
            </Text>
            {mode === 'quantity' && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentInner}
        showsVerticalScrollIndicator={false}
      >
        {mode === 'amount' ? (
          <>
            <Text style={styles.sectionLabel}>₹   Amount</Text>
            <View style={styles.divider} />

            <View style={styles.optionsGrid}>
              {AMOUNT_OPTIONS.map((value) => {
                const active = selectedAmount === value;
                return (
                  <TouchableOpacity
                    key={value}
                    style={[styles.optionChip, active && styles.optionChipActive]}
                    onPress={() => setSelectedAmount(value)}
                  >
                    <Text
                      style={[styles.optionText, active && styles.optionTextActive]}
                    >
                      ₹ {value}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        ) : (
          <>
            <Text style={styles.sectionLabel}>Quantity in litters</Text>
            <View style={styles.divider} />

            <View style={styles.optionsGrid}>
              {QUANTITY_OPTIONS.map((value) => {
                const active = selectedQuantity === value;
                return (
                  <TouchableOpacity
                    key={value}
                    style={[styles.optionChip, active && styles.optionChipActive]}
                    onPress={() => setSelectedQuantity(value)}
                  >
                    <Text
                      style={[styles.optionText, active && styles.optionTextActive]}
                    >
                      {value} L
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </>
        )}

        {/* Favourite checkbox */}
        <TouchableOpacity
          style={styles.checkboxRow}
          onPress={() => setSaveFavourite((prev) => !prev)}
          activeOpacity={0.8}
        >
          <View style={[styles.checkboxBox, saveFavourite && styles.checkboxBoxChecked]}>
            {saveFavourite && <View style={styles.checkboxInner} />}
          </View>
          <Text style={styles.checkboxLabel}>
            Do you want to save it as your favourite?
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {
            if (mode === 'quantity') {
              setShowSuccessModal(true);
            }
            // For amount mode, you can add similar logic later if needed
          }}
        >
          <Text style={styles.primaryButtonText}>{bottomLabel}</Text>
        </TouchableOpacity>
      </View>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Congratulations</Text>
            <Text style={styles.modalMessage}>
              Quantity {selectedQuantity} L is set successfully for vehicle {registration}
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButtonOutlined}
                onPress={() => {
                  setShowSuccessModal(false);
                  router.push({
                    pathname: '/view-qr',
                    params: {
                      registration: registration,
                      quantity: selectedQuantity?.toString() || '',
                    },
                  });
                }}
              >
                <Text style={styles.modalButtonOutlinedText}>View QR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonPrimary}
                onPress={() => {
                  setShowSuccessModal(false);
                  router.push('/prebooked-vehicles');
                }}
              >
                <Text style={styles.modalButtonPrimaryText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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

  hero: {
    backgroundColor: '#0a7fbf',
    paddingTop: 16,
    paddingBottom: 12,
    alignItems: 'center',
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  heroRegistration: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  heroBikeIcon: {
    width: 120,
    height: 80,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  bikeFrame: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 80,
    height: 40,
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: '#FFFFFF',
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
    borderColor: '#FFFFFF',
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
    borderColor: '#FFFFFF',
  },
  bikeSeat: {
    position: 'absolute',
    top: 30,
    left: 50,
    width: 30,
    height: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  bikeHandlebar: {
    position: 'absolute',
    top: 15,
    left: 60,
    width: 20,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 1.5,
    transform: [{ rotate: '-20deg' }],
  },
  heroModel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
  },

  tabsRow: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabUnderline: {
    marginTop: 6,
    height: 3,
    width: '100%',
    backgroundColor: '#27d6b8',
  },

  content: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentInner: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  sectionLabel: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#d6d6d6',
    marginBottom: 20,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },
  optionChip: {
    width: '30%',
    minWidth: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  optionChipActive: {
    backgroundColor: '#dff1ff',
    borderWidth: 1,
    borderColor: '#7ab8f5',
  },
  optionText: {
    fontSize: 13,
    color: '#555555',
    fontWeight: '500',
  },
  optionTextActive: {
    color: '#1a3a5c',
    fontWeight: '700',
  },

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: '#999999',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },
  checkboxBoxChecked: {
    borderColor: '#1a3a5c',
  },
  checkboxInner: {
    width: 11,
    height: 11,
    borderRadius: 2,
    backgroundColor: '#1a3a5c',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 13,
    color: '#555555',
  },

  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'ios' ? 12 : 16,
    paddingTop: 8,
    backgroundColor: '#f5f5f5',
  },
  primaryButton: {
    backgroundColor: '#006699',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
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

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  modalMessage: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  modalButtonOutlined: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#4a90c2',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonOutlinedText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  modalButtonPrimary: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonPrimaryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
});

