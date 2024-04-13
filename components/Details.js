import * as React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function DetailsScreen({ navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
   
        <View style={styles.card}>
            <Text style={styles.text}>Card 1</Text>
            <Button
                title="Button 1"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
        
        <View style={styles.card}>
            <Text style={styles.text}>Card 2</Text>
            <Button
                title="Button 2"
                onPress={() => navigation.navigate('Details')}
            />
        </View>

    </View>
    );
  }

export default DetailsScreen;

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        color: '#444444',
        textAlign: 'center',
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
        width: 350,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
