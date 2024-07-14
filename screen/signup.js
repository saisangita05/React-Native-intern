import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground ,
} from 'react-native';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle the signup logic here
    console.log('Signup:', username, email, password);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://static.vecteezy.com/system/resources/previews/024/085/653/non_2x/abstract-gradient-mobile-wallpaper-set-abstract-art-wallpaper-smartphone-wallpapers-android-apps-background-design-vector.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Signup</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0288D1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Signup;
