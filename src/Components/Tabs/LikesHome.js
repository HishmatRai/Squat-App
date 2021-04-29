import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { Ionicons, Foundation } from '@expo/vector-icons';
export default function LikesHome() {
    let CardData = [
        { homeImage1: require('./../../img/likeshome1.png'), homeImage1Heading: "Home Location", likes1: "5.2 K", homeImage2: require('./../../img/likeshome2.png'), homeImage2Heading: "Home Location", likes2: "2.2 K" },
        { homeImage1: require('./../../img/likeshome3.png'), homeImage1Heading: "Home Location", likes1: "5.2 K", homeImage2: require('./../../img/likeshome4.png'), homeImage2Heading: "Home Location", likes2: "2.2 K" },
        { homeImage1: require('./../../img/likeshome5.png'), homeImage1Heading: "Home Location", likes1: "5.2 K", homeImage2: require('./../../img/likeshome6.png'), homeImage2Heading: "Home Location", likes2: "2.2 K" },
    ]
    return (
        <View style={styles.container}>
            {/* <<<<<<<< MAIN >>>>>>>>> */}
            <View style={styles._main}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <<<<<<<< CARD MAIN >>>>>>>>> */}
                    {CardData.map((v, i) => {
                        return (
                            <View style={styles._card_main}>
                                <View style={styles._card}>
                                    <Image source={v.homeImage1} style={styles._home_images} />
                                    <View style={styles._home_location_main}>
                                        <Ionicons name="location-sharp" size={18} color="white" />
                                        <Text style={styles._home_location_heading}>{v.homeImage1Heading}</Text>
                                    </View>
                                    <View style={styles._home_likes_main}>
                                        <Foundation name="heart" size={18} color="white" />
                                        <Text style={styles._home_location_heading}>{v.likes1}</Text>
                                        <Text style={styles._home_location_heading}>Likes</Text>
                                    </View>
                                </View>
                                <View style={styles._card}>
                                    <Image source={v.homeImage2} style={styles._home_images} />
                                    <View style={styles._home_location_main}>
                                        <Ionicons name="location-sharp" size={18} color="white" />
                                        <Text style={styles._home_location_heading}>{v.homeImage2Heading}</Text>
                                    </View>
                                    <View style={styles._home_likes_main}>
                                        <Foundation name="heart" size={18} color="white" />
                                        <Text style={styles._home_location_heading}>{v.likes2}</Text>
                                        <Text style={styles._home_location_heading}>Likes</Text>
                                    </View>
                                </View>
                            </View>
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
        backgroundColor: '#CDE0EF',
    },
    _main: {
        margin: 20,
    },
    _card_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop:20
    },
    _card: {
        width: 147,
        borderRadius: 10,
    },
    _home_images: {
        width: 147,
        height: 147,
        borderRadius: 10
    },
    _home_location_main: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        width: 140,
        alignSelf: "center"
    },
    _home_location_heading: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        letterSpacing: 0.5,
        marginLeft: 5
    },
    _home_likes_main: {
        flexDirection: "row",
        alignItems: "center",
        width: 140,
        alignSelf: "center"
    }

})
