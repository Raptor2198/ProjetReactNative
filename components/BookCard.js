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
    backgroundColor: '#F5F5F5',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});
