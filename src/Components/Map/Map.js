import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
 <MapView style={styles._map_show}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // backgroundColor: '#fff',
    // width:"50%"
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  _map_show: {
    width: "100%",
    height: "100%",
},

});