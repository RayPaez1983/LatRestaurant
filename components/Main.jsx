import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TopMenu from './TopMenu';
import Footer from './Footer';
import Hero from './hero';

const Main = () => {
  const insets = useSafeAreaInsets();
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <TopMenu />
      <ScrollView style={styles.container}>
        <Hero />
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    zIndex: -1,
  },
});
export default Main;
