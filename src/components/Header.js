import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

/** 
 *CRITERIO 2: Uso de componentes básicos (View, Text)
 *CRITERIO 3 (Interactividad): Botón de retroceso con navegación
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

      {/* Título del header*/}
      <View style={styles.titleContainer}>
        <MaterialIcons name="settings" size={24} color={colors.white} style={styles.icon} />
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

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
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 4,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 8, 
  },
  headerTitle: {
    fontSize: 24, 
    fontWeight: '700', 
    color: colors.white,
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
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
