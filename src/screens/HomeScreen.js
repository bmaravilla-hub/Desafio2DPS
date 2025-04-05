import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import PartCard from '../components/PartCard';
import AddPartForm from '../components/AddPartForm';
import PartModal from '../components/PartModal';
import { partsData } from '../utils/data';
import colors from '../utils/colors';

/**
 * Pantalla principal de la aplicación
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

      {/* Listado de piezas o estado vacio */}
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
              onPress={() => setSelectedPart(part)} // CRITERIO 4: Abre modal al tocar
              onDelete={() => handleDeletePart(part.id)} // CRITERIO 3: Eliminación interactiva
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
    marginBottom: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 6,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 22,  
    fontFamily: 'Lato-Bold', 
    color: colors.white,
    marginBottom: 6,  
    letterSpacing: 1.5,  
    textTransform: 'uppercase',
    textShadowColor: colors.textSecondary,
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3, 
  },
  headerSubtitle: {
    fontSize: 16,  
    fontFamily: 'Lato-Italic', 
    color: colors.white,
    opacity: 0.85,
    letterSpacing: 0.5,
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
