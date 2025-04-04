import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PartCard from '../components/PartCard';
import AddPartForm from '../components/AddPartForm';
import PartModal from '../components/PartModal';
import { partsData } from '../utils/data';
import colors from '../utils/colors';

/**
 * Funcionalidades:
 * - Listado de piezas
 * - Botón flotante para agregar
 * - Modal de detalles
 * - Formulario de registro
 */
const HomeScreen = () => {
  const [parts, setParts] = useState(partsData || []);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedPart, setSelectedPart] = useState(null);

  // Maneja la adición de nuevas piezas
  const handleAddPart = (newPart) => {
    setParts([newPart, ...parts]); // Nueva pieza al inicio
    setIsFormVisible(false);
  };

  // Maneja la eliminación de piezas
  const handleDeletePart = (id) => {
    setParts(prevParts => prevParts.filter(part => part.id !== id));
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mis Piezas</Text>
        <Text style={styles.headerSubtitle}>{parts.length} registros</Text>
      </View>

      {/* Listado de piezas */}
      {parts.length === 0 ? (
        <View style={styles.emptyState}>
          <MaterialIcons name="handyman" size={50} color={colors.textSecondary} />
          <Text style={styles.emptyText}>No hay piezas registradas</Text>
          <Text style={styles.emptyHint}>Presiona el botón + para agregar</Text>
        </View>
      ) : (
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {parts.map((part) => (
            <PartCard
              key={part.id}
              part={part}
              onPress={() => setSelectedPart(part)}
              onDelete={() => handleDeletePart(part.id)}
            />
          ))}
        </ScrollView>
      )}

      {/* Botón Flotante */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setIsFormVisible(true)}
        activeOpacity={0.8}
      >
        <MaterialIcons name="add" size={30} color={colors.white} />
      </TouchableOpacity>

      {/* Componentes modales */}
      <AddPartForm 
        isVisible={isFormVisible} 
        onClose={() => setIsFormVisible(false)} 
        onSubmit={handleAddPart} 
      />
      <PartModal 
        part={selectedPart} 
        isVisible={!!selectedPart} 
        onClose={() => setSelectedPart(null)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Lato-Bold',
    color: colors.white,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: colors.white,
    opacity: 0.8,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 80, 
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    fontFamily: 'Lato-SemiBold',
    color: colors.textPrimary,
    marginTop: 16,
    textAlign: 'center',
  },
  emptyHint: {
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    color: colors.textSecondary,
    marginTop: 8,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    backgroundColor: colors.accent,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen;