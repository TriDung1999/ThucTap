import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';

class Controller1 extends Component {
    render() {
        return (
            <View style={styles.containerController}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <TouchableOpacity onPress={() => {
                     
                                this.props.dispatch({ type: 'upNum2' })
                       
                        }}>
                            <View style={styles.btn} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => { this.props.dispatch({ type: 'upNum3' }) }}>
                            <View style={styles.btn} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.txtApp}>{this.props.myNumber}</Text>
                </View>
            </View>

        )
    }

}
function mapStateToProps(state) {

        return { myNumber: state.number3 }
}
export default connect(mapStateToProps)(Controller1);