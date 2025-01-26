import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BookCard({ category }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.text}>{category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      marginVertical: 10,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: '#E5E5EA',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3, // pour Android
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: '#007AFF',
    },
  });
  
