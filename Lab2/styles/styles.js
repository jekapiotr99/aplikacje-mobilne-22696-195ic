import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
    body: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    Main: {
        display: 'flex',
        flexDirection: 'column',
        ...Platform.select({
            ios: {
                padding: 20,
            },
            android: {
                padding: 20,
            },
            default: {
                width: '40%',
                paddingTop: 100,
                marginLeft: '30%',
                alignItems: 'center',
                justifyContnet: 'center'
            }
        }),
    },
    Main2: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        ...Platform.select({
            ios: {
                padding: 20,
            },
            android: {
                padding: 20,
            },
            default: {
                width: '40%',
                paddingTop: 100,
                marginLeft: '30%',
                alignItems: 'center',
                justifyContnet: 'center'
            }
        }),
    },
    Header: {
        ...Platform.select({
            ios: {
                fontSize: 30,
                marginBottom: 20,
            },
            android: {
                fontSize: 30,
                marginBottom: 20,
            },
            default: {
                fontSize: 40,
                marginBottom: 50,
            }
        }),
        fontWeight: "bold",
        marginTop: 20,
    },
    Header2: {
        ...Platform.select({
            ios: {
                fontSize: 20,
                marginBottom: 20,
            },
            android: {
                fontSize: 20,
                marginBottom: 20,
            },
            default: {
                fontSize: 30,
                marginBottom: 50,
            }
        }),
        fontWeight: "bold",
        marginTop: 20,
    },
    Text: {
        ...Platform.select({
            ios: {
                fontSize: 15,
                marginBottom: 20,
            },
            android: {
                fontSize: 15,
                marginBottom: 20,
            },
            default: {
                fontSize: 20,
                marginBottom: 50,
            }
        }),
        textAlign: 'justify',
    },
    Text2: {
        flex: 1,
        alignItems: 'flex-start',
        ...Platform.select({
            ios: {
                fontSize: 15,
                marginBottom: 20,
            },
            android: {
                fontSize: 15,
                marginBottom: 20,
            },
            default: {
                fontSize: 20,
                marginBottom: 50,
            }
        }),
    },
    Text3: {
        flex: 1,
        margin: 7,
        alignItems: 'flex-start',
        ...Platform.select({
            ios: {
                fontSize: 17,
                marginBottom: 20,
            },
            android: {
                fontSize: 17,
                marginBottom: 20,
            },
            default: {
                fontSize: 20,
                marginBottom: 50,
            }
        }),
        textAlign: 'justify'
    },
    medImg: {
       width: 370,
       height: 200
    },
    smallImg: {
        width: 185,
        height: 30,  
    },
    smallImgLast: {
        width: 185,
        height: 30,  
        marginBottom: 100,
    },
    main3: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    flex1: {
        flex: 1,
        backgroundColor: 'white'
    },
    flex2: {
        flex: 2,
        fontSize: 15,
    },
    flex3: {
        flex: 5,
    },
    normalImage: {
        height: '80%',
        width: '100%',

    }
})