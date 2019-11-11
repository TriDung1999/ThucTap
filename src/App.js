/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import styles from '../../styles';
import Controller1 from './Component/Cotroller1';
import Controller from '../Component/Controller';
import {connect} from 'react-redux'

class App extends Component{
  render(){
    return(
      <View style={{ flex: 1, backgroundColor: '#F9E79F'}}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 20}}>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => {
              this.props.dispatch({ type: 'upAll'})
            }}>
              <View style={styles.btn} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.txtApp}>{this.props.myNumber}</Text>
          </View>
          {/* <Text style={styles.txtApp}>Hello World</Text> */}
         
        </View>
        <View style={{flex: 1, flexDirection: "row"}}>
          <Controller/>
          <Controller1/>
        </View>
        
      </View>
    )
  }
}
function mapStateToProps(state){
  return {myNumber: state.number1};
}
export default connect(mapStateToProps)(App);
