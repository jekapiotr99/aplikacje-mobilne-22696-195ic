import * as React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
} from 'react-native';

export default function Tab1({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    const [text2, onChangeText2] = React.useState("Useless Text 2");
    const [text3, onChangeText3] = React.useState("Useless Text 3");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View>
            <SafeAreaView>
                <Text style={styles.text}>
                    Domyślny TextInput
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text style={styles.text}>
                    TextInput Numeryczny + Placeholder
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>
                    TextInput - Duże litery
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText2}
                    value={text2}
                    autoCapitalize="characters"
                />
                <Text style={styles.text}>
                    TextInput - Clear Text on Focus
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText3}
                    value={text3}
                    clearTextOnFocus="true"
                />
                <Text style={styles.text}>
                    Kolorowy placeholder
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder = "Placeholder"
                    placeholderTextColor='rgb(255, 0, 255)'
                />
            </SafeAreaView>
        </View>
    );
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,
        paddingTop: 0,
        paddingRight: 10
    },
    text: {
        paddingLeft: 10,
        paddingTop: 10
    }
});
