// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Contacts } from './Model/contacts';


const HomeScreen = ({  }) => {
  const [contacts, setContacts] = useState<Contacts[]>();
  const [isLoading, setLoading] = useState(true); 

  const getContacts = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1000');
      const json = await response.json();
      setContacts(json.results);
      console.log("Contacts: "+contacts); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      getContacts();
    }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.brandName}>Contacts List</Text>
      {isLoading ? (<ActivityIndicator/>) : (
      <FlatList
        data={contacts}
        keyExtractor={(contacts) => contacts.login.uuid}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Image source={{ uri: item.picture.medium }} style={styles.image} />
            <View>
              <Text>{item.name.first}</Text>
              <Text>{item.cell}</Text>
            </View>
          </View>
        )}/>)}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16C47F',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
});

export default HomeScreen;