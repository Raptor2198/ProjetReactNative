import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BookContext } from '../context/BookContext';

export default function Statistics() {
  const { books } = useContext(BookContext);

  const totalBooks = books.length;
  const readBooks = books.filter((book) => book.isRead).length;
  const favoriteBooks = books.filter((book) => book.isFavorite).length;

  return (
    <View style={styles.container}>
      <Text style={styles.stat}>Total de livres : {totalBooks}</Text>
      <Text style={styles.stat}>Livres lus : {readBooks}</Text>
      <Text style={styles.stat}>Favoris : {favoriteBooks}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  stat: {
    fontSize: 18,
    marginVertical: 5,
  },
});
