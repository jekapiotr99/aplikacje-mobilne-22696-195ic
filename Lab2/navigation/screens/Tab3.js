import * as React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Tab3({ navigation }) {
    var size = 37;
    return (
        <View style = {styles.container}>
            <Image
                source={require('../../assets/indeks.jpg')}
                style={{ width: 400, height: 400 }}
                PlaceholderContent={<ActivityIndicator />}
            />
            <View style = {styles.box1}>
                <Icon.Button
                    name="facebook"
                    backgroundColor="transparent"
                    color = "blue"
                    size = {size}
                />
                <Icon.Button
                    name="google"
                    backgroundColor="transparent"
                    color = "red"
                    size = {size}
                />
                <Icon.Button
                    name="twitter"
                    backgroundColor="transparent"
                    color = "rgb(0, 172, 238)"
                    size = {size}
                />
                <Icon.Button
                    name="dropbox"
                    backgroundColor="transparent"
                    color = "rgb(24, 123, 205)"
                    size = {size}
                />
                <Icon.Button
                    name="gitlab"
                    backgroundColor="transparent"
                    color = "orange"
                    size = {size}
                />
                <Icon.Button
                    name="skype"
                    backgroundColor="transparent"
                    color = "rgb(0, 172, 238)"
                    size = {size}
                />
                <Icon.Button
                    name="youtube"
                    backgroundColor="transparent"
                    color = "red"
                    size = {size}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 300,
        height: 300,
    },
    box1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    }
});
