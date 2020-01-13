import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class homeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  static navigationOptions = {
    title: 'Home',
  };

  change(x){
    return x * 10;
  }


  render() {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TextInput
          placeholder="Type pass data here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Go to Other Screen"
          onPress={() => this.props.navigation.navigate('OtherScreen', {
            text: this.state.text
          })}
        />
      </View>

    );
  }
}
