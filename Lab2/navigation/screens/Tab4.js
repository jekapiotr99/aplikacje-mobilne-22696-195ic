import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';

export default function Tab4({ navigation }) {
    return (
        <View style={styles.container}>

            <Swipeable
                style = {styles.Swipe}
                leftContent={(
                    <View style={[styles.leftSwipeItem, { backgroundColor: 'lightskyblue' }]}>
                        <Text style = {styles.text}>Pull action</Text>
                    </View>
                )}
                rightButtons={[
                    <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'lightseagreen' }]}>
                        <Text style = {styles.text}>1</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity style={[styles.rightSwipeItem, { backgroundColor: 'orchid' }]}>
                        <Text style = {styles.text}>2</Text>
                    </TouchableOpacity>
                ]}
            >
                <View style={[styles.listItem, { backgroundColor: 'salmon' }]}>
                    <Text style = {styles.text} >Swipe 1</Text>
                </View>
            </Swipeable>
            <Swipeable
                style = {styles.Swipe}
                leftButtonWidth={45}
                leftButtons={[
                    <TouchableOpacity style={[styles.leftSwipeItem, { backgroundColor: 'papayawhip' }]}>
                        <Text style = {styles.text}>1</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity style={[styles.leftSwipeItem, { backgroundColor: 'olivedrab' }]}>
                        <Text style = {styles.text}>2</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity style={[styles.leftSwipeItem, { backgroundColor: 'mistyrose' }]}>
                        <Text style = {styles.text}>3</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity style={[styles.leftSwipeItem, { backgroundColor: 'mediumaquamarine' }]}>
                        <Text style = {styles.text}>4</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity style={[styles.leftSwipeItem, { backgroundColor: 'lightslategray' }]}>
                        <Text style = {styles.text}>5</Text>
                    </TouchableOpacity>,
                    <TouchableOpacity style={[styles.leftSwipeItem, { backgroundColor: 'ivory' }]}>
                        <Text style = {styles.text}>6</Text>
                    </TouchableOpacity>
                ]}
                rightContent={(
                    <View style={[styles.rightSwipeItem, { backgroundColor: 'linen' }]}>
                        <Text style = {styles.text}>Pull action</Text>
                    </View>
                )}
            >
                <View style={[styles.listItem, { backgroundColor: 'paleturquoise' }]}>
                    <Text style = {styles.text}>Swipe 2</Text>
                </View>
            </Swipeable>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    Swipe: {
        marginVertical: 25
    },
    leftSwipeItem: {
        height: 50,
        textAlign: 'center'
    },
    rightSwipeItem: {
        height: 50,
        textAlign: 'center'
    },
    text: {
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    }
});