import React from "react";
//CSS, text, container, something to type on, button emulator
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight
} from "react-native";
// './' means same folder structure level
import Input from "./components/input/Input";
import Tinder from "./components/Tinder/Tinder";
export default class App extends React.Component
//props are a channel to pass info from an instance to a class
{
  state = {
    value: "",
    jokes: []
  };

  //props are a channel to pass info from an instance to the class
  render() {
    return (
      <View style={styles.container}>
        <Input
          updateJokes={jokes => this.setState({ jokes: jokes })}
          value={this.state.value}
          onChange={value => this.setState({ value: value })}
        />

        <Tinder jokes={this.state.jokes} style={styles.tinder} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 100,
    height: 50
  },
  tinder: {
    flex: 2
  }
});
