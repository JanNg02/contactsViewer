import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import styles from '../styles/styles';
import { useGetAllContactsQuery } from '../api/getContacts';
import { View, Text, TextInput, FlatList, ActivityIndicator, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { ContactList } from '../Model/contacts';

type Inputs = {
    number: string
  }

const ContactsList = () => {
    const {control, register, handleSubmit, watch, formState: { errors },} = useForm<Inputs>()
    const [numContacts, setNumContacts] = useState(5);
    const { data: contacts, error, isLoading } = useGetAllContactsQuery(numContacts);
    
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const newNumContacts = parseInt(data.number, 10); // Ensures that the input is int or number?
        if (!isNaN(newNumContacts) && newNumContacts >= 5 && newNumContacts <=500) {
            setNumContacts(newNumContacts); // Update the number of contacts to fetch
        } else {
            Alert.alert('Can only generate at least 5 and max of 500');
        }
    };

    if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
    if (error) return <Text>Error!</Text>;
    

    return (
        <View style={styles.container}>
            
            <View>
                <Controller
                    control={control}
                        name="number"
                        rules={{ required: true }}
                        render={({ field: {onChange, value} }) => (
                            <TextInput
                                style={styles.searchBar}
                                placeholder="Input a number between 5 to 500"
                                onChangeText={onChange}
                                value={value}
                                keyboardType="numeric"
                            />
                        )}
                    />
                {errors.number && <Text>This field is required.</Text>}
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>

            <Text>{contacts.results.length} Contacts Generated </Text>
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
