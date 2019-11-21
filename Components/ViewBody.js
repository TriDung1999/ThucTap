import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import styles from '../style';
class ViewBody extends Component {
    render() {
        let itemOn=this.props.data.filter(item=>item.isSelected==1).map(item=>item.label)
        return (
            
            <View style={styles.label1}>
                 <Text>Selected number: {itemOn.toString()}</Text>
            </View>
        )
    }
}
function mapStateToProps(state){
    return{ mytest: state.test,
            data:state.data}
}
export default connect(mapStateToProps)(ViewBody) ;