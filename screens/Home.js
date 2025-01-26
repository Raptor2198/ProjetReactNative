import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { BookContext } from '../context/BookContext';
import BookList from '../components/BookList';

export default function Home({ navigation }) {
  const { filterBooks } = useContext(BookContext);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const booksToDisplay = filterBooks(selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Tous" onPress={() => handleCategoryChange('Tous')} />
        <Button title="À lire" onPress={() => handleCategoryChange('À lire')} />
        <Button title="Lus" onPress={() => handleCategoryChange('Lus')} />
        <Button title="Favoris" onPress={() => handleCategoryChange('Favoris')} />
      </View>
      <FlatList
        data={booksToDisplay}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BookList book={item} navigation={navigation} />
        )}
      />
      <View style={styles.addButton}>
        <Button
          title="Ajouter un livre"
          onPress={() => navigation.navigate('AddBook')}
          color="blue"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F7',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 15,
    },
    addButton: {
      margin: 15,
      borderRadius: 15,
      overflow: 'hidden',
    },
  });
  
