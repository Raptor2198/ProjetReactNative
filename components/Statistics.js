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
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFFFF',
      borderRadius: 15,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    stat: {
      fontSize: 18,
      marginVertical: 10,
      fontWeight: '600',
      color: '#1C1C1E',
    },
  });
  
