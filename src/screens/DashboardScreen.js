// Dashboard screen component
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to VitalFlow!</Text>
      <Text>Your real-time health dashboard.</Text>
      {/* Placeholder for dynamic data and insights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest Readings:</Text>
        <Text>--</Text> {/* Placeholder */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personalized Insights:</Text>
        <Text>--</Text> {/* Placeholder */}
      </View>
      <Button
        title="View CGM History"
        onPress={() => navigation.navigate('CgmHistory')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginVertical: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default DashboardScreen;
