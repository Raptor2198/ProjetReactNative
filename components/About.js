import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos</Text>
      <Text style={styles.text}>
        Cette application est développée pour vous aider à gérer vos livres. Ajoutez, recherchez et consultez les
        détails de vos lectures.
      </Text>
      <Text style={styles.text}>Version : 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
});
