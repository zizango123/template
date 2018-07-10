import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import { StackNavigator } from 'react-navigation';

import { FirstActivity_StackNavigator, SecondActivity_StackNavigator, ThirdActivity_StackNavigator } from './src/components/Route';

import bg from './src/img/pin.png';

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
