import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.text}>Upload Report</Text>
            <IconButton
              title={''}
              onPress={() => navigation.navigate('UploadImage')} // Define onPress handler
              icon={<FontAwesome name="photo" size={24} color="black" />}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.text}>Scan Report</Text>
            <IconButton
              title={''}
              onPress={() => console.log('IconButton pressed')} // Define onPress handler
              icon={<Entypo name="camera" size={24} color="black" />}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;

const IconButton = ({ title, onPress, icon }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text>{title}</Text>
    {icon}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 17,
    color: '#444444',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row', // Arrange children horizontally
  },
  card: {
    flex: 1, // Each card takes equal space
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    margin: 16,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '50%', // Adjust the maximum width as per your requirement
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
