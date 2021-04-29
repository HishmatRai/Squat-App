import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Tabs from './../../Components/Tabs/Tabs';
export default function Home() {
    const [userName, onChangeUserName] = React.useState("");
    return (
        <View style={styles.container}>
            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#CDE0EF"
                translucent={true}
            />

            {/* <<<<<<<< INPUT >>>>>>>>> */}
            <View style={styles._input_main}>
                <FontAwesome name="search" size={24} color="#A7AAAF" />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUserName}
                    value={userName}
                    placeholder="Search"
                    color="#A7AAAF"
                />
            </View>
            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Tabs />
                    <View style={{marginBottom:150}}></View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDE0EF',
    },
    _input_main: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        marginTop: 10
        , backgroundColor: "white",
        paddingLeft: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 50,
        marginBottom: 20
    },
    input: {
        width: "85%",
        marginLeft: 10,
        color: "#A7AAAF",
        fontSize: 20,
        letterSpacing: 0.5,
        fontWeight: 'bold',
    },
})
