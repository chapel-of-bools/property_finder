'use strict';
import React, {Component} from 'react';
import {AppRegistry, NavigatorIOS, View, Text} from 'react-native';

var styles = {
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
}

class HelloWorld extends Component {
  render() {
    return <Text style={styles.text}> "Hello World!"</Text>
  }
}

class PropertyFinderApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: HelloWorld,
        }}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
