import * as React from 'react';
import { View, Image, StyleSheet, useState } from 'react-native';
import Slider from '@react-native-community/slider';

export default function Tab2({ navigation }) {
    const [scale, setScale] = React.useState(1);
    const onPress = (value) => setScale(value)
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={[styles.img, {width: 430 * scale, height: 520 * scale}]}
                    source={require('../../assets/apple.png')}
                />
            </View>
            <Slider
                style={{ width: 415, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={onPress}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 430,
        height: 520,
    },
});