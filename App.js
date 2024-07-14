// App.js
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { PrimaryButton, SuccessButton, DangerButton, InfoButton, WarningButton } from './SpecificButtons';

const App = () => {
  const handleButtonPress = (type) => {
    Alert.alert(`${type} Button Pressed!`);
  };

  return (
    <View style={styles.container}>
      <PrimaryButton title="Primary" onPress={() => handleButtonPress('Primary')} />
      <SuccessButton title="Success" onPress={() => handleButtonPress('Success')} />
      <DangerButton title="Danger" onPress={() => handleButtonPress('Danger')} />
      <InfoButton title="Info" onPress={() => handleButtonPress('Info')} />
      <WarningButton title="Warning" onPress={() => handleButtonPress('Warning')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

