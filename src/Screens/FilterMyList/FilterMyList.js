import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { FontAwesome, Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import Map from './../../Components/Map/Map';
export default function FilterMyList(props) {
    const [userName, onChangeUserName] = React.useState("");
    return (
        <View style={styles.container}>
            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#cde0ef"
                translucent={true}
            />

            {/* <<<<<<<< INPUT >>>>>>>>> */}
            <View style={styles._input_main}>
                <FontAwesome name="search" size={24} color="#A7AAAF" />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeUserName}
                    value={userName}
                    placeholder="Adress, City, ZIP"
                    color="#A7AAAF"
                />
            </View>
            <View style={styles._filter_main}>
                <TouchableOpacity style={styles._filter_buttom}>
                    <FontAwesome name="filter" size={20} color="#F6A800" />
                    <Text style={styles._filer_button_text}>Filter</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._filter_buttom} onPress={() => props.navigation.navigate("FilterMyMap")}>
                    <Text style={styles._filer_button_text}>List</Text>
                </TouchableOpacity>
            </View>
            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles._map_main}>
                        <Map />
                    </View>
                </ScrollView>
            </View>
            <View style={styles._custom_tab}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                    <Feather name="home" size={20} color="#6E6F8B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("FilterMyList")}>
                    <Text style={styles._search_tab}>Searhing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("SearchMap")}>
                    <Feather name="search" size={20} color="#6E6F8B" />
                    <Text style={styles._map_search_tab_heading}>Map Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("Message")}>
                    <Ionicons name="chatbubble-outline" size={20} color="#6E6F8B" />
                    <Text style={styles._map_search_tab_heading}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("Home")}>
                    <AntDesign name="hearto" size={20} color="#6E6F8B" />
                    <Text style={styles._map_search_tab_heading}>Liked</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._tabs} onPress={() => props.navigation.navigate("Setting")}>
                    <Entypo name="dots-three-horizontal" size={20} color="#6E6F8B" />
                    <Text style={styles._map_search_tab_heading}>More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cde0ef',
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
    _map_main: {
        width: "100%",
        height: 800,
    },
    _filter_main: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        justifyContent: "space-between",
        marginTop:3
    },
    _filter_buttom: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        alignSelf: "center",
        width: "30%",
        justifyContent: "center",
        padding: 5
    },
    _filer_button_text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 5
    },
    _custom_tab: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 10,
        width: "90%",
        borderRadius: 50,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    _search_tab: {
        color: "#6E6F8B",
        fontSize: 16,
        fontWeight: "bold",

    },
    _map_search_tab_heading: {
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    _tabs: {
        justifyContent: "center",
        alignItems: "center",
    }
})
