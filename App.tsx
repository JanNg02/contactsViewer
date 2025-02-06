import React, { useState, useEffect } from 'react';
import styles from './styles/styles';
import { Provider } from 'react-redux'
import { store } from './api/store'
import { View, Text, FlatList, Button, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Modal } from 'react-native';
import { Contacts } from './Model/contacts';
import ContactsList from './components/contactsList';


const HomeScreen = ({}) => {
  const [contacts, setContacts] = useState<Contacts[]>();
  const [isLoading, setLoading] = useState(true); 
  const [modalVisible, setModalVisible] = useState(false);
  const [callingModal, setCallingModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contacts>();

  const getContacts = async () => {
  //try {
  //     const response = await fetch('https://randomuser.me/api/?results=1000');
  //     // throw new Error
  //     const json = await response.json();
  //     setContacts(json.results);
  //     console.log("Contacts: "+contacts); 
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
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


    // useEffect(() => {
    //   getContacts();
    // }, []);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.brandName}>Contacts List</Text>
      {/* {isLoading ? (<ActivityIndicator/>) : ()} */}
      <Provider store={store}>
        <ContactsList/>
      </Provider>
    </View>
      // {/* <FlatList
      //   data={contacts}
      //   keyExtractor={(contacts) => contacts.login.uuid}
      //   renderItem={({ item }) => (
      //     <TouchableOpacity style={styles.contactItem} onPress={() => handlePress(item)}>
      //       <Image source={{ uri: item.picture.medium }} style={styles.image} />
      //       <View>
      //         <Text>{item.name.first} {item.name.last}</Text>
      //         <Text>Cell: {item.cell}</Text>
      //         <Text>Telephone: {item.phone}</Text>
      //       </View>
      //       </TouchableOpacity>
      //   )}/>
      //   )} */}
        
      //   {/* <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
      //   <View style={styles.modalContainer}>
      //     <View style={styles.modalContent}>
      //       {selectedContact && ( // Check if selectedContact is not null
      //         <>
      //           <Text style={styles.modalTitle}>{selectedContact.name.first} {selectedContact.name.last}</Text>
      //           <View style={styles.contactDetails}>
                  
      //             <TouchableOpacity onPress={() =>handleCallModal(selectedContact)} style={styles.callButton}>
      //               <Text style={styles.contactText}>Cell: {selectedContact.cell}</Text>
      //             </TouchableOpacity>
                  
      //             <TouchableOpacity onPress={() =>handleCallModal(selectedContact)} style={styles.callButton}>
      //               <Text style={styles.contactText}>Phone: {selectedContact.phone}</Text>
      //             </TouchableOpacity>
      //           </View>
      //         </>
      //       )}
      //       <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
      //         <Text style={styles.closeButtonText}>Close</Text>
      //       </TouchableOpacity>
      //     </View>
      //   </View>
      // </Modal>

      // <Modal animationType="slide" transparent={true} visible={callingModal} onRequestClose={closeCallModal}>
      //   <View style={styles.modalContainer}>
      //     <View style={styles.modalContent}>
      //     {selectedContact && (
      //     <>
      //       <Text style={styles.contactText}>Calling {selectedContact.name.first} {selectedContact.name.last}</Text>
      //       <Image source={{ uri:"https://static.vecteezy.com/system/resources/previews/005/755/264/non_2x/call-answer-icon-symbol-green-call-icon-symbol-for-web-app-logo-vector.jpg" }} style={styles.imageCall} />
              
      //       <TouchableOpacity onPress={closeCallModal}>
      //         <Image source={{ uri:"https://cdn-icons-png.flaticon.com/512/733/733497.png" }} style={styles.image} />
      //       </TouchableOpacity>
      //       </>
      //     )}
      //     </View>
      //   </View>
      // </Modal> */}
  );
};
export default HomeScreen;