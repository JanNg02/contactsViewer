import { StyleSheet } from 'react-native';

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
      searchBar: {
        height: 40,
        borderColor: '#FFD65A',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FFF9E3',
        color: '#000',
      },
}); 

export default styles;