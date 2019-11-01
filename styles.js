import {StyleSheet,} from 'react-native'
var style=StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    head: {
        flex: 1/5,
        flexDirection: "row",
    },
    hoTen: {
        flex: 2,
        justifyContent: "center",
        // alignItems: "center",
        paddingLeft: 10,
        fontSize: 100,
    },
    event: {
        flex: 0.5/5,
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center",
        
    },
    txtInPut:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,  
        flex: 1,
        fontSize: 10
    },
    listItem: {
        flex: 3.5/5,
        borderWidth: 1,
    },
    btnAdd:  {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'green'
    },
    btnDel: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'red'
    },
    btnEdit:{
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'blue'
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.7,
        margin: 5
    },
    listbtn: {
        flexDirection: "row",
        // padding: 10
        paddingHorizontal: 10
    }
    
})
export default style;