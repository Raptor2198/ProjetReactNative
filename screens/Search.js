import React, { useState, useContext } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { BookContext } from '../context/BookContext';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const { books } = useContext(BookContext);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un livre..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.result}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  result: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    color: 'gray',
  },
});
