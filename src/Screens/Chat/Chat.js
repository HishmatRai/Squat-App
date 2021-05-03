import React from "react";
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
export default function Message(props) {
    const [userName, onChangeUserName] = React.useState("");
    const [active, setActive] = useState(0);
    return (
        <View style={styles.container}>
            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#c4e1f1"
                translucent={true}
            />
            <View style={styles._header}>
                <TouchableOpacity style={styles._back_button} onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles._heading}>Message Details</Text>
                <Text></Text>
            </View>

            <View style={styles._sub_header_main}>
                <View>
                    <Text style={styles._user_name}>Parsley Montana</Text>
                    <Text style={styles._user_title}>San Francisco</Text>
                </View>
                <Image source={require('./../../img/messageProfile.jpg')} style={styles._profile_images} />
            </View>
            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <View style={styles._show_messsags_main}>
                        <View style={styles._receive_message_main}>
                            <Text style={styles._receive_message}>Morbi ullamcorper quis est et.</Text>
                        </View>
                        <View style={styles._send_message_main}>
                            <Text style={styles._send_message}>Integer quis eros quis et, vestibulum lobortis tortor, eleifend eleifend arcu.</Text>
                        </View>
                        <View style={styles._receive_message_main}>
                            <Text style={styles._receive_message}>In a nulla fermentum.</Text>
                        </View>
                        <View style={styles._receive_message_main}>
                            <Text style={styles._receive_message}>Pellentesque a lectus nulla, dapibus luctus arcu nec.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            {/* <<<<<<<< TYPE MESSAGE >>>>>>>>> */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ marginBottom: 0 }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles._type_message_main}>
                        <TouchableOpacity>
                            <Ionicons name="ios-camera-outline" size={24} color="#AEB5C0" />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeUserName}
                            value={userName}
                            placeholder="Type a Message"
                            color="#C1C0C8"
                        />
                        <TouchableOpacity>
                            <Ionicons name="send" size={24} color="#4EA7DA" />
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#c4e1f1",
    },
    _heading: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 1,
        color: "white",
    },
    _header: {
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    _back_button: {
        backgroundColor: "white",
        width: 30,
        height: 30,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    _sub_header_main: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom:20
    },
    _user_name: {
        color: "white",
        letterSpacing: 1,
        fontSize: 16,
        fontWeight: "bold"
    },
    _type_message_main: {
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    input: {
        color: "#C1C0C8",
        width: "70%",
        fontSize: 14,
        fontWeight: "bold"
    },
    _main: {
        flex: 1,
    },
    _user_title: {
        fontSize: 14,
        color: "white",
        letterSpacing: 1
    },
    _profile_images: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    _receive_message_main: {
        backgroundColor: "#4EA7DA",
        borderRadius: 12,
        width: "80%",
        padding: 20,
        marginTop: 20
    },
    _show_messsags_main: {
        margin: 20,
    },
    _receive_message: {
        color: "white",
        fontSize: 14,
        letterSpacing: 0.5,
        lineHeight:20
    },
    _send_message_main: {
        backgroundColor: "white",
        width: "80%",
        alignSelf: "flex-end",
        marginTop: 20,
        borderRadius: 12,
        padding: 20,
    },
    _send_message: {
        color: "#77838F",
        fontSize: 14,
        letterSpacing: 0.5,
        lineHeight:20
    }
});
