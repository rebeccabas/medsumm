import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
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
        const response = await fetch('http://192.168.1.117:8000/api/images/', {
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
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
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
    width: '100%',
    height: undefined,
    aspectRatio: 0.5,
  },
});
