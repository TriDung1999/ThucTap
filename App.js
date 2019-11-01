import React, { Component } from 'react'
import {
  View, Text, FlatList, Image, TextInput, TouchableOpacity,Alert

} from 'react-native';
// import ListItems from './listItems';
import styles from './styles.js';

class layoutInforSV extends Component{

  constructor(props) {
    super(props);
    
    this.state = {
      valueInput: 0,
      Sum: 0,
      isUpdate: true,
      ListData: [
        {Name: 10, id: 1},
        {Name: 8, id: 2}
      ]
    }
    
    this.handleInput = this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.handleSum=this.handleSum.bind(this);
    this.handleAddValue=this.handleAddValue.bind(this);
    this.handleDelItem=this.handleDelItem.bind(this);
  };
  // render() {
  //   return (
  //     <div>
  //       <div>
  //         {this.state.Data.map((dynamicComponent, i) => <Content
  //           key={i} componentData={dynamicComponent} />)}
  //       </div>
  //     </div>
  //   );
  // }

  handleInput = (text) => {
    this.setState({ valueInput: text })
  };

  randomName() {
    this.addItem=this.addItem.bind(this);
    let min = 1;
    let max = 20;
    return (min + Math.random() * (max - min)).toFixed();
  };

  handleSum(){
    this.render=this.render.bind(this);
    let sum=0;
    for (let i = 0; i < this.state.ListData.length; i++) 
    {
      sum += Number(this.state.ListData[i].Name);}
    this.setState(()=>({Sum: Number(sum), isUpdate: false}))
    // Alert.alert();
  }

  handleAddValue(index){
    if (this.state.valueInput=='')
    {
      Alert.alert('Please enter your number');
    }
    else{
      let list = this.state.ListData;
      list[index].Name = Number(this.state.valueInput) + list[index].Name;
      this.setState(() => ({ ListData: list, valueInput: 0, isUpdate: true }));
    }
    
    this.textInput.clear();
    // this.setState({})
  }

  addItem(){
    var value= this.randomName();
    var key= this.state.ListData.length+2;
    this.setState({
      ListData: [...this.state.ListData,{ Name: value, id: key}],
      isUpdate: true
    })
  }

  handleDelItem(index){
    if(this.state.ListData.length!=1){
      var list = [...this.state.ListData]; // make a separate copy of the array
      if (index !== -1) {
        list.splice(index, 1);
        this.setState({ ListData: list, isUpdate: true });
      }
    }
    else{
      Alert.alert('Please!!!')
    }
  }
  
  render(){
    if (this.state.isUpdate) {
      this.handleSum();
    }
    return(
      < View style={styles.container}>
        <View style={styles.head}>
          <Image style={{ flex: 1, height: undefined, width :undefined }}
              source={require('./img/1.jpg')} />
          <View style={styles.hoTen}>
            <Text style={{ fontSize: 18 }}>Full Name: </Text>
            <Text style={{ fontSize: 18 }}>MSSV: </Text>
          </View>
        </View>
        <View style={styles.event} >
          <TextInput style={styles.txtInPut}
            ref={ref => {
              this.textInput = ref;
            }}
          placeholder='number'
          autoCapitalize= 'none'
          onChangeText={this.handleInput}/>
          <Text style={{ flex: 1, paddingLeft: 20, fontSize: 20 }}>Total: {this.state.Sum} </Text>
        </View>
        <View style={styles.listItem}>
          <FlatList
            data={this.state.ListData}
            renderItem={({ item, index,separators }) => (
              <View style={styles.item}>
                <Text style={{fontSize: 20}}>{item.Name}</Text>
                <View style={styles.listbtn}>
                  <TouchableOpacity onPress={this.addItem}>
                    <View style={styles.btnAdd} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.handleAddValue(index)}}>
                    <View style={styles.btnEdit} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.handleDelItem(index)}}>
                    <View style={styles.btnDel} />
                  </TouchableOpacity>
                  {/* <TouchableOpacity onPress={this.handleSum}>
                    <View style={styles.btnDel} />
                  </TouchableOpacity> */}
                </View>
              </View>
            )}
          />
        </View>
      </View >
    )
    
  }
}

export default layoutInforSV;
// AppRegistry.registerComponent('layoutInforSV',()=>layoutInforSV)