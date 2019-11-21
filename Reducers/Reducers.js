
const appState = {
    data: [],
    test: 1
}
const Reducer=(state =appState, action)=>{
    newData=state.data;
    switch(action.type)
    {
        case 'LoadData':
            return {...state, data: action.payload};
        case 'FetchError':
            return {...state, test: 0};
        case 'Select':
            {
                if(newData[action.id].isSelected=!newData[action.id].isSelected){
                    newData[action.id].isSelected=true
                    return {...state, test: 2,data:[...newData]}
                }
                else
                {
                    newData[action.id].isSelected=false

                    return { ...state,test: 1,data: [...newData] }
                }
            }
        default:
            return state
    }
    // if (action.type === 'LoadData') {
    //     state.data = action.payload;
    // }
    // return state
}
export default Reducer;