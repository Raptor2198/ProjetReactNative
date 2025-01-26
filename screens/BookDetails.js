import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BookDetails({ route }) {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Auteur : {book.author}</Text>
      <Text style={styles.description}>{book.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 20,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});
