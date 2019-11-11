/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


//state
const appState={ 
    number1 : 0,
    number2: 0,
    number3: 2,
}

//actions

//reducer
const reducer=(state=appState,action)=>{
    switch(action.type)
    {
        case 'upAll':
            return {
                number1: state.number1 + 1,
                number2: state.number2 + 1 ,
                number3: state.number3 + 1};
        case 'upNum1':
            return {...state, number1: state.number1+1};
        case 'upNum2':
            return { ...state, number2: state.number2+1 };
        case 'upNum3':
            return { ...state, number3: state.number2 + 1 };
        // case 'downNum1':
        //     return { ...state, number1: state.number1 - 1 };
        // case 'downNum2':
        //     return { ...state, number2: state.number2 - 1 };
        // case 'downNum3':
        //     return { ...state, number3: state.number3 - 1 };
        default:
            return state
    }
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
