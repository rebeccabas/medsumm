import * as React from 'react';
import { View, Text, Button} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({ route, navigation}) {
    const [password, onChangePassword] = React.useState('');
  const [username, onChangeUsername] = React.useState('');
    return (
        <View style={styles.container}>
        <TextInput
        value={username}
        placeholder="Username"
        style={styles.input}
        onChangeText={onChangeUsername}
        
        />

        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Password'
        />
      <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'custom-font',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#333',
    },
    footerText: {
        marginTop: 40,
        marginBottom: 40,
        fontSize: 12,
        color: '#888',
    },
    input: {
        width: 300,
        height: 50,
        borderColor: '#DADADA',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 15,
        fontSize: 18,
        backgroundColor: 'white',
        borderRadius: 60,
    },
    loginButton: {
        backgroundColor: '#896790',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30, // Make the button round
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    styleText: {
        fontSize: 12,
        alignItems: 'center',
    },
    baseText1: {
        fontSize: 12,
        margin: 10,
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontSize: 16,
    },
  });
  
export default LoginScreen;