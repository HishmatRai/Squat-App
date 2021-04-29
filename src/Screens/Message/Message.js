import React from 'react';
import { StyleSheet, View, StatusBar, ScrollView, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Tabs from './../../Components/Tabs/Tabs';
export default function Message() {
    const [userName, onChangeUserName] = React.useState("");
    return (
        <View style={styles.container}>
            {/* <<<<<<<< StatusBar >>>>>>>>> */}
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor="#c4e1f1"
                translucent={true}
            />
<Text style={styles._heading}>Messages</Text>
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
        backgroundColor: '#c4e1f1',
    },
    _heading:{
        marginTop:50,
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold",
        letterSpacing:3,
        color:"white",
        marginBottom:10
    }
})
