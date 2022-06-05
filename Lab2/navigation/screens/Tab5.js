import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tab5({ navigation }) {
    const [textValue, onValueChange] = React.useState("ValueBox");
    const [textKey, onKeyChange] = React.useState("@storage_key");
    const [readValue, onReadChange] = React.useState("@storage_key");
    const [readResult, setReadResult] = React.useState("");
    const onPressSave = async (textKey, textValue) => {
        try {
            await AsyncStorage.setItem(textKey, textValue)
            console.log("saved!")
        } catch (e) {
            // saving error
        }
    }
    const onPressRead = async (textKey) => {
        try {
            const value = await AsyncStorage.getItem(textKey)
            if (value !== null) {
                setReadResult(value);
                console.log("read!")
                showAlert(textKey, value);
            }
        } catch (e) {
            // error reading value
        }
    }
    const showAlert = (textKey, textValue) => {
        var textKey = "Klucz: " + String(textKey);
        var textValue = "Dane: " + String(textValue);
        Alert.alert(
            textKey,
            textValue,
            [
                {
                    text: "Zamknij",
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onValueChange}
                value={textValue}
            />
            <TextInput
                style={styles.input}
                onChangeText={onKeyChange}
                value={textKey}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onPressSave(textKey, textValue)}
            >
                <Text>Save</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                onChangeText={onReadChange}
                value={readValue}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onPressRead(readValue)}
            >
                <Text>Read</Text>
            </TouchableOpacity>

        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
});