'use strict';

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const myScript = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri:
              'https://github.com/codemaker2015/react-native-webview-demo',
          }}
          injectedJavaScript={myScript}
        />
      </View>
    );
  }
}