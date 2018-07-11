import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, ScrollView, Image, TouchableOpacity, YellowBox } from 'react-native';

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import Login from './src/components/Login';

import { FirstActivity_StackNavigator, SecondActivity_StackNavigator, ThirdActivity_StackNavigator, FourthActivity_StackNavigator } from './src/components/Route';

import Icon from 'react-native-vector-icons/FontAwesome';

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

const DrawerContent = (props) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Header
      </Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>
        Footer
      </Text>
    </View>
  </View>
)

// drawer stack: screens for drawer navigation
const DrawerStack = DrawerNavigator({
  One: {
    screen: FirstActivity_StackNavigator,
    navigationOptions :{
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color="#900" />
        ),
      }
    },
  Two: {
    screen: SecondActivity_StackNavigator,
    navigationOptions :{
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={25} color="#900" />
        ),
      }
   },
  Three: {
    screen: ThirdActivity_StackNavigator,
    navigationOptions :{
        drawerLabel: 'Order',
        drawerIcon: ({ tintColor }) => (
          <Icon name="play" size={25} color="#900" />
        ),
      }
  },
  Four: {
    screen: FourthActivity_StackNavigator,
    navigationOptions :{
        drawerLabel: 'Search',
        drawerIcon: ({ tintColor }) => (
          <Icon name="search" size={25} color="#900" />
        ),
      }
  },
},
{
  contentComponent: DrawerContent,
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'none', //separate header setting for each page on route.js
  //headerMode: 'float', //for common header
  //title: common header title
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#f50057'},
    headerLeft: <HamburgerIcon navigationProps={ navigation }/>,
  })
})

// login stack: screens that will be shown without the drawer menus
const LoginStack = StackNavigator({
  loginScreen: { screen: Login },
//  secondScreen: { screen: Second },
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#f50057'},
    title: 'You are not logged in'
  }
})

const template = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'One',
  initialRouteName: 'loginStack'
});

export default template;
