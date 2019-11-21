/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * API: https://api.myjson.com/bins/w5n0o
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';
import ListItems from './Components/ListItems';
import ViewBody from './Components/ViewBody'



class App extends Component{
  componentDidMount() {
    this.props.onLoadData();
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <ListItems />
        <ViewBody />
      </View>
    )
  }
};
const mapDispatchToProps=dispatch=>{
  return{onLoadData: ()=>dispatch({type: "loadData"})}
}
export default connect(null,mapDispatchToProps)(App);
