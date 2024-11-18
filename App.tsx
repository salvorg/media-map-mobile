import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.2044, // Центр Кыргызстана
          longitude: 74.7661,
          latitudeDelta: 5, // Масштаб по широте (меньше - ближе)
          longitudeDelta: 5, // Масштаб по долготе (меньше - ближе)
        }}
        provider={undefined}
      >
        {/* Пример маркера */}
        <Marker
          coordinate={{ latitude: 42.8746, longitude: 74.5698 }} // Бишкек
          title="Бишкек"
          description="Столица Кыргызстана"
        />
        <Marker
          coordinate={{ latitude: 40.5139, longitude: 72.8161 }} // Ош
          title="Ош"
          description="Второй крупнейший город Кыргызстана"
        />
        <Marker
          coordinate={{ latitude: 40.9339, longitude: 72.9814 }} // Джалал-Абад
          title="Джалал-Абад"
          description="Административный центр области"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
