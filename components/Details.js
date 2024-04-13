import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.text}>Card 1</Text>
            <Button
              title="Button 1"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.text}>Card 2</Text>
            <Button
              title="Button 2"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;

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
});
