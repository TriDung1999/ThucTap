import React, {Component} from 'react';
import {
    View, Text, Alert, TouchableOpacity
} from 'react-native';
import stylesApp2 from './stylesApp2'

class App2 extends Component{
    constructor(props){
        super(props); 
        this.state= {
            body1: 1,
            body2: 1,
            text1: 1,
            isUpdate: true,
        }
    };

    handleAdd(a,b,c){
        var body1=a+this.state.body1;
        var body2 = b + this.state.body2;
        var text1 = c + this.state.text1;
        this.setState({body1: body1, body2: body2, text1: text1})
    }

    //done
    // total(){
    //     this.render = this.render.bind(this);
    //     let sum = this.state.body1+this.state.body2;
        
    //     this.setState(()=>({ Sum: Number(sum), isUpdate: false}))
    //     Alert.alert();
    // }
     

    render(){
        return(
            <View style={stylesApp2.container}>
                <Header data={this.state} onClick={()=>{this.handleAdd(1,1,1)}}/>
                <View style={stylesApp2.cpn2}>
                    <Body data={this.state.body1}
                        onClickLeft={() => { this.handleAdd(1, 0, 0) }}
                        onClickRight={() => { this.handleAdd(0, 1, 0) }} />
                    <Body data={this.state.body2}
                        onClickLeft={() => { this.handleAdd(1, 0, 0) }}
                        onClickRight={() => { this.handleAdd(0, 1, 0) }} />
                </View>
                
            </View>  
        )}
};

 class Header extends Component{
    render(){
        const data = this.props.data;
        return(
            <View style={stylesApp2.header}>
                <View style={stylesApp2.btnAddAll}>
                    <TouchableOpacity onPress={this.props.onClick}>
                        <View style={stylesApp2.btn} />
                    </TouchableOpacity>
                </View>
                <View style={stylesApp2.btnAddAll}>
                    <Text style={{ fontSize: 50 }}>{data.text1}</Text>
                </View>
               
            </View>
        )
    }
}

 class Body extends Component{
    render(){
        const data=this.props.data;
        return(
            <View style={stylesApp2.body}>
                <View style={stylesApp2.page}>
                    <View style={stylesApp2.btnBody}>
                        <TouchableOpacity onPress={this.props.onClickLeft}>
                            <View style={stylesApp2.btn}></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onClickRight}>
                            <View style={stylesApp2.btn} ></View>
                        </TouchableOpacity>
                    </View>
                    <View style={stylesApp2.txtBody}>
                        <Text style={{fontSize: 50, }}>{data}</Text>
                    </View>
                    
                </View>
            </View>
        )
    }
}
export default App2;