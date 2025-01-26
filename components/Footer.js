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
      backgroundColor: '#F2F2F7',
      padding: 15,
      borderTopWidth: 1,
      borderColor: '#E5E5EA',
      alignItems: 'center',
    },
    text: {
      color: '#8E8E93',
      fontSize: 14,
    },
  });
  
