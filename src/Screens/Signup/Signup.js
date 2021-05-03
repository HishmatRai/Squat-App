import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign, FontAwesome,Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Signup(props) {
    const [userName, onChangeUserName] = React.useState("");
    const [gmial, onChangeGmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [reEnterpassword, onChangeReEnterPassword] = React.useState("");
    const [remember, setRemember] = useState(true);
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
                    <Text style={styles._heading}>Sign Up</Text>

                    {/* <<<<<<<< INPUT >>>>>>>>> */}
                    <View style={styles._input_main}>
                    <Entypo name="email" size={24} color="#1BB1D1" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeUserName}
                            value={userName}
                            placeholder="Username"
                            color="#ABB3BB"
                        />
                    </View>
                    <View style={styles._input_main}>
                        <MaterialCommunityIcons name="email" size={24} color="#1BB1D1" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeGmail}
                            value={gmial}
                            placeholder="Gmail"
                            color="#ABB3BB"
                        />
                    </View>
                    <View style={styles._input_main}>
                        <MaterialIcons name="lock" size={24} color="#1BB1D1" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            color="#ABB3BB"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={styles._input_main}>
                        <MaterialIcons name="lock" size={24} color="#1BB1D1" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeReEnterPassword}
                            value={reEnterpassword}
                            placeholder="Confirm Password"
                            color="#ABB3BB"
                            secureTextEntry={true}
                        />
                    </View>
          
                    {/* <<<<<<<< SIGN IN BUTTON >>>>>>>>> */}
                    <TouchableOpacity style={styles._sigin_button} onPress={() => props.navigation.navigate("WhatWouldYouLike")}>
                        <LinearGradient
                            end={[1.0, 0.5]}
                            start={[0.0, 0.5]}
                            locations={[0.0, 1.0]}
                            colors={['#2945FF', '#5E73FF']}
                            style={{ alignItems: 'center', borderRadius: 10 }}>
                            <Text style={styles._sigin_button_text}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* <<<<<<<< SIGN UP >>>>>>>>> */}
                    <View style={styles._sigup_main}>
                        <Text style={styles._signup_des}>Have an Account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={styles._signup_button_text}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
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
        color: "#1BB1D1",
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10
    },
    _input_main: {
        borderWidth: 1,
        borderColor: "#1BB1D1",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        marginTop: 20
    },
    input: {
        width: "85%",
        marginLeft: 10,
        color: "#ABB3BB",
        fontSize: 14,
        letterSpacing: 0.5
    },
    _sigin_button: {
        marginTop: 30,
    },
    _sigin_button_text: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 15,
        color: "white",
        letterSpacing: 0.5,
        fontWeight: 'bold'
    },
    _sigup_main: {
        marginTop: 20,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center"
    },
    _signup_des: {
        fontSize: 14,
        letterSpacing: 0.5,
        color: "#092C4C"
    },
    _signup_button_text: {
        color: "#006aff",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5
    }
});
