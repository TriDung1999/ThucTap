import {StyleSheet} from 'react-native'


const styles= StyleSheet.create({
    listBtn: {
        flex: 6,
        borderWidth: 1.5,
        borderRadius: 30,
        margin: 10,
    },
    label1: {
        flex: 1,
        borderWidth: 1.5,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        
    },
    lightItem:{

    },

    item:{
        width: 60,
        height: 60,
        borderWidth: 0.9,
        margin: 8,
        padding: 15,
        // backgroundColor: "#F5FAFB"
        // justifyContent: "center",
        // alignContent: "center"
        // alignItems: "flex-start"
        
    },
    listItem:{
        // flexDirection: "row",
        flex: 1,
        borderWidth: 1.5,   
        borderRadius: 30,
        margin: 10,
        flexWrap: "wrap",
        // alignItems: "flex-start"
    }
})
export default styles;