import React from 'react';

import {
    View,
    Text,
    StyleSheet,
  } from 'react-360';
import {Clam, CardContainer} from '../index.js';

class NetworkStats extends React.Component {
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
            <View>
            <Text style={
                { textAlign:'center',
                 fontWeight: 'bold',
                 color:'green'}}>Network Status
                 </Text>
                <Text>Mainnet</Text>
                <CardContainer>
                <Clam>
                  <Text>DFG:</Text>
                  <Text>8,500,000</Text>
                </Clam>
                <Clam>
                    <Text>Cowabunga:</Text>
                    <Text>8,675,309</Text>
                 </Clam>
                <Clam>
                  <Text>Community:</Text>
                  <Text>8,750,000</Text>
                </Clam>
              </CardContainer>
              <Text>Testnet</Text>
              <CardContainer>
                <Clam>
                  <Text>Kotti</Text>
                  <Text>716,617</Text>
                </Clam>
                <Clam>
                  <Text>Astor</Text>
                  <Text>unknown</Text>
                </Clam>
                <Clam>
                  <Text>Morden</Text>
                  <Text>4,729,274</Text>
                </Clam>
                <Clam>
                  <Text>Kensington</Text>
                  <Text>100</Text>
                </Clam>
              </CardContainer>
            </View>
        )
    }

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
              card : {
                width : 85,
                padding: 5,
                marginRight: 5,
                marginLeft: 5,
                marginTop:13,
                marginBottom: 13,
                backgroundColor : 'transparent',
                opacity: .3,
                shadowOffset : {width: 6, height: 10},
                shadowColor : hue.dark,
                shadowRadius : 20,
                shadowOpacity : .9,
                overflow : 'hidden',
              },    
        });
        return val;
    }  
}   

export default NetworkStats;


