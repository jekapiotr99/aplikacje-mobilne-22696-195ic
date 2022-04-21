import * as React from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default function Tab3({ navigation }) {
    return (
        <View >
            <ActivityIndicator style = {styles.spin} size="small" color="black" />
        </View>
    );
}