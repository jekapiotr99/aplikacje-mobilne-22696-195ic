import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
    body: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    Main1: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
    },

    loadContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign: 'center',
    },
    loadEx: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 8,
        fontSize: 24,
    },
    spin: {
        marginTop: 300,
    }
})