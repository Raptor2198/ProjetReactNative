import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos</Text>
      <Text style={styles.text}>Application développée par ANDRIATSILAVO Mitchel Steeve</Text>
      <Text style={styles.text}>Gérez vos livres avec facilité !</Text>
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
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
