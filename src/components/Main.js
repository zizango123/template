/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

export default class MainActivity extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
     'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader',
   ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MainActivity component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
