    import React, {Component} from 'react'
    import {
      View, Text, Image, StyleSheet, Button, Alert, TouchableOpacity, FlatList, SafeAreaView
    } from 'react-native';
    import { black, hidden, green, blue } from 'ansi-colors';
    import { red } from 'colorette';

    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First ',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f60',
        title: 'Second ',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d70',
        title: 'Third ',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f69',
        title: 'fourth ',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d71',
        title: 'fifth ',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'sixth ',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d43',
        title: 'seventh ',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d36',
        title: 'eighth',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d26',
        title: 'End',
      },
    ];

    function Item({title}){
      return(
        <View style={style.item}>
          <Text style={style.title}>{title}</Text>
          <View>
            <View style={{ flexDirection: "row" }}>
              <View style={style.buttonGreen}></View>
              <View style={style.buttonBlue}></View>
              <View style={style.buttonRed}></View>
            </View>
          </View>
          
        </View>
      );
    }

    export default class HelloWorld extends Component{


      render(){
        return(
        <View style={{flex: 1, flexDirection: "column", margin: 20}} >
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Image style={style.img}
                // style={{ width: 50, height: 50 }}
                source={require('./img/1.jpg')}
              />
              <View style={{flexDirection: "column"}}>
                <Text style={style.txtHello}>Họ và Tên: </Text>
                <Text style={style.txtHello}>MSSV:</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                 <Text style={style.txtY}>Y:</Text>
                 <Text style={style.txtHello}>Total: X</Text>
            </View>
          
            
            <View >
              <FlatList style={{ borderWidth: 0.8, paddingLeft: 15, marginVertical: 10}}
                data={DATA}
                renderItem={({item})=> <Item title={item.title}/>}
                keyExtractor={item => item.id} 
            />
            </View>
        </View>
        )};
    };

    const style = StyleSheet.create({
      img: {
        width: 200,
        height: 100,
      },
      txtHello: {
        // flex: 1,
        // justifyContent:"center",
        // alignItems: "center"
        fontSize: 30,
      },
      txtY: {
        // flex: 1,
        // justifyContent:"center",
        // alignItems: "center"
        fontSize: 30,
        borderWidth: 0.8,
        width: 200,
        paddingLeft: 10,
        borderRadius: 10,
      },
      buttonGreen: {
          width: 50,
          height: 50,
          borderRadius: 100,
          backgroundColor: "green",
          marginRight: 10,
        marginLeft: 10
      },
      buttonBlue: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "blue",
        marginRight: 10,
        marginLeft: 10
      },
      buttonRed: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "red",
        marginRight: 10,
        marginLeft: 10
      },
      item: {
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 0.5,  
        borderRadius: 10,
        padding: 10,
        marginVertical: 4.5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center"
      },
      title: {
        fontSize: 25,
      },
    }); 



