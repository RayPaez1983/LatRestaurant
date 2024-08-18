import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import iconMenu from '../assets/icons-menu.png';
import iconSearch from '../assets/icons-search.png';

const TopMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').width)
  ).current;

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: -Dimensions.get('window').width * 0.75,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.menuText}>City de Moda</Text>
        <TouchableOpacity>
          <Image source={iconSearch} style={styles.icon} resizeMode="cover" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={toggleMenu}>
        <Image
          source={iconMenu}
          style={styles.icon}
          blurRadius={0}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {menuVisible && (
        <Animated.View
          style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Restaurant</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: 'rgb(37, 44, 65)',
    paddingBottom: 10,
    paddingLeft: 30,
  },
  content: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  menu: {
    position: 'absolute',
    top: 40,
    left: 0,
    zIndex: 100,
    backgroundColor: 'rgb(37, 44, 65)',
    padding: 10,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.75, // 75% width of the screen
    height: Dimensions.get('window').height, // Full screen height
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TopMenu;
