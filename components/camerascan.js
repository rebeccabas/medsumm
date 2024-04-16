import * as React from 'react';
import { useEffect } from 'react'; // Import useEffect for handling side effects
import * as ImagePicker from 'expo-image-picker';

const CameraScreen = ({ navigation }) => {
  useEffect(() => {
    // Function to handle camera launch
    const openCamera = async () => {
      // Request camera permissions
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (status !== 'granted') {
        alert('Camera permission denied');
        return;
      }

      //launch camera
      try {
        let result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.back,
          allowsEditing: true, 
          aspect: [1, 1], 
          quality: 1, 
        });

        // Handle result
        if (!result.cancelled) {
          console.log('Image captured:', result.uri);
          // can navigate or perform other actions with the captured image here
        }
      } catch (error) {
        console.error('Error launching camera:', error);
      }
    };

    openCamera();
  }, []); 

  return null;
};

export default CameraScreen;
