import React, { useState } from 'react'
import { View, Button, Platform, Alert, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Tab4({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const showSelectedDate = () => {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        Alert.alert(
            "Czas:  " + date.toLocaleTimeString() + "\nDzień: " + date.toDateString()
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topItem}><Button onPress={showDatepicker} title="Dzień" /></View>
                <View style={styles.topItem}><Button onPress={showTimepicker} title="Godzina" /></View>  
            </View>
            <View style={styles.topItem}>
                <Button onPress={showSelectedDate} title="Pokaż datę" />
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "center"

    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    topItem: {
        margin: 10,
        width: 100
    }
});