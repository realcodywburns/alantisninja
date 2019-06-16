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

import {CardContainer, Card} from './src/components';

export default class atlantisninja extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
       <View style={styles.textbox}>
       <Text>
       WTF!? 3 Fork blocks!?
       </Text>
       <Text style={{fontSize:12}}>Some of the development group think that the fork will be ready sooner and have over promised to their commmunity and are risking a network split fork of epic porportions (block 8,500,000 group). Block 8,750,000 was a compromise that had come from the community to avoid spliting the network, however, the 8,500,000 group seemingly are not backing down. Block 8,675,309 is a compromise to a compromise and I thought it would be a terrible oversight not to pay homage to the epic Tommy TuTone and his Jenny.</Text>
       <Text>What should I do?</Text>
       <Text style={{fontSize:12}}>Choose your own path! Since most of the major clients support eth and etc all that needs to be done is changing the block numbers to the proper configurations. This repo contains the updated config files for each client. Choose the fork least likely to break the network and follow the update instructions below.</Text>
       <Text>Isn't this ridiculous?</Text>
       <Text style={{fontSize:14}}>Yes, the ecip process is normally used to prevent this type of situation.
        There is a chance all 3 will exist as a 3 way chain split all with minority hash rates; but that's showbiz, baby!
       </Text>
       <Text>Check back for live stat tracking!</Text>
       </View>
        <View  style={{ textAlign:'center'}}>
          <Text style={{ textAlign:'center',
          fontWeight: 'bold',
          fontSize: 52}}>
          Ethereum 
          </Text>
          <Text style={{ textAlign:'center',
          fontWeight: 'bold',
          fontSize: 52}}>
          Classic 
          </Text>
          <Image style={{align:'center',height:300, width:200}} source={asset('ETHEREUM-classic-ICON_green.svg')} />
          <Text style={{ textAlign:'center',
          fontWeight: 'bold',
          fontSize: 32,
          color: 'green'}}>The Atlantis Trident </Text>
        </View>
       <View>
       <Text style={
         { textAlign:'center',
          fontWeight: 'bold',
          color:'Green'}}>Network Status</Text>
       <Text>Mainnet</Text>
         <CardContainer>
         <Card>
           <Text>DFG:</Text>
           <Text>8,500,000</Text>
         </Card>
         <Card>
           <Text>Cowabunga:</Text>
           <Text>8,675,309</Text>
         </Card>
         <Card>
           <Text>Community:</Text>
           <Text>8,750,000</Text>
         </Card>
       </CardContainer>
       <Text>Testnet</Text>
       <CardContainer>
         
         <Card>
           <Text>Kotti</Text>
           <Text>716,617</Text>
         </Card>
         <Card>
           <Text>Astor</Text>
           <Text>unknown</Text>
         </Card>
         <Card>
           <Text>Morden</Text>
           <Text>4,729,274</Text>
         </Card>
         <Card>
           <Text>Kensington</Text>
           <Text>100</Text>
         </Card>
       </CardContainer>
       </View>
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
  textbox: {
    width: 300,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    fontSize:14,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('atlantisninja', () => atlantisninja);
