import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native'
import React from 'react'

const Login = ({ onLoginPress }) => {
    return (
        <ImageBackground 
            style={styles.imageBackground} 
            source={require("../assets/food.jpg")}
            
        >
            <View style={styles.overlay}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Username'
                        keyboardType="default"
                        style={styles.inputBox}
                    />
                    <TextInput
                        placeholder='Email'
                        keyboardType="email-address"
                        style={styles.inputBox}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        style={styles.inputBox}
                    />
                    <View style={styles.btnContainer}>
                        <Button
                            title='Signup'
                            color='green'
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            title='Login'
                            color='red'
                            onPress={onLoginPress}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
       
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
    },
    inputBox: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    btnContainer: {
        width: '100%',
        marginVertical: 10,
        borderRadius: 5,
    },
})
