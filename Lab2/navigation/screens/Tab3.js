import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Tab3({ navigation }) {
    const [Color, setColor] = React.useState(1);
    const [wv, setWW] = React.useState(0);
    const setValue = () => {
        setWW(previousState => !previousState);
    };
    const onPress = () => setColor(generateColor);
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };

    if (wv) {
        return (
            <View style={styles.container2}>
                <TouchableHighlight onPress={setValue} style = {styles.mainBack}>
                    <Text style={styles.text2}>Powrót do strony :)</Text>
                </TouchableHighlight>
                <WebView
                    source={{ uri: 'https://zacniewski.github.io' }}
                />
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <TouchableOpacity
                        style={[styles.label, { backgroundColor: Color }]}
                        onPress={onPress}
                    >
                        <Text style={styles.text}>Zmień kolor</Text>
                    </TouchableOpacity>
                </View>
                <TouchableHighlight onPress={setValue}>
                    <Text style={styles.text}>Przejdź na WebView</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    top: {
        margin: 10,
    },
    text: {
        borderColor: 'black',
        padding: 10,
        borderWidth: 2,
        width: 200,
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'

    },
    text2: {
        padding: 10,
        borderWidth: 2,
        width: 200,
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'

    },
    mainBack: {
        width: '50%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center'
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});
