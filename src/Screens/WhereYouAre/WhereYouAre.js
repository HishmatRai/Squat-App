import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
export default function WhereYouAre() {
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
                    <Text style={styles._heading}>Where you are?</Text>

                    {/* <<<<<<<< SEARCH BUTTON >>>>>>>>> */}
                    <TouchableOpacity style={styles._search_button}>
                        <Text style={styles._search_button_text}>Search Location</Text>
                    </TouchableOpacity>
                    <Text style={styles._or}>OR</Text>
                    <TouchableOpacity style={styles._current_location_button}>
                        <Text style={styles._search_button_text}>Use current  location</Text>
                    </TouchableOpacity>
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

    _go_button: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: "#B7E0F6",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 80,
        alignSelf: "flex-end"
    },
    _search_button: {
        backgroundColor: "#B7E0F6",
        borderRadius: 10,
        width: "70%",
        alignSelf: "center",
        marginTop: 50
    },
    _search_button_text: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 7,
        paddingBottom: 10,
        letterSpacing: 0.5

    },
    _or: {
        color: "#C4C4C4",
        fontSize: 23,
        textAlign: "center",
        marginTop: 20
    },
    _current_location_button: {
        backgroundColor: "#B7E0F6",
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        marginTop: 30
    }
})
