import React, { Component } from 'react';

import { StyleSheet, Platform, ActivityIndicator, StatusBar, View, Text, ScrollView, Image, AsyncStorage, TouchableOpacity, YellowBox } from 'react-native';

import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';

import Login from './Login';

import { FirstActivity_StackNavigator, SecondActivity_StackNavigator, ThirdActivity_StackNavigator, FourthActivity_StackNavigator } from './Route';

import Icon from 'react-native-vector-icons/FontAwesome';

class HamburgerIcon extends Component {

  toggleDrawer=()=>{

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
const DrawerStack = createDrawerNavigator({
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

const DrawerNavigation = createStackNavigator({
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
const LoginStack = createStackNavigator({
  loginScreen: { screen: Login },
//  secondScreen: { screen: Second },
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#f50057'},
    title: 'You are not logged in'
  }
})

class AuthLoadingScreen extends Component{
  constructor(props){
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('listmtoken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
render() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

};

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: DrawerStack,
    Auth: LoginStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red',
    paddingVertical: 100,
    alignItems:'center'
  }
});
