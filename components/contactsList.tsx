import React, { useEffect } from 'react';
import styles from '../styles/styles';
import { useGetAllContactsQuery } from '../api/getContacts';
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { ContactList } from '../Model/contacts';

const ContactsList = () => {
    const { data: contacts, error, isLoading } = useGetAllContactsQuery(100);
    
    if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text>Error!</Text>;
    
    console.log("Results" + contacts)
    
    // const getContacts = async () => {
    //     if(contacts){
    //         contactList = Array.isArray(contacts.results) ? contacts : [];
    //         console.log(contactList)
    //     }
    // }

    // useEffect(() => {
    //     getContacts();
    // }, []);

    return (
        <View style={styles.container}>
            <Text>Rendered</Text>
            <FlatList
                data={contacts.results} // Use contacts instead of data
                keyExtractor={(item) => item.login.uuid} // Use item instead of data
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.contactItem}>
                        <Image source={{ uri: item.picture.medium }} style={styles.image} />
                        <View>
                            <Text>{item.name.first} {item.name.last}</Text>
                            <Text>Cell: {item.cell}</Text>
                            <Text>Telephone: {item.phone}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ContactsList;
