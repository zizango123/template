import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, ScrollView, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerItems, DrawerNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import { StackNavigator } from 'react-navigation';

import { FirstActivity_StackNavigator, SecondActivity_StackNavigator, ThirdActivity_StackNavigator } from './src/components/Route';

const DrawerContent = (props) => (
  <View style={{ flex: 1 }}>
    <View
      style={{
        backgroundColor: '#f50057',
        height: 140,
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


export default MyDrawerNavigator = DrawerNavigator({
  FirstPage: {
    screen: FirstActivity_StackNavigator,
    navigationOptions :{
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color="#900" />
      ),
    }
  },

  SecondPage: {
    screen: SecondActivity_StackNavigator,
    navigationOptions :{
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color="#900" />
      ),
    }
  },

  ThirdPage: {
    screen: ThirdActivity_StackNavigator,
    navigationOptions :{
      drawerLabel: 'Logout',
      drawerIcon: ({ tintColor }) => (
        <Icon name="power-off" size={25} color="#900" />
      ),
    }
  }
},
{
  contentComponent: DrawerContent,
});


const styles = StyleSheet.create({
 MainContainer :{
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
  }
});
