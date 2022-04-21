import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

import styles from '../../styles/styles';

export default function Tab1({ navigation }) {
    const [value, setValue] = useState()
    const [TextFieldValue, setText] = useState()
    const arr = [];

    let text;

    const sorting = () => {
        text = value;
        text = text.split(", ")
        setValue((text.sort(function (a, b) { return a - b }).join(", ")))
    }
    const generating = () => {
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor(Math.random() * 1000) + 1);
        }
        setValue(arr.join(", "))
    }
    const filtering = () => {
        text = value;
        text = text.split(", ")
        if (TextFieldValue != "")
            var predicate = parseInt(TextFieldValue);
        else
            var predicate = 100;

        var newArray = new Array();
        text.forEach(function (number) {
            if (number > predicate) {
                newArray.push(number);
            }
        });

        setValue(newArray.join(", "))
    }


    return (
        <View>
            <View style={styles.Main1}>
                <Button
                    style={styles.Buttons}
                    title="generate numbers"
                    color='lime'
                    onPress={generating}
                />
                <Button
                    style={styles.Buttons}
                    title="sort numbers"
                    color='red'
                    onPress={sorting}
                />
                <Button
                    style={styles.Buttons}
                    title="filter numbers"
                    onPress={filtering}
                />
            </View>
            <TextInput
                backgroundColor='white'
                color="black"
                keyboardType='numeric'
                onChangeText={text => setText(text)}
                defaultValue = '100'
            />
            <Text>{value}</Text>
        </View>
    );
}