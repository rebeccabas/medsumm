import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
 // Import ScrollView
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function DetailsScreen({ navigation }) {
  const [data, setData] = useState([]);
  
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token)
      const response = await fetch('http://192.168.101.10:8000/api/images/',
    {
      headers: {
        'Authorization': `Token ${token}`, // Include token in headers
        'Content-Type': 'application/json',
      },

    });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>  Summarize Your Reports</Text>
      <View style={styles.row}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.text}>Upload Report</Text>
            <IconButton
              title={''}
              onPress={() => navigation.navigate('UploadImage')}
              icon={<FontAwesome name="photo" size={24} color="black" />}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.text}>Scan Report</Text>
            <IconButton
              title={''}
              onPress={() => console.log('IconButton pressed')}
              icon={<Entypo name="camera" size={24} color="black" />}
            />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.headerText}>Latest Reports</Text>
        <Text>View All</Text>
      </View>

      <ScrollView horizontal style={styles.scrollContainer}>
        <View style={styles.row}>
          {data.map((item, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.header}>
              
                <Text style={styles.text}>{item.id}</Text>
                <Image
                  style={{ width: 180, height: 200 }} 
                  source={{ uri: item.picture }} 
                />
                
                <IconButton
                  title={''}
                  onPress={() => console.log('IconButton pressed')}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  headerText: {
    fontFamily: 'custom-font',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 100,
    justifyContent: 'center',
    color: '#333',
  },
  text: {
    fontSize: 17,
    color: '#444444',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 8,
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
    maxWidth: '50%',
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    marginTop: 20, // Adjust as needed
    marginBottom: 20, // Adjust as needed
  },
});
