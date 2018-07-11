import React, { Component } from 'react';
import { Platform } from 'react-native';

//import PushNotification from './PushNotification';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  AsyncStorage,
  ToastAndroid,
  YellowBox
} from 'react-native';
import bg from '../img/bg.png';
import logo from '../img/icon.png';
import loginbtn from '../img/loginbtn.png';
import { StackNavigator, NavigationActions  } from 'react-navigation';
import Main from './Main';


export default class Login extends Component {
  constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
         'Warning: componentWillMount is deprecated',
         'Warning: componentWillReceiveProps is deprecated',
         'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
       ]);
        const {state} = this.props.navigation;
        var logoutState = state.params ? state.params.Logout : "<undefined>";

        if(logoutState == 1){
          this.reset();
        }

        this.state = {
          loginerr : '',
          animating:false,
          username:'',
          password:'',
          fcm_token: '',
          truck_token:''

        }
}

static navigationOptions = {
    title: 'Login',
    headerTintColor: "white",
    headerStyle: {
         backgroundColor:"red"
       },
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
          source={bg}
          style={{width: '100%', flex: 1, height: '100%'}}
      >
      <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <ActivityIndicator
               animating = {this.state.animating}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}
            />

        <View style={styles.logoContainer}>

        <Image
          style={styles.imageMain}
          source={logo}
        ></Image>
        <Text style={styles.companytitle}>COMPANY TITLE</Text>

           <Text style={styles.title}>TEMPLATE <Text style={styles.titleinner}>APP</Text></Text>
           <View behaviour="padding" style={styles.container}>
             <TextInput
               placeholder="Username"
               placeholderTextColor = "rgba(255,255,255,0.5)"
               style={styles.inputUser}
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={(username) => this.setState({username})}
               onSubmitEditing = {()=> this.passwordInput.focus()}
             />
             <TextInput
               placeholder="Password"
               secureTextEntry
               placeholderTextColor = "rgba(255,255,255,0.5)"
               style={styles.inputPass}
               onChangeText={(password) => this.setState({password})}
               ref={(input)=> this.passwordInput = input}
             />
             <TouchableOpacity title='login'
               onPress={() => this.props.navigation.navigate('One')}
                >
                <ImageBackground
                  style={styles.imageLogin}
                  source={loginbtn}
                >
                  <Text style={styles.buttonText}>LOGIN</Text>
                </ImageBackground>
             </TouchableOpacity>
             <Text style={styles.powered}>{this.state.loginerr}</Text>
           </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
        <View style={styles.formContainer}>
          <Text style={styles.powered}>Powered By <Text style={styles.red}>zizango123</Text></Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'red',
    padding: 10
  },
  inputUser: {
    height:40,
    backgroundColor:'rgba(255,255,255,0.0)',
    marginBottom:10,
    color:'white',
    paddingHorizontal:10,
    marginLeft: 40,
    marginRight: 20
  },
  inputPass: {
    height:40,
    backgroundColor:'rgba(255,255,255,0.0)',
    marginBottom:10,
    color:'white',
    paddingHorizontal:10,
    marginLeft: 25,
    marginRight: 35,
  },
  loginview: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonContainer: {
    backgroundColor:'#00db93',
    paddingVertical:10,
    marginTop: 20,
    marginRight: 40,
    marginLeft: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
  },
  title: {
    color:'#00db93',
    marginTop: 40,
    marginBottom: 25,
    marginLeft: 100,
    opacity: 0.8,
    fontSize:40,
    fontWeight: 'bold',
    fontFamily: 'serif',
    textAlign:'center',
  },
  titleinner: {
    color:'white',
    fontSize:36,
  },
  companytitle: {
    color:'white',
    fontWeight: 'bold',
    opacity: 0.8,
    fontSize:14,
    marginRight: 60,
    fontFamily: 'normal',
    textAlign:'right',
    marginTop:-40
  },
  logoContainer: {
    flexGrow:1,
    justifyContent: 'center'
  },
  imageMain: {
    width: '20%',
    height: 60,
    paddingVertical: 15,
    marginLeft:100
  },
  imageLogin: {
    width: '90%',
    height: 50,
    paddingVertical: 15
  },
  powered: {
    alignItems: 'center',
    textAlign:'center',
    color:'white',
    fontWeight:'700',
    marginBottom:0
  },
  red: {
    color: 'red'
  },
  activityIndicator: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 80,
     position: 'absolute',
     paddingVertical:'50%',
     paddingHorizontal:'50%'
  }
});
