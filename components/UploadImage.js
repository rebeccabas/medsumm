import { useState } from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UploadImageScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      const token = await AsyncStorage.getItem('token');

      const formData = new FormData();
      const file = await urlToBlob(result.assets[0].uri);
      formData.append('picture', file, 'image.jpg');

      try {
        const response = await fetch('http://192.168.101.10:8000/api/images/', {
          method: 'POST',
          body: formData,
          headers: {
            'Authorization': `Token ${token}`,
          },
        });

        const data = await response.json();
        console.log('Image upload response:', data);

        if (response.ok) {
          setImage(result.assets[0].uri);
        } else {
          console.error('Error uploading image:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const urlToBlob = async (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Text style={styles.btnText}>Pick an image from camera roll</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '50%',
    height: 200,
    aspectRatio: 0.5,
  },
  btn: {
    backgroundColor: '#339989',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
