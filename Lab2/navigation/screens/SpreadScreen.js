import * as React from 'react';
import { View, Text, Header } from 'react-native';

import styles from '../../styles/styles';

export default function SpreadScreen({ navigation }) {
    return (
        <View style={styles.Main}>
            <Text style={styles.Header}>Spread syntax (...)</Text>
            <Text style={styles.Text}>
                Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
            </Text>

            <Text style={styles.Header}>Description</Text>
            <Text style={styles.Text}>
            Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.
            In the above example, the defined function takes x, y, and z as arguments and returns the sum of these values. An array value is also defined.
            When we invoke the function, we pass it all the values in the array using the spread syntax and the array name — ...numbers.
            If the array contained more than three numbers, e.g. [1, 2, 3, 4], then it would still work fine, except that all four would be passed, but only the first three would be used unless you added more arguments to the function, e.g.: 
            </Text>
        </View>
    );
}