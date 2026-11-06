// Ejemplo 1: pedir el permiso de cámara al pulsar un botón.
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Camera, CameraView } from 'expo-camera';

export default function App() {

  // 'pendiente' significa que todavía no hemos preguntado nada.
  const [estado, setEstado] = useState('pendiente');

  const pedirPermiso = async () => {

    // Esta línea abre el cuadro del sistema y espera la respuesta.
    const { status } = await
      Camera.requestCameraPermissionsAsync();
    setEstado(status); // 'granted' (concedido) o 'denied'
    (denegado)
  };

  return (

    <View style={styles.contenedor}>

      <StatusBar style="dark" />
      <Text style={styles.titulo}>Permiso de cámara</Text>
      {estado === 'pendiente' && (
        <Text style={styles.texto}>Aún no se ha solicitado el
          permiso.</Text>
      )}

      {estado === 'granted' && (

        <Text style={[styles.texto, styles.verde]}>Permiso
          concedido</Text>

      )}

      {estado === 'denied' && (

        <Text style={[styles.texto, styles.rojo]}>Permiso
          denegado</Text>

      )}


      {/* La cámara solo se muestra si el usuario dio permiso.
*/}

      {estado === 'granted' ? (

        <CameraView style={styles.camara} facing="back" />

      ) : (

        <Button title="Solicitar permiso"
          onPress={pedirPermiso} />

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  contenedor: {

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    padding: 24,

    backgroundColor: '#F6F6F6',

  },

  titulo: {
    fontSize: 24, fontWeight: 'bold', marginBottom: 16
  },

  texto: {
    fontSize: 16, marginBottom: 20, textAlign: 'center'
  },

  verde: { color: '#15803D', fontWeight: 'bold' },

  rojo: { color: '#B91C1C', fontWeight: 'bold' },

  camara: {
    width: 280, height: 360, borderRadius: 12,
    overflow: 'hidden'
  },
});