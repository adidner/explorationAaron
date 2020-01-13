import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class otherScreen extends React.Component {
  static navigationOptions = {
    title: 'Not Home',
  };
  render() {
    const text =  this.props.navigation.getParam('text', 'nothing sent');
    // var text = "random"
    return (
      <View>
      <Text>{text}</Text>
      <Button
        title="Go to home"
        onPress={() => this.props.navigation.navigate('Home', {name: 'Jane'})}
      />
      </View>
    );
  }
}
