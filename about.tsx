import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {}
      <Image
                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/007/932/412/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg' }}
                style={styles.logo}
            />
      <View style={styles.div}>
        

            <Text style={styles.title}></Text>
            <Text style={styles.description}>
                THIS IS ABOUT US
            </Text>
            
            <Text style={styles.sectionTitle}>About Us

Welcome to Innovative Solutions Co.!

We specialize in providing high-quality products and services that make life easier and businesses more efficient. Founded in 2010, our goal is to offer innovative solutions that meet the needs of our customers.

What We Do

Smart Home Devices: We offer smart devices that make your home more secure and energy-efficient.
Custom Software: Tailored software solutions to help businesses run smoothly.
Consulting Services: Helping businesses adopt new technologies to improve their operations.
Our Values

Customer First: We listen to our customers and provide solutions that fit their needs.
Innovation: We keep up with the latest tech to stay ahead.
Integrity: We do what’s right, every time.
Sustainability: We choose eco-friendly options whenever possible.
Why Choose Us?

Experienced Team: Over 15 years in the industry.
Top Quality: We use the best materials and technology.
Reliable Support: Our team is here to help you every step of the way.</Text>

            <Text style={styles.sectionTitle}>Contact Us:</Text>
            <Text style={styles.description}>
                If you have any question, feel free to reach out to us at:
                {'\n'}Email: lesther.quimpan@hcdc.edu.ph
                {'\n'}Phone: +1234567890
            </Text>

      </View>
      
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

export default About;