import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { FontAwesome, Feather, Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
export default function FilterMyMap(props) {
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
                <TouchableOpacity style={styles._filter_buttom} onPress={() => props.navigation.navigate("SearchMap")}>
                    <Text style={styles._filer_button_text}>Map</Text>
                </TouchableOpacity>
            </View>
            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles._card_images_main}>
                        <View style={styles._filterCard1}>
                            <ImageBackground
                                source={require("./../../img/filterMap1.png")}
                                style={styles._filterCard1_bg}
                            >
                                <View style={styles._card_sale_btn_main}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles._filterCard2}>
                            <ImageBackground
                                source={require("./../../img/filterMap2.png")}
                                style={styles._filterCard1_bg}
                            >
                                <View style={styles._card_sale_btn_main}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={styles._card_images_main}>
                        <View style={styles._filterCard3}>
                            <ImageBackground
                                source={require("./../../img/filterMap3.png")}
                                style={styles._filterCard1_bg}
                            >
                                <View style={styles._card_sale_btn_main}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles._filterCard4}>
                            <ImageBackground
                                source={require("./../../img/bg2.png")}
                                style={styles._filterCard1_bg}
                            >
                                <View style={styles._card_sale_btn_main}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={styles._card_images_main}>
                        <View style={styles._filterCard31}>
                            <ImageBackground
                                source={require("./../../img/filterMap4.png")}
                                style={styles._filterCard3_bg}
                            >
                                <View style={styles._card_sale_btn_main2}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles._filterCard32}>
                            <ImageBackground
                                source={require("./../../img/filterMap5.png")}
                                style={styles._filterCard3_bg}
                            >
                                <View style={styles._card_sale_btn_main2}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles._filterCard33}>
                            <ImageBackground
                                source={require("./../../img/filterMap6.png")}
                                style={styles._filterCard3_bg}
                            >
                                <View style={styles._card_sale_btn_main2}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>

                    <View style={styles._card_images_main}>
                        <View style={styles._filterCard41}>
                            <ImageBackground
                                source={require("./../../img/filterMap7.png")}
                                style={styles._filterCard3_bg}
                            >
                                <View style={styles._card_sale_btn_main2}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles._filterCard42}>
                            <ImageBackground
                                source={require("./../../img/filterMap8.png")}
                                style={styles._filterCard3_bg}
                            >
                                <View style={styles._card_sale_btn_main2}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={styles._card_images_main}>
                        <View style={styles._filterCard41}>
                            <ImageBackground
                                source={require("./../../img/filterMap7.png")}
                                style={styles._filterCard3_bg}
                            >
                                <View style={styles._card_sale_btn_main2}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles._filterCard42}>
                            <ImageBackground
                                source={require("./../../img/filterMap8.png")}
                                style={styles._filterCard3_bg}
                            >
                                <View style={styles._card_sale_btn_main2}>
                                    <TouchableOpacity style={styles._card_sale_btn}>
                                        <Text style={styles._card_sale_btn_txt}>For Sale</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._price}>$ 1500</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                    <View style={{marginBottom:30}}></View>
                </ScrollView>
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
    _filter_main: {
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        justifyContent: "space-between",
        marginTop: 3
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
    _filterCard1_bg: {
        flex: 1,
        resizeMode: "cover",
        height: 105
    },
    _card_images_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:10
    },
    _filterCard1: {
        width: "60%"
    },
    _filterCard2: {
        width: "30%"
    },
    _main: {
        padding: 20
    },
    _card_sale_btn_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        marginTop: 70
    },
    _card_sale_btn: {
        backgroundColor: "#F7B830",
        borderRadius: 20,
        width: 50,
    },
    _card_sale_btn_txt: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 3,
        paddingTop: 3
    },
    _price: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
    _filterCard3:{
        width: "40%"
    },
    _filterCard4:{
        width: "50%"
    },
    _filterCard3_bg:{
        flex: 1,
        resizeMode: "cover",
        height: 135
    },
    _filterCard31:{
        width: "30%"
    },
    _filterCard32:{
        width: "36%"
    },
    _filterCard33:{
        width: "30%"
    },
    _card_sale_btn_main2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        marginTop: 100
    },
    _filterCard41:{
        width: "50%"
    },
    _filterCard42:{
        width: "40%"
    }
})
