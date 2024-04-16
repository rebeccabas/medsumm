import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function DetailsScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch('http://192.168.1.117:8000/api/images/', {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const openModal = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Summarize Your Reports</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('UploadImage')}>
          <FontAwesome name="photo" size={24} color="black" />
          <Text style={styles.optionText}>Upload Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Camera')}>
          <Entypo name="camera" size={24} color="black" />
          <Text style={styles.text}>Scan Report</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.latestReportsContainer}>
        <Text style={styles.headerText}>Latest Reports</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.reportsList}>
            {data.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => openModal(item.picture)}>
                <Image style={styles.reportImage} source={{ uri: item.picture }} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalBackground} onPress={closeModal} />
          <View style={styles.modalContent}>
            <Image style={styles.modalImage} source={{ uri: selectedImage }} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerText: {
    fontFamily: 'custom-font',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  option: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
  },
  optionText: {
    marginTop: 8,
    fontSize: 16,
    color: '#444444',
  },
  latestReportsContainer: {
    marginBottom: 20,
  },
  reportsList: {
    flexDirection: 'row',
  },
  reportImage: {
    width: 180,
    height: 200,
    marginRight: 10,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalImage: {
    width: 380,
    height: 500,
    resizeMode: 'contain',
  },
});