import * as React from 'react';
import { ActivityIndicator, View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default function Tab3({ navigation }) {
    return (
        <View style = {styles.Main1}> 
           <ActivityIndicator style = {styles.spin} size="large" color="#0000ff" /> 
        </View>
    );
}