import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setError("Passwords don't match.");
            return;
        }

        try {
            const userData = { username, password }; // Prepare data for POST request
            const response = await fetch('http://192.168.1.117:8000/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Sign up failed');
            }

            // Clear input fields and navigate to success screen
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            navigation.navigate('Details');
        } catch (error) {
            console.error('Error signing up:', error);
            Alert.alert('Sign Up Failed', 'An error occurred while signing up. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Sign Up</Text>
                    <Text style={styles.footerText}>Create your account.</Text>
                </View>

                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={20} padding={5} color="black" />
                    <TextInput
                        value={username}
                        placeholder="Username"
                        style={styles.input}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Entypo name="lock" size={20} padding={5} color="black" />
                    <TextInput
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Entypo name="lock" size={20} padding={5} color="black" />
                    <TextInput
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        secureTextEntry
                        style={styles.input}
                    />
                </View>

                {error ? <Text style={styles.errorText}>{error}</Text> : null}

                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.signupButton}
                >
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>

                <View style={styles.styleText}>
                    <Text style={styles.baseText1}>Already have an account? <Text style={styles.underlineText} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(125, 226, 209, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        padding: 50,
        marginBottom: 20,
        width: 320,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
    },
    signupButton: {
        backgroundColor: '#339989',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginTop: 20,
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
    underlineText: {
        textDecorationLine: 'underline',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontSize: 16,
    },
});

export default SignUpScreen;
