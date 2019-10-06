import React from "react";
//CSS, text, container, something to type on, button emulator
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from "react-native";

export default class input extends React.Component {
  fetchData() {
    // string concatenation is combining 2 string
    //concatinating a static string with a dynamic value
    fetch("http://api.icndb.com/jokes/random/${this.props.value}")
      // json - javascript object notation, get data and convert it into a type that the comp understands
      // make it into a type of object, key value pairs
      .then(response => {
        return response.json();
      })
      //once info is given, we want to update our parent state
      //we want to share this data with another component, via our parent state
      //single source of truth
      .then(data => this.props.updateJokes(data.value));
  }
  render() {
    // return data, i.e.  result of executing function
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={"numeric"}
          value={this.props.value}
          style={styles.input}
          //track changes in text, when someone types something in input field
          //text will be what we type in
          onChangeText={text => this.props.onChange(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}
        >
          <Text style={styles.text}>Go!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

//optimised styling
//alignItems is to horizontally align
//justifyContent is to vertically align
//flex 1 is to take entire height

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 50,
    width: 200,
    borderColor: "gray",
    borderWidth: 2
  },
  button: {
    backgroundColor: "blue",
    height: 40,
    width: 100,
    borderColor: "gray",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
