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
            Simple Summary
            </Text>
            <Text style={{fontSize:12}}>Enable the outstanding Ethereum Foundation Spurious Dragon and Byzantium network protocol upgrades on the Ethereum Classic network in a hard-fork code-named Atlantis to enable maximum compatibility across these networks.</Text>
            <Text>Abstract</Text>
            <Text style={{fontSize:12}}>Add support for a subset of protocol-impacting changes introduced in the Ethereum Foundation (ETH) network via the Spurious Dragon and Byzantium hardforks.</Text>
            <Text>Motivation</Text>
            <Text style={{fontSize:14}}>To enhance the Ethereum Virtual Machine's (EVM) capabilities, various opcodes and precompiled contracts shall be added to the Ethereum Classic networks, all of which have been in use on the Ethereum Foundation networks since late 2017. Adoption of the receipt status feature provides a helpful method for decentralized-application developers to access the successful or failed state of a contract. This would establish a higher level of interoperability between Foundation and Classic EVMs, and make a more extensive array of tooling available for the ETC network (e.g., Solidity version, contract debugging tools). The proposed change to the difficulty formula ensures that the difficulty adjustment algorithm targets a constant average rate of blocks produced including uncles, and so ensures a highly predictable issuance rate that cannot be manipulated upward by manipulating the uncle rate.</Text>
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


