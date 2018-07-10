import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { StackNavigator } from 'react-navigation';

import MainActivity from './Main';

import SecondActivity from './Second';

import ThirdActivity from './Third';

class HamburgerIcon extends Component {

  toggleDrawer=()=>{

    console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();

  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
          <Image
            source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
            style={{ width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

  export const FirstActivity_StackNavigator = StackNavigator({
      First: {
        screen: MainActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });


    export const SecondActivity_StackNavigator = StackNavigator({
      Second: {
        screen: SecondActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'Profile',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });


    export const ThirdActivity_StackNavigator = StackNavigator({
      Third: {
        screen: ThirdActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'ThirdActivity',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });
