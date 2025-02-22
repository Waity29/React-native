import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const services = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Image
                source={{ uri: 'https://i.sstatic.net/kW1hD.jpg' }}
                style={styles.logo}
            />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: "90%",
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },

  div: {
    paddingLeft: 50,
  }
});

export default services;