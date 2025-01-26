import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Catalogue de Livres © 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
