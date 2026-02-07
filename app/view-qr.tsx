import { StatusBar } from 'expo-status-bar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Simple QR code visual representation (8x8 grid pattern)
const QR_PATTERN = [
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
];

export default function ViewQRScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{
    registration?: string;
    quantity?: string;
  }>();

  const registration = params.registration || 'XXXX XXXX XXXX 1234';
  const currentBalance = '1,220';

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

        <Text style={styles.headerTitle}>{registration}</Text>

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
        {/* QR Code */}
        <View style={styles.qrContainer}>
          <View style={styles.qrCode}>
            {QR_PATTERN.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.qrRow}>
                {row.map((cell, cellIndex) => (
                  <View
                    key={cellIndex}
                    style={[styles.qrCell, cell === 1 && styles.qrCellFilled]}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Current Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceAmount}>₹. {currentBalance}</Text>
          <TouchableOpacity style={styles.addMoneyButton}>
            <View style={styles.addMoneyIcon}>
              <Ionicons name="add" size={20} color="#4a90c2" />
            </View>
            <Text style={styles.addMoneyText}>Add Money</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Share Button */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>

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
    fontSize: 16,
    fontWeight: '600',
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
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  qrCode: {
    width: 240,
    height: 240,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  qrRow: {
    flexDirection: 'row',
  },
  qrCell: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
  },
  qrCellFilled: {
    backgroundColor: '#000000',
  },
  balanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 24,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
    fontFamily: Platform.select({
      ios: 'SF Pro Display',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  addMoneyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  addMoneyIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E6F4FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  addMoneyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a90c2',
    fontFamily: Platform.select({
      ios: 'SF Pro Text',
      android: 'Roboto',
      web: 'system-ui, -apple-system, sans-serif',
    }),
  },
  bottomBar: {
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === 'ios' ? 12 : 16,
    paddingTop: 8,
    backgroundColor: '#f5f5f5',
  },
  shareButton: {
    backgroundColor: '#006699',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
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
    marginTop: 6,
  },
});
