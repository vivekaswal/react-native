import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Map from './Map';

export default class Hello extends React.Component {
    render() {
        return (
            <View  style={styles.container}>
                <Map />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    hello: {
        color: '#00FF00',
    },
	container:{
        width : 400,
        height : 500
	},

});