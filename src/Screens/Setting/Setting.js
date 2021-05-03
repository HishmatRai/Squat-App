import React from "react";
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome, SimpleLineIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { useState } from "react";
export default function Setting(props) {
    const [userName, onChangeUserName] = React.useState("");
    const [active, setActive] = useState(0);
    return (
        <View style={styles.container}>
            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#cde0ef"
                translucent={true}
            />
            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles._setting_main}>
                        <TouchableOpacity style={styles._setting}>
                            <Feather name="clock" size={24} color="white" />
                            <Text style={styles._setting_heading}>Recently Viewed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._setting}>
                            <FontAwesome name="user-circle" size={24} color="white" />
                            <Text style={styles._setting_heading}>Find Agent</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._setting}>
                            <SimpleLineIcons name="calculator" size={24} color="white" />
                            <Text style={styles._setting_heading}>Payment Calculator</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._setting}  onPress={() => props.navigation.navigate("Login")}>
                            <FontAwesome5 name="user-alt" size={24} color="white" />
                            <Text style={styles._setting_heading}>Sign in / Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._setting}>
                            <AntDesign name="setting" size={24} color="white" />
                            <Text style={styles._setting_heading}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginBottom: 10 }}></View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#cde0ef",
    },
    _main: {
        marginLeft: 20,
        marginRight: 20
    },
    _setting_main: {
        marginTop: 80
    },
    _setting: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    _setting_heading: {
        color: "white",
        fontSize: 20,
        marginLeft: 10
    }
});
