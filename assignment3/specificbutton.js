import React from 'react';
import ReusableButton from './reusablebuttons';
import { StyleSheet } from 'react-native';

export const PrimaryButton = (props) => (
  <ReusableButton {...props} buttonStyle={styles.primaryButton} textStyle={styles.text} />
);

export const SuccessButton = (props) => (
  <ReusableButton {...props} buttonStyle={styles.successButton} textStyle={styles.text} />
);

export const DangerButton = (props) => (
  <ReusableButton {...props} buttonStyle={styles.dangerButton} textStyle={styles.text} />
);

export const InfoButton = (props) => (
  <ReusableButton {...props} buttonStyle={styles.infoButton} textStyle={styles.text} />
);

export const WarningButton = (props) => (
  <ReusableButton {...props} buttonStyle={styles.warningButton} textStyle={styles.text} />
);

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#007BFF',
  },
  successButton: {
    backgroundColor: '#28A745',
  },
  dangerButton: {
    backgroundColor: '#DC3545',
  },
  infoButton: {
    backgroundColor: '#17A2B8',
  },
  warningButton: {
    backgroundColor: '#FFC107',
  },
  text: {
    color: '#FFFFFF',
  },
});
