import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

/**
 * CRITERIO 2: Implementa TouchableOpacity
 */
const FloatingButton = ({ onPress }) => (
  <TouchableOpacity 
    style={styles.button} 
    onPress={onPress}
    activeOpacity={0.7} // Efecto visual al presionar
  >
    <MaterialIcons 
      name="add" 
      size={28} 
      color={colors.white} 
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: colors.accent, 
    width: 56,
    height: 56,
    borderRadius: 28, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: colors.text, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default FloatingButton;
