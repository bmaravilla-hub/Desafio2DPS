import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

/** 
 *CRITERIO 2: Uso de componentes básicos (View, Text)
 */
const Header = ({ title, showBackButton = false, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Botón de retroceso (condicional) */}
      {showBackButton && (
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={colors.white}
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      )}

      {/* Título del header */}
      <Text style={styles.headerTitle}>{title}</Text>

      {/* Espacio vacío para balancear el diseño */}
      <View style={styles.emptySpace} />
    </View>
  );
};


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary, 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20,
    elevation: 4, 
    shadowColor: colors.text, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    fontFamily: 'Lato-Regular', 
    textAlign: 'center',
    flex: 1, 
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  emptySpace: {
    width: 34, 
  },
});

export default Header;