import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

class Controller extends Component{
    render(){
        return(
                <View style={styles.containerController}>
                    <TouchableOpacity onPress={()=>{
                        this.props.dispatch({type: 'UP'})}}>
                        <View style={styles.btn} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.dispatch({type:'DOWN'})}}>
                        <View style={styles.btn} />
                    </TouchableOpacity>
                </View>
            
        )
    }
    
}
// function mapDispatchToprops(state){
//     return state
// }
export default connect()(Controller);
