import React,{Component} from 'react';
import {TouchableOpacity, Text} from 'react-native'
import styles from '../style'
import {connect} from 'react-redux'
class HandleItems extends Component{
    
}        

const item=data=>{
    <TouchableOpacity 
    style= {[styles.item, data.item.selectedClass]}
    onPress={()=>this.selectItem(data)}
    >
    <Text></Text>
    </TouchableOpacity>
}

function mapStateToProps(state){
    return{ myData: state.data}
}
export default connect(mapStateToProps)(item)
