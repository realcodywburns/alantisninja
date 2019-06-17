import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
  ScrollView,
} from 'react-360';

import {
  NetworkStats,
  InfoWall,
  LogoWall
} from './src/components';

export default class atlantisninja extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
       <InfoWall />
       <LogoWall /> 
       <NetworkStats />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: .5, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
 
});

AppRegistry.registerComponent('atlantisninja', () => atlantisninja);
