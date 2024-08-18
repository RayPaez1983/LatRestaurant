import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import facebookIcon from '../assets/icon-facebook.png';
import instagramIcon from '../assets/icon-instagram.png';
import twitterIcon from '../assets/icon-twitter.png';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <Image source={facebookIcon} style={styles.icon} resizeMode="cover" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={instagramIcon}
            style={styles.icon}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={twitterIcon} style={styles.icon} resizeMode="cover" />
        </TouchableOpacity>
      </View>
      <View style={styles.footerInfo}>
        <Text style={styles.footerText}>valenciademoda.com@gmail.com</Text>
        <Text style={styles.footerText}>2024 {'\u00A9'}City De Moda</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: 'rgb(37, 44, 65)',
    paddingBottom: 20,
  },
  content: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  },
  footerInfo: {
    borderTopWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    marginTop: 10,
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});

export default Footer;
