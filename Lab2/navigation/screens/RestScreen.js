import * as React from 'react';
import { ScrollView, Text, Image } from 'react-native';

import styles from '../../styles/styles';

export default function RestScreen({ navigation }) {
    return (
        <ScrollView style={styles.Main2}>
            <Text style={styles.Header}>Rest parameters</Text>
            
            <Text style={styles.Header}>How to use</Text>
            <Image
                style ={styles.medImg}
                source={require('../../assets/main.png')}
            />
            <Text style={styles.Header2}>Wrong Way:</Text>
            <Image
                style ={styles.smallImg}
                source={require('../../assets/wrong1.png')}
            />
            <Image
                style ={styles.smallImg}
                source={require('../../assets/wrong2.png')}
            />
            <Text style={styles.Header2}>Correct Way:</Text>
            <Image
                style ={styles.smallImgLast}
                source={require('../../assets/correct.png')}
            />
        </ScrollView>
    );
}