import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NetInfo from "@react-native-community/netinfo";

export default function Tab4({ navigation }) {
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
            <Text>Połączenie istnieje: {String(con)}</Text>
            <Text>Typ: {conType}</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});