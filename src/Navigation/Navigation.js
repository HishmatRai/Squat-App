import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login,Signup,WhatWouldYouLike,WhereYouAre,SearchMap,Home,Message,Chat,Setting ,FilterMyList} from './../Screens/index';
const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="WhatWouldYouLike" component={WhatWouldYouLike} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="WhereYouAre" component={WhereYouAre} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="SearchMap" component={SearchMap} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Message" component={Message} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name="FilterMyList" component={FilterMyList} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;