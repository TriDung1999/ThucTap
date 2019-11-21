import {call, put, takeEvery}from 'redux-saga/effects';
import {Alert} from 'react-native'


function* saga() {
    yield takeEvery('loadData', loadData);
}
//fetch API 
// const fetchAPI=()=>{
//     return fetch('https://api.myjson.com/bins/w5n0o')
//     .then((reponse)=>reponse.json())
//     .then((reponseJson)=>{return reponseJson})
// }
function* loadData(){
    try {
        const reponse = yield call(fetch, 'https://api.myjson.com/bins/w5n0o' );
        const data=yield call([reponse,'json']);
        yield put({type: 'LoadData', payload: data})
    }
    catch(e)
    {
        yield put({type: 'FetchError'});       
    }; 
}


export default saga;