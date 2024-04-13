import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; // Import ScrollView
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SUMMARIZE REPORTS</Text>
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
              onPress={() => navigation.navigate('Camera')}
              icon={<Entypo name="camera" size={24} color="black" />}
            />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.headerText}>LATEST REPORTS</Text>
        <Text style={{ paddingRight: 30, paddingTop: 100, color: 'green' }}>View all</Text>
      </View>

      {/* Start of scrollable cards */}
      <ScrollView horizontal style={styles.scrollContainer}>
        <View style={styles.row}>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.text}>Additional Card 1</Text>
              <IconButton
                title={''}
                onPress={() => console.log('IconButton pressed')}
              />
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.text}>Additional Card 2</Text>
              <IconButton
                title={''}
                onPress={() => console.log('IconButton pressed')}
              />
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.text}>Additional Card 3</Text>
              <IconButton
                title={''}
                onPress={() => console.log('IconButton pressed')}
              />
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.text}>Additional Card 4</Text>
              <IconButton
                title={''}
                onPress={() => console.log('IconButton pressed')}
              />
            </View>
          </View>
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
    paddingTop: 40,
  },
  headerText: {
    fontFamily: 'custom-font',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 100,
    paddingLeft: 30,
    justifyContent: 'center',
    color: '#333',
  },
  text: {
    fontSize: 17,
    color: '#444444',
    textAlign: 'center',
  },
  row: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
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
