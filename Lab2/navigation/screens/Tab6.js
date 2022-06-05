import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import Icon from 'react-native-vector-icons/Feather';

export default function Tab6({ navigation }) {
    const [con, setCon] = React.useState(true);
    const [conType, setType] = React.useState(" ");

    NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        setType(state.type);
        setCon(state.isConnected);
    });

    return (
        <View style={styles.container}>
            <Icon
                name={con ? `smile` : `meh`}
                backgroundColor="transparent"
                color={con ? `green` : `red`}
                size={60}
            />
            <Text style = {[styles.text2, {color: con ? `green`: `red`}]}>{con ? `Połączono z internetem!` : `Brak połączenia z internetem!`}</Text>
        </View>
    )
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
    },
    text2: {
        fontSize: 25
    }
});