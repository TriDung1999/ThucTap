import React,{Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from '../style';
import { connect } from 'react-redux';
// import Item from './Item';
// import HandleItems from './Item';

class ListItems extends Component{
    renderItem=({item,index})=>{
        const {onSelect}=this.props;
        let backgroundColor = "#F5FAFB";
        if (item.isSelected === true) {
            backgroundColor = "#F4806B"
        }
        return(
            <TouchableOpacity 
            style={[styles.item, {backgroundColor: backgroundColor}]}
            onPress={()=>onSelect(index)}>
                <Text>{item.label}</Text>
            </TouchableOpacity>
        )
        
    }  
    render(){
        return(
            <View style={{flex: 6}}>
                <View style={styles.listItem}>
                    
                    <FlatList
                        
                        data={this.props.data}
                        extraData={this.props}
                        horizontal={false}
                        
                             
                            //   <TouchableOpacity>
                            //     <Text style={{
                            //         width: 60,
                            //         height: 60,
                            //         borderWidth: 0.9,
                            //         margin: 8,
                            //         padding: 15,
                            //     backgroundColor: "#F5FAFB"}}>{item.label}</Text>
                            // </TouchableOpacity>
                        keyExtractor={(item) => item.id}
                        numColumns={5}
                        renderItem={this.renderItem}
                    />
                </View>     
            </View>
        )
    }   
};
const mapDispatchToProps = dispatch =>{
    return {onSelect: (index)=>dispatch({type:'Select', id: index})}
};
function mapStateToProps(state){
    return {
        data: state.data,
        myTest: state.test
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(ListItems);