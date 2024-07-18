import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import React from 'react'

const Login = ({ onSignupPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/tom.jpg")}
                    style={styles.image}
                />
            </View>

            <View style={styles.inputContainer}>
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
            </View>

            <View style={styles.btnContainer}>
                <View style={styles.buttonWrapper}>
                    <Button
                        title='Login'
                        color='green'
                    />
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        title='Signup'
                        color='green'
                        onPress={onSignupPress}
                    />
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    inputContainer: {
        flex: 1,
        width: '100%',
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
    },
    btnContainer: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
    },
    buttonWrapper: {
        marginVertical: 10,
        width: '100%',
    },
})
