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
} from 'react-native';
import styles from './styles';
import Controller from './Controller';
import {connect} from 'react-redux'

class App extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={styles.txtApp}>Hello World</Text>
          <Text style={styles.txtApp}>{this.props.myNumber}</Text>
        </View>
        <Controller />
      </View>
    )
  }
}
function mapStateToProps(state){
  return {myNumber: state.number};
}
export default connect(mapStateToProps)(App);
