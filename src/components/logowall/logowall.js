import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    asset
  } from 'react-360';
import {Clam, CardContainer} from '../index.js';

class LogoWall extends React.Component {
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
            <View  style={{alignItems: 'center', justifyContent:'center'}}>
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
            <Image style={{height:300, width:200}} source={asset('ETHEREUM-classic-ICON_green.svg')} />
            <Text style={{ textAlign:'center',
            fontWeight: 'bold',
            fontSize: 32,
            color: 'green'}}>The Atlantis Trident </Text>
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
                fontSize:14,
              },   
        });
        return val;
    }  
}   

export default LogoWall;


