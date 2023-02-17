import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const { height, width } = Dimensions.get('window');


export default function Maps() {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

    const onRegionChange = ({region}) => {
        setRegion(region);
    };

    const [marker, setMarker] = useState({
        latitude: 37.8270, 
        longitude:-122.4230, 
    })

    const handleOnPress = () => {
        setMarker({
            latitude: marker.latitude + 0.01,
            longitude: marker.longitude + 0.01
        })
    }
    return (
        <View>
        <MapView
        initialRegion={region}
        style={styles.map}
        onRegionChange={onRegionChange}>
            <Marker 
                draggable
                coordinate={marker}
                onDragEnd={(e) => setMarker(e.nativeEvent.coordinate) }
                title="My marker"
            />

        </MapView>
        <Button style={styles.button} title="hello" onPress={handleOnPress}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    map: {
        width: width,
        height: .8*height,
    },
    button: {
        bottom: height,
        top: '50%',
        backgroundColor: '#000000',
        width: 100,
    }
  });
