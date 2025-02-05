// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import { Contacts } from './Model/contacts';
import { } from './Model/contacts';


const HomeScreen = ({  }) => {
  const [contacts, setContacts] = useState<Contacts[]>();
  const [isLoading, setLoading] = useState(true); 
  const [modalVisible, setModalVisible] = useState(false);
  const [callingModal, setCallingModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contacts>();

  const getContacts = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=1000');
      // throw new Error
      const json = await response.json();
      setContacts(json.results);
      console.log("Contacts: "+contacts); 
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePress = (contact: Contacts) => {
    setSelectedContact(contact)
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleCallModal = (contact: Contacts) => {
    setModalVisible(false);
    setCallingModalVisible(true)
  };

  const closeCallModal = () => {
    setCallingModalVisible(false);
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
          <TouchableOpacity style={styles.contactItem} onPress={() => handlePress(item)}>
            <Image source={{ uri: item.picture.medium }} style={styles.image} />
            <View>
              <Text>{item.name.first} {item.name.last}</Text>
              <Text>Cell: {item.cell}</Text>
              <Text>Telephone: {item.phone}</Text>
            </View>
            </TouchableOpacity>
        )}/>)}
        
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedContact && ( // Check if selectedContact is not null
              <>
                <Text style={styles.modalTitle}>{selectedContact.name.first} {selectedContact.name.last}</Text>
                <View style={styles.contactDetails}>
                  
                  <TouchableOpacity onPress={() =>handleCallModal(selectedContact)} style={styles.callButton}>
                    <Text style={styles.contactText}>Cell: {selectedContact.cell}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() =>handleCallModal(selectedContact)} style={styles.callButton}>
                    <Text style={styles.contactText}>Phone: {selectedContact.phone}</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal animationType="slide" transparent={true} visible={callingModal} onRequestClose={closeCallModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          {selectedContact && (
          <>
            <Text style={styles.contactText}>Calling {selectedContact.name.first} {selectedContact.name.last}</Text>
            <Image source={{ uri:"https://static.vecteezy.com/system/resources/previews/005/755/264/non_2x/call-answer-icon-symbol-green-call-icon-symbol-for-web-app-logo-vector.jpg" }} style={styles.imageCall} />
              
            <TouchableOpacity onPress={closeCallModal}>
              <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/733/733497.png" }} style={styles.image} />
            </TouchableOpacity>
            </>
          )}
          </View>
        </View>
      </Modal>

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
  imageCall: {
    width: 250,
    height: 250,
    borderRadius: 25,
    marginRight: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactDetails: {
    width: '100%',
    marginBottom: 20, 
  },
  contactText: {
    fontSize: 16,
    marginVertical: 5,
  },
  callButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#16C47F',
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
});

export default HomeScreen;