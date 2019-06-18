import React from 'react';

import {
    View,
    Text,
    StyleSheet,
  } from 'react-360';
import {Clam, CardContainer} from '../index.js';

import config from '../../helpers/config';

class NetworkStats extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hover: false, 
            testnet: [],
            mainnet: [],
            nodes: config.config,
            intervalIsSet: false,
        };
      }
         
    componentDidMount(){        
      this.getForks();
      if(!this.state.intervalIsSet) {
        let interval = setInterval(this.getForks(),5000);
        this.setState({ intervalIsSet : interval})
        }
    }

    componentWillUnmount() {
        if(this.state.intervalIsSet){
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet :false });
        }
    }
    

    async getForks(){
      let test = [];
      let main = [];
      
      for(let i=0; i < this.state.nodes.length; i++){
        console.log('getForks');
        console.log(this.state.nodes[i]);
        //let nodeWithBlockNumber = await this.getblockNumbers(this.state.nodes[i]);
        //console.log("nodewblocknumber")
        //console.log(nodeWithBlockNumber);
        (this.state.nodes[i].network === "Testnet")
        ? test.push(this.state.nodes[i])
        : main.push(this.state.nodes[i]);   
      }
      this.setState({testnet: test, mainnet: main});
    }


    async getblockNumbers(chain){
      console.log("getblocknumber")
      try {
        //console.log("trying");
        const response = await fetch(chain.api);
        if(!response.ok){throw Error(response.statusText);}
        const json = await response.json();          
        chain.blocknumber = parseInt(json.result, 16);
        //console.log(chain);
        return chain; 
      } catch (error) {
        console.log(error);
        return chain; 
      }  
    }

    render() {
        const { mainnet, testnet } = this.state;
        return  (
            <View>
              <Text style={
                { textAlign:'center',
                 fontWeight: 'bold',
                 color:'green'}}>Network Status
              </Text>
                 
              <Text> Mainnet </Text>
              <CardContainer>
                {
                  mainnet.length <= 0 
                  ? "Loading!"
                  : mainnet.map(dat => (
                        <Clam>
                          <Text>{dat.name}</Text>
                          <Text>Fork Block: {dat.forkBlock}</Text>
                        </Clam>
                      )
                  )
                }            
              </CardContainer>
              <Text> Testnet </Text>
              <CardContainer>
                {
                  testnet.length <= 0 
                  ? "Loading!"
                  : testnet.map(dat => (
                        <Clam>
                          <Text>{dat.name}</Text>
                          <Text>{dat.forkBlock}</Text>
                        </Clam>
                      )
                  )
                }
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


