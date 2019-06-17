import React from 'react';

import {
    View,
    Text,
    StyleSheet,
  } from 'react-360';
import {Clam, CardContainer} from '../index.js';

class InfoWall extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hover: false, 
        };
      }
         
    componentWillUnmount() {
        if (this.animationFrame) {
            window.cancelAnimationFrame(this.animationFrame);
        }
    }
 
    render() {
        return  (
        <View style={this.styles().textbox}>
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
    )}

    styles() {
        let hue = {
            "gray": '#868e96',
            "grayDark": '#343a40',
            "primary": '#2FA4E7',
            "secondary": '#e9ecef',
            "success": '#73A839',
            "info": '#033C73',
            "warning": '#DD5600',
            "danger": '#C71C22',
            "light": '#f8f9fa',
            "dark": '#343a40',
          };  
        let btn_moveX;
        let btn_moveY;

        
        //change transform  on hover
       // let btn_transform = (this.state.hover) ? [{ scale : 1.05 },{translateX: btn_moveX},{translateY: btn_moveY}] : [{translateX: btn_moveX},{translateY: btn_moveY}];
        
        let bg_color = (this.props.viewMode == 'DAY_MODE' ) ? hue.light : hue.dark;
        const val = StyleSheet.create({
            textbox: {
                width: 300,
                padding: 20,
                backgroundColor: '#000000',
                borderColor: '#639dda',
                borderWidth: 2,
              },   
        });
        return val;
    }  
}   

export default InfoWall;


