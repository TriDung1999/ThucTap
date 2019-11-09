import {StyleSheet } from 'react-native'

const styles=StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    header: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1.5,
        borderRadius: 20,
        margin: 10,
        padding: 10
    },
    body: {
        flex: 3,
        flexDirection:"row",
        borderWidth: 1.5,
        
        borderRadius: 20,
        margin: 6 ,
        padding: 7
    },
    page: {
        flex: 1,
        // justifyContent: "center",
        // justifyContent: "space-around"
        // flexDirection:"row"
       
    },
    btnBody: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingRight: 40
    },
    txtBody: {
        flex: 1,
        // fontSizse: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    btnAddAll: {
        flex: 1
    },
    txt:{
        flex: 1,
        fontSize: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    btn: {
        width: 70,
        height: 70,
        backgroundColor: '#48C9B0',
        borderRadius: 20
    },
    cpn2: {
        flex: 3,
        flexDirection: "row"
    }

})
export default styles;