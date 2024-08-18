import React, { useState, useEffect, useRef } from 'react';
import { Image, View, Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const nextSlide = () => {
      setCount((prevIndex) => prevIndex + 1);
    };

    const id = setInterval(nextSlide, 3000);

    return () => clearInterval(id); // Cleanup interval on unmount
  }, [count]);
  const img = `https://picsum.photos/id/${count}/200/300`;
  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    flexDirection: 'row',
  },
  slide: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },
});

export default Hero;
