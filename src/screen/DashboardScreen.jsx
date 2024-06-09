import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DashboardScreen = () => {
  const [temperature, setTemperature] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating live data updates
      setTemperature((Math.random() * 35).toFixed(1));
      setMoisture((Math.random() * 100).toFixed(1));
      setHumidity((Math.random() * 100).toFixed(1));
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Temperature: {temperature} °C</Text>
        <Text style={styles.dataText}>Moisture: {moisture} %</Text>
        <Text style={styles.dataText}>Humidity: {humidity} %</Text>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  dataContainer: {
    alignItems: 'center',
  },
  dataText: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
  },
});
