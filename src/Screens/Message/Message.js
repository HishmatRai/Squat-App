import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MessageScreen from "./../../Components/Message/Message";
import Groups from "./../../Components/Groups/Groups";
import { useState } from "react";
export default function Message() {
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
      <Text style={styles._heading}>Messages</Text>
      {/* <<<<<<<< MAIN >>>>>>>>> */}
      <View style={styles._main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles._custom_tab}>
            {active === 0 ? (
              <TouchableOpacity
                style={[styles._message_tab, { elevation: 5 }]}
                onPress={() => setActive(0)}
              >
                <Text
                  style={{
                    color: "#4EA7DA",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                  }}
                >
                  Messages
                </Text>
                <Text
                  style={{
                    color: "#4EA7DA",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                    marginLeft: 5,
                  }}
                >
                  (2)
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles._message_tab}
                onPress={() => setActive(0)}
              >
                <Text
                  style={{
                    color: "#4EA7DA",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                  }}
                >
                  Messages
                </Text>
                <Text
                  style={{
                    color: "#4EA7DA",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                    marginLeft: 5,
                  }}
                >
                  (2)
                </Text>
              </TouchableOpacity>
            )}
            {active === 1 ? (
              <TouchableOpacity
                style={[styles._group_tab, { elevation: 5 }]}
                onPress={() => setActive(1)}
              >
                <Text
                  style={{
                    color: "#77838F",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                  }}
                >
                  Groups
                </Text>
                <Text
                  style={{
                    color: "#77838F",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                  }}
                >
                  (3)
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles._group_tab}
                onPress={() => setActive(1)}
              >
                <Text
                  style={{
                    color: "#77838F",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                  }}
                >
                  Groups
                </Text>
                <Text
                  style={{
                    color: "#77838F",
                    fontSize: 12,
                    letterSpacing: 1,
                    fontWeight: "bold",
                  }}
                >
                  (3)
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {
             active === 0 ?
             <MessageScreen />
             :

          <Groups />
          }
          <View style={{ marginBottom: 10 }}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c4e1f1",
  },
  _heading: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 3,
    color: "white",
    marginBottom: 10,
  },
  _custom_tab: {
    backgroundColor: "white",
    marginRight: 20,
    marginLeft: 20,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  _message_tab: {
    backgroundColor: "white",
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  _group_tab: {
    backgroundColor: "white",
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
});
