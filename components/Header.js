import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196F3',
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
