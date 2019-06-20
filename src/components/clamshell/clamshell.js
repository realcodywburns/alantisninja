import React from 'react';

import {
    View,
    StyleSheet,
    Image,
    Text,
    asset,
  } from 'react-360';


class Clam extends React.Component {
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
        return (
            <View  
              onEnter={() => this.setState({hover: true})}
              onExit={() => this.setState({hover: false})}>  
                <Image style={this.styles().clam} source={asset(this.props.image)} >
                {this.props.children}
                </Image>
            </View>
            )
    }

    styles() {
         
        let btn_moveX = 0;
        let btn_moveY = 10;
        
        //change transform  on hover
        let clm_transform = (this.state.hover) ? [{ scale : 1.05 },{translateX: btn_moveX},{translateY: btn_moveY}] : [{translateX: 0},{translateY: 0}];
        
        const val = StyleSheet.create({
              clam : {
                width : 100,
                height : 150,
                marginRight: 1,
                marginLeft: 1,
                marginTop:13,
                marginBottom: 13,
                transform : clm_transform,
                shadowOffset : {width: 6, height: 10},
                shadowRadius : 20,
                shadowOpacity : .9,
                overflow : 'hidden',
              },    
        });
        return val;
    }  
}   

export default Clam;

