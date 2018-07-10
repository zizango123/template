import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Button, Image, TouchableOpacity, YellowBox } from 'react-native';

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

  class MyHomeScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./src/img/pin.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };

    render() {
      return (
        <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Text>THis is home</Text>
        </View>
      );
    }
  }

  class MyNotificationsScreen extends Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('./src/img/pin.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };

    render() {
      return (
        <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Text>This is Navigation</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container: {
      flex: 1,
      marginTop:30
    },
  });


  export default MyDrawerNavigator = DrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
