import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Orange line at the very top */}
      <View style={styles.orangeLine} />
      
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.reactLogoContainer}>
          <View style={styles.reactLogo}>
            {/* Central circle */}
            <View style={styles.logoCenter} />
            {/* Three surrounding ellipses */}
            <View style={[styles.logoEllipse, styles.ellipse1]} />
            <View style={[styles.logoEllipse, styles.ellipse2]} />
            <View style={[styles.logoEllipse, styles.ellipse3]} />
          </View>
        </View>
      </View>

      {/* Main Content Area */}
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.welcomeTitle}>Welcome! 👋</Text>
        
        {/* Step 1 */}
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 1: Try it</Text>
          <Text style={styles.stepDescription}>
            Edit <Text style={styles.codeText}>app/(tabs)/index.tsx</Text> to see changes. Press <Text style={styles.codeText}>F12</Text> to open developer tools.
          </Text>
        </View>

        {/* Step 2 */}
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 2: Explore</Text>
          <Text style={styles.stepDescription}>
            Tap the <Text style={styles.codeText}>Explore tab</Text> to learn more about what's included in this starter app.
          </Text>
        </View>

        {/* Step 3 */}
        <View style={styles.stepContainer}>
          <Text style={styles.stepHeading}>Step 3: Get a fresh start</Text>
          <Text style={styles.stepDescription}>
            When you're ready, run <Text style={styles.codeText}>npm run reset-project</Text> to get a fresh <Text style={styles.codeText}>app</Text> directory. This will move the current <Text style={styles.codeText}>app</Text> to <Text style={styles.codeText}>app-example</Text>.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <View style={styles.navIcon}>
            <View style={styles.houseIcon}>
              <View style={styles.houseRoof} />
              <View style={styles.houseBody} />
              <View style={styles.houseDoor} />
            </View>
          </View>
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.navIcon}>
            <View style={styles.arrowIcon}>
              <View style={styles.arrowLine} />
              <View style={styles.arrowHead} />
            </View>
          </View>
          <Text style={styles.navText}>Explore</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  orangeLine: {
    height: 2,
    backgroundColor: '#ff6b35',
    width: '100%',
  },
  header: {
    height: '30%',
    backgroundColor: '#1e3a52',
    position: 'relative',
    overflow: 'hidden',
  },
  reactLogoContainer: {
    position: 'absolute',
    left: -60,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  reactLogo: {
    width: 200,
    height: 200,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoCenter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#61dafb',
    position: 'absolute',
    zIndex: 10,
  },
  logoEllipse: {
    position: 'absolute',
    width: 180,
    height: 60,
    borderRadius: 90,
    borderWidth: 8,
    borderColor: '#61dafb',
    top: 70,
    left: 10,
  },
  ellipse1: {
    transform: [{ rotate: '0deg' }],
  },
  ellipse2: {
    transform: [{ rotate: '60deg' }],
  },
  ellipse3: {
    transform: [{ rotate: '120deg' }],
  },
  content: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentContainer: {
    padding: 20,
    paddingTop: 30,
  },
  welcomeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  stepContainer: {
    marginBottom: 30,
  },
  stepHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 16,
    color: '#e0e0e0',
    lineHeight: 24,
  },
  codeText: {
    fontWeight: '600',
    color: '#ffffff',
  },
  bottomNav: {
    height: '10%',
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    marginBottom: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  houseIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  houseRoof: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffff',
  },
  houseBody: {
    position: 'absolute',
    bottom: 0,
    left: 2,
    width: 20,
    height: 14,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  houseDoor: {
    position: 'absolute',
    bottom: 0,
    left: 8,
    width: 6,
    height: 8,
    backgroundColor: '#ffffff',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowLine: {
    width: 16,
    height: 2,
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: 0,
  },
  arrowHead: {
    position: 'absolute',
    right: 0,
    width: 0,
    height: 0,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 8,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#ffffff',
  },
  navText: {
    color: '#ffffff',
    fontSize: 14,
  },
});
