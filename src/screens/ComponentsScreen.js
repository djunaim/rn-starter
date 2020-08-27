import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = <Text style={styles.subHeader}>My name is Mo</Text>;

  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      {name}
    </View>
    );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subHeader: {
    fontSize: 20
  }
});

export default ComponentsScreen;
