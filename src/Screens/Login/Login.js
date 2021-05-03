import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Login(props) {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [eyeIcon, setEyeIcon] = useState(true);
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
                    <Text style={styles._heading}>Welcome Back</Text>
                    <Text style={styles._sub_heading}>Sign in for continue</Text>

                    {/* <<<<<<<< INPUT >>>>>>>>> */}
                    <View style={styles._input_main}>
                        <MaterialCommunityIcons name="email" size={24} color="#1BB1D1" />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Enter your email"
                            color="#ABB3BB"
                        />
                    </View>
                    <View style={styles._input_main}>
                        <MaterialIcons name="lock" size={24} color="#1BB1D1" />
                        <TextInput
                            style={styles.input_pass}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            color="#ABB3BB"
                            secureTextEntry={eyeIcon}
                        />
                        {eyeIcon ? (
                            <Ionicons
                                name="eye-off"
                                size={24}
                                color="#ABB3BB"
                                onPress={() => setEyeIcon(!eyeIcon)}
                            />
                        ) : (
                            <Ionicons
                                name="eye"
                                size={24}
                                color="#ABB3BB"
                                onPress={() => setEyeIcon(!eyeIcon)}
                            />
                        )}
                    </View>

                    {/* <<<<<<<< REMEMBER FORGOT PASSWORD >>>>>>>>> */}
                    <View style={styles._forgot_remember_main}>
                        <View style={styles._remember_main}>
                            {remember ? (
                                <MaterialIcons name="check-box-outline-blank" size={24} color="#D0D0D0" onPress={() => setRemember(!remember)} />
                            ) : (
                                <MaterialIcons name="check-box" size={24} color="#D0D0D0" onPress={() => setRemember(!remember)} />
                            )}
                            <Text style={styles._remember_text}>Remember me</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles._forgot_pass_btn_text}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<< SIGN IN BUTTON >>>>>>>>> */}
                    <TouchableOpacity style={styles._sigin_button} onPress={() => props.navigation.navigate("Home")}>
                        <LinearGradient
                            end={[1.0, 0.5]}
                            start={[0.0, 0.5]}
                            locations={[0.0, 1.0]}
                            colors={['#2945FF', '#5E73FF']}
                            style={{ alignItems: 'center', borderRadius: 10 }}>
                            <Text style={styles._sigin_button_text}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* <<<<<<<< SELECT SOCIAL LOGIN >>>>>>>>> */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 300, marginTop: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#E1E1E1' }} />
                        <View>
                            <Text style={{ width: 130, textAlign: 'center', color: "#ABB3BB", fontSize: 12, letterSpacing: 0.5 }}>Or Continue with </Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#E1E1E1' }} />
                    </View>

                    {/* <<<<<<<< SOCIAL LOGIN MAIN >>>>>>>>> */}
                    <View style={styles._social_login_main}>
                        <TouchableOpacity style={styles._google_button}>
                            <LinearGradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#FC6A57', '#FF7A69']}
                                style={{ alignItems: 'center', borderRadius: 5, flexDirection: "row", alignItems: "center", alignSelf: "center", width: 150, justifyContent: "center", paddingBottom: 10, paddingTop: 10 }}>
                                <AntDesign name="google" size={18} color="white" />
                                <Text style={styles._google_button_text}>Google</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._facebook_button}>
                            <LinearGradient
                                end={[1.0, 0.5]}
                                start={[0.0, 0.5]}
                                locations={[0.0, 1.0]}
                                colors={['#298FFF', '#0778F5']}
                                style={{ alignItems: 'center', borderRadius: 5, flexDirection: "row", alignItems: "center", alignSelf: "center", width: 150, justifyContent: "center", paddingBottom: 10, paddingTop: 10 }}>
                                <FontAwesome name="facebook-f" size={18} color="white" />
                                <Text style={styles._facebook_button_text}>Facebook</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    {/* <<<<<<<< SIGN UP >>>>>>>>> */}
                    <View style={styles._sigup_main}>
                        <Text style={styles._signup_des}> Don’t Have an Account?</Text>
                        <TouchableOpacity  onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={styles._signup_button_text}>Sign Up</Text>
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
        textAlign: "center",
        fontWeight: 'bold'
    },
    _sub_heading: {
        textAlign: "center",
        color: "gray",
        fontSize: 16,
        letterSpacing: 0.5,
        marginTop: 10,
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
    input_pass: {
        width: "80%",
        marginLeft: 10,
        color: "#ABB3BB",
        fontSize: 14,
        letterSpacing: 0.5
    },
    _forgot_remember_main: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _remember_main: {
        flexDirection: "row",
        alignItems: "center"
    },
    _remember_text: {
        fontSize: 12,
        color: "#ABB3BB",
        letterSpacing: 0.5,
        marginLeft: 10
    },
    _forgot_pass_btn_text: {
        color: "#1BB1D1",
        fontSize: 12,
        letterSpacing: 0.5,
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
    _social_login_main: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _google_button: {
        width: 150,
    },
    _facebook_button: {
        width: 150,
    },
    _google_button_text: {
        fontSize: 12,
        color: "white",
        letterSpacing: 0.5,
        marginLeft: 10
    },
    _facebook_button_text: {
        fontSize: 12,
        color: "white",
        letterSpacing: 0.5,
        marginLeft: 10
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
