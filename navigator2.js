import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation';

import MainActivity from './src/components/Main';

import SecondActivity from './src/components/Second';

import ThirdActivity from './src/components/Third';

import bg from './src/img/pin.png';

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

    const FirstActivity_StackNavigator = StackNavigator({
      First: {
        screen: MainActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'MainActivity',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });


    const SecondActivity_StackNavigator = StackNavigator({
      Second: {
        screen: SecondActivity,
        navigationOptions: ({ navigation }) => ({
          title: 'SecondActivity',
          headerLeft : <HamburgerIcon navigationProps={ navigation }/>,
          headerStyle: {
            backgroundColor: '#FF9800'
          },
          headerTintColor: '#fff',
        })
      },
    });


    const ThirdActivity_StackNavigator = StackNavigator({
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

export default MyDrawerNavigator = DrawerNavigator({
  MainStack: {
    screen: FirstActivity_StackNavigator,
  },

  SecondStack: {
    screen: SecondActivity_StackNavigator
  },

  ThirdStack: {
    screen: ThirdActivity_StackNavigator
  }
});


const styles = StyleSheet.create({
 MainContainer :{
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
  }
});
