import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';

/**
 * Componente PartCard para mostrar información de piezas de vehículo
 * @param {Object} props - Props del componente
 * @param {Object} props.part - Datos de la pieza
 * @param {Function} props.onPress - Función al presionar la tarjeta
 * @param {Function} props.onDelete - Función al eliminar la pieza
 * 
 *CRITERIO 3: Componente interactivo con Touchable
 */
const PartCard = ({ part, onPress, onDelete }) => {
  /**
   * Maneja la eliminación con confirmación
   */
  const handleDelete = () => {
    Alert.alert(
      'Confirmar eliminación',
      `¿Eliminar la pieza ${part.type} de ${part.brand}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        { 
          text: 'Eliminar', 
          onPress: () => onDelete(part.id) 
        }
      ]
    );
  };

  return (
    <TouchableHighlight 
      onPress={onPress}
      underlayColor={colors.primaryLight}
      style={styles.card}
    >
      <View style={styles.content}>
      {/* Información principal de la pieza */}
        <View style={styles.textContainer}>
          <Text style={styles.type} numberOfLines={1}>{part.type}</Text>
          <Text style={styles.brand}>{part.brand}</Text>
        </View>
        <Text style={styles.date}>{part.date}</Text>
        {/* Botón de eliminar*/}
        <TouchableOpacity 
          onPress={handleDelete}
          style={styles.deleteButton}
          activeOpacity={0.7}
        >
          <MaterialIcons name="delete-outline" size={24} color={colors.error} />
        </TouchableOpacity>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: colors.white,
    elevation: 2,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  type: {
    fontFamily: 'Lato-Bold',
    color: colors.textPrimary,
    fontSize: 16,
  },
  brand: {
    fontFamily: 'Lato-Regular',
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 4,
  },
  date: {
    fontFamily: 'Lato-Regular',
    color: colors.textSecondary,
    fontSize: 14,
    marginRight: 16,
  },
  deleteButton: {
    padding: 8,
  },
});

export default PartCard;