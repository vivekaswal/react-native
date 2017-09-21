import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Map from './Map';

export default class Hello extends React.Component {
    render() {
        return (
            <View >
                <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
                <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
                <Map />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    hello: {
        color: '#00FF00',
    },
});