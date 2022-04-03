import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../styles/styles';

export default function StateScreen({ navigation }) {
    return (
        <View style={styles.main3}>
            <View style={styles.flex1}>
                <Text style={styles.Header}>Używanie hooka stanu</Text>
            </View>
            <View style={styles.flex2}>
                <Text style = {styles.Text3}> 
                    Stan inicjalizowany jest wartością 0, a następnie, kiedy użytkownik naciska przycisk,
                    inkrementujemy właściwość state.count, wywołując metodę this.setState(). W dalszej części tego
                    rozdziału będziemy posiłkować się fragmentami kodu z tego przykładu.
                </Text>
            </View>
            <View style={styles.flex3}>
                <Text style={styles.Header}>Przykład</Text>
                <Image
                    style={styles.normalImage}
                    source={require('../../assets/hook1.png')}
                />
            </View>
        </View>
    );
}