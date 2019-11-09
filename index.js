/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


//state
const appState={ number: 12}

//actions

//reducer
const reducer=(state=appState,action)=>{
    if(action.type ==='UP'){
        return {number : state.number+1};
    };
    if(action.type==='DOWN'){
        return {number: state.number -1};
    }
    return state
}
//store
const store=createStore(reducer);


export default class TestRedux extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
AppRegistry.registerComponent(appName, () => TestRedux);
