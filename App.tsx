import React, { useState, useEffect } from 'react';
import styles from './styles/styles';
import { Provider } from 'react-redux'
import { store } from './api/store'
import { View, Text, FlatList, Button, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import { Contacts } from './Model/contacts';
import ContactsList from './components/contactsList';


const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.brandName}>Contacts List insane</Text>
      <Provider store={store}>
        <ContactsList/>
      </Provider>
    </View>
  );
};
export default HomeScreen;