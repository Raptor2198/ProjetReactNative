import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Statistics from '../components/Statistics';

export default function StatisticsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Statistiques</Text>
      <Statistics />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
