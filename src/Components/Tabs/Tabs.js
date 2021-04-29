import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import LikesHome from './LikesHome';
import ExploreHome from './ExploreHome';
export default class Tabs11 extends Component {
    render() {
        return (
            <Tabs tabBarUnderlineStyle={{ backgroundColor: "white",  alignSelf: "center", height: 3 }}  >

                <Tab heading="Liked Homes" tabStyle={{ backgroundColor: '#CDE0EF', width: 50 }} textStyle={{ color: 'white', fontWeight: 'bold',fontSize:20 }} activeTabStyle={{ backgroundColor: '#CDE0EF' }} activeTextStyle={{ color: 'white', fontWeight: 'bold',fontSize:20 }}>
            <LikesHome/>
          </Tab>
          <Tab heading="Explore Page" tabStyle={{ backgroundColor: '#CDE0EF', width: 50 }} textStyle={{ color: 'white' , fontWeight: 'bold',fontSize:20}} activeTabStyle={{ backgroundColor: '#CDE0EF' }} activeTextStyle={{ color: 'white', fontWeight: 'bold',fontSize:20 }}>
            <ExploreHome/>
          </Tab>
            </Tabs>
        );
    }
}