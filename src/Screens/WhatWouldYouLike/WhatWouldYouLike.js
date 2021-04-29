import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import {  Entypo } from '@expo/vector-icons';
export default function WhatWouldYouLike() {
    return (
        <View style={styles.container}>
            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#b7e0f6"
                translucent={true}
            />
            <Text style={styles._app_name}>SQUAT</Text>

            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles._heading}>What would you Like to Do?</Text>

                    {/* <<<<<<<< BUTTONS >>>>>>>>> */}
                    <View style={styles._buttons_main}>
                        <TouchableOpacity style={styles._buttons}>
                            <Text style={styles._buttons_text}>Buy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._buttons}>
                            <Text style={styles._buttons_text}>Rent</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles._buttons_main}>
                        <TouchableOpacity style={styles._buttons}>
                            <Text style={styles._buttons_text}>Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._buttons}>
                            <Text style={styles._buttons_text}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles._buttons_main}>
                        <TouchableOpacity style={styles._buttons}>
                            <Text style={styles._buttons_text}>Explore</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<< GO >>>>>>>>> */}
                    <TouchableOpacity style={styles._go_button}>
                        <Entypo name="chevron-thin-right" size={44} color="white" />
                    </TouchableOpacity>
                    <View style={{ marginBottom: 20 }}></View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B7E0F6',
    },
    _app_name: {
        color: "#F6A800",
        marginTop: 100,
        textAlign: "center",
        fontSize: 40,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    _main: {
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 50,
        paddingTop: 20,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 8
    },
    _heading: {
        color: "#000000",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20
    },
    _buttons_main: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _buttons: {
        width: "40%",
        backgroundColor: "#B7E0F6",
        borderRadius: 10
    },
    _buttons_text: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 5,
        marginBottom: 8,
        color: "white",
        fontWeight:'bold',
        letterSpacing:0.5
    },
    _go_button: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: "#B7E0F6",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
        alignSelf: "flex-end"
    }
});
