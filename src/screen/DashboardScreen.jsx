import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const DashboardScreen = () => {
  const [temperature, setTemperature] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [humidity, setHumidity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((Math.random() * 35).toFixed(1));
      setMoisture((Math.random() * 100).toFixed(1));
      setHumidity((Math.random() * 100).toFixed(1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Soil Health Dashboard</Text>
      <View style={styles.dataContainer}>
        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Temperature</Text>
          <Text style={styles.dataText}>{temperature} °C</Text>
        </View>
        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Moisture</Text>
          <Text style={styles.dataText}>{moisture} %</Text>
        </View>
        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Humidity</Text>
          <Text style={styles.dataText}>{humidity} %</Text>
        </View>
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
    paddingHorizontal: 20,
  },
  header: {
    color: 'black',
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataBox: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  dataLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataText: {
    fontSize: 16,
    color: 'black',
  },
});
