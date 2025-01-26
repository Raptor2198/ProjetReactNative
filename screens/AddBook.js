import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { BookContext } from '../context/BookContext';

export default function AddBook({ navigation }) {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleAddBook = () => {
    if (title && author && description) {
      const newBook = { id: Date.now(), title, author, description };
      addBook(newBook); // Ajouter le livre au contexte
      Alert.alert('Livre ajouté !', `Titre : ${title}`);
      navigation.goBack();
    } else {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Titre du livre"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Auteur"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Ajouter le livre" onPress={handleAddBook} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F2F2F7',
    },
    input: {
      borderColor: '#E5E5EA',
      borderWidth: 1,
      borderRadius: 15,
      padding: 15,
      marginBottom: 15,
      backgroundColor: '#FFFFFF',
      fontSize: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 3,
      elevation: 2,
    },
    description: {
      height: 100,
      textAlignVertical: 'top',
    },
  });
  
