import React from "react";
//CSS, text, container, something to type on, button emulator
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipe-cards";

class Card extends React.Component {
  render() {
    return (
      <View styles={styles.card}>
        <Text>{this.props.jokes}</Text>
      </View>
    );
  }
}

class NoMoreCards extends React.Component {
  render() {
    return (
      <View>
        <Text>No more cards!</Text>
      </View>
    );
  }
}

export default class Tinder extends React.Component {
  handleAccept() {
    console.log("I like this joke");
  }

  handleReject() {
    console.log("I dont like this joke");
  }

  render() {
    return (
      <SwipeCards
        card={this.setState.jokes}
        renderCard={jokeObject => {
          return <Card joke={jokeObject.joke} />;
        }}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleAccept}
        handleNope={this.handleReject}
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    height: 300,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "red",
    flex: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});
