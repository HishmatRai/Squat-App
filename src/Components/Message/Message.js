import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
export default function Message() {
    let chatCard = [
        { profile: require('./../../img/messageProfile.jpg'), userName: "Quiche Hollandaise", userMessage: "Quisque blandit arcu quis turpis tincidunt facilisis…", time: "15 min", unRead: "1", active: true, unreadShow: true,color:"#77838F" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Jake Weary", userMessage: "Sed ligula erat, dignissim sit at amet dictum id, iaculis… ", time: "32 min", unRead: "3", active: true, unreadShow: true,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Ingredia Nutrisha", userMessage: "Duis eget nibh tincidunt odio id venenatis ornare quis…", time: "1 hour", unRead: "1", active: true, unreadShow: false ,color:"white"},
        { profile: require('./../../img/messageProfile.jpg'), userName: "Piff Jenkins", userMessage: "Curabitur elementum orci vitae turpis vulputate…", time: "5 hour", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Mon", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Tue", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Mon", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Mon", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Mon", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Mon", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Mon", unRead: "1", active: false, unreadShow: false,color:"white" },
        { profile: require('./../../img/messageProfile.jpg'), userName: "Nathaneal Down", userMessage: "Donec ut lorem tristique dui sit faucibus tincidunt….", time: "Mon", unRead: "1", active: false, unreadShow: false,color:"white" },
    ]
    return (
        <View style={styles.container}>
            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {chatCard.map((v, i) => {
                        return (
                            <TouchableOpacity style={styles._chat_main}>
                                <View style={styles._profile_main}>
                                    <Image source={v.profile} style={styles._profile_images} />
                                    {v.active ?
                                        <View style={styles._active}></View> : null
                                    }
                                </View>
                                <View style={styles._chat_show_main}>
                                    <Text style={styles._user_name}>{v.userName}</Text>
                                    <Text style={styles._user_message}>{v.userMessage}</Text>
                                </View>
                                <View style={styles._unread_show_main}>
                                    <Text style={[styles._time,{color:v.color}]}>{v.time}</Text>
                                    {v.unreadShow ?
                                        <View style={styles._unread_view}>
                                            <Text style={styles._unread}>{v.unRead}</Text>
                                        </View> : null
                                    }
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4e1f1',
    },
    _main: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30
    },
    _chat_main: {
        flexDirection: "row",
        marginTop: 20,
    },
    _profile_main: {
        width: "20%"
    },
    _chat_show_main: {
        width: "60%"
    },
    _unread_show_main: {
        width: "20%",
    },
    _profile_images: {
        width: 55,
        height: 55,
        borderRadius: 55 / 2
    },
    _user_name: {
        fontSize: 15,
        color: "white",
        letterSpacing: 1,
        fontWeight: "bold"
    },
    _user_message: {
        color: "white",
        fontSize: 12,
        letterSpacing: 1,
        marginTop: 5
    },
    _time: {
        fontSize: 12,
        letterSpacing: 1,
        alignSelf: "center"
    },
    _unread: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    _unread_view: {
        width: 25,
        height: 25,
        backgroundColor: "#4EA7DA",
        borderRadius: 25 / 2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10
    },
    _active: {
        backgroundColor: "#80EA4E",
        width: 18,
        height: 18,
        borderRadius: 18 / 2,
        alignSelf: "flex-end",
        marginTop: -20,
        marginRight: 5,
        borderColor: "white",
        borderWidth: 3
    }

})
