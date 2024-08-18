import React, { useState, useEffect, useRef } from 'react';
import { Image, View, Dimensions, StyleSheet } from 'react-native';
import CustomTextInput from './CustomTextInput';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Hero = () => {
  const [slides, setSlides] = useState([
    {
      id: undefined,
      image: '',
    },
  ]);
  const [count, setCount] = useState(1);
  const interval = 3000;

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedSlides = [];
      for (let i = 1; i <= 5; i++) {
        const url = {
          id: i,
          image: `https://via.assets.so/album.png?id=${i}&q=95&w=360&h=360&fit=fill`,
        };
        fetchedSlides.push(url);
      }
      setSlides(fetchedSlides);
    };
    console.log(slides);
    fetchImages();
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCount(count + 1);
    };

    const id = setInterval(nextSlide, 3000);

    return () => clearInterval(id); // Cleanup interval on unmount
  }, [count]);
  const img = `https://via.assets.so/album.png?id=${count}&q=95&w=360&h=360&fit=fill`;
  console.log(slides);
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} />
      <CustomTextInput style={styles.input} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
  },
  image: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hero;
