import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomTabNavigator from "./components/BottomTabNavigator";

export default class App extends React.Component {
  render() {
    return(
      <View>
    <BottomTabNavigator/>;
      </View>
    )
  }
}
