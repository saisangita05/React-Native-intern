import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({ onLoginPress }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={{ uri: 'https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg' }}
                resizeMode="cover"
            >
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Let's Get Started{'\n'}with Foodbeat</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title='Login Here ->'
                        onPress={onLoginPress}
                        color='green'
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    textContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    text: {
        fontSize: 35,
        fontWeight: 'italic',
        color: 'black',
        textAlign: 'center',
    },
    buttonContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 10,
        borderRadius: 10,
    },
})
