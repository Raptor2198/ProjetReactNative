import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BookContext } from '../context/BookContext';

export default function BookList({ book, navigation }) {
  const { toggleReadStatus, toggleFavoriteStatus } = useContext(BookContext);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
      <View style={styles.buttons}>
        <Button
          title={book.isRead ? 'Marquer non lu' : 'Marquer lu'}
          onPress={() => toggleReadStatus(book.id)}
        />
        <Button
          title={book.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
          onPress={() => toggleFavoriteStatus(book.id)}
        />
        <Button
          title="Détails"
          onPress={() => navigation.navigate('BookDetails', { book })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
