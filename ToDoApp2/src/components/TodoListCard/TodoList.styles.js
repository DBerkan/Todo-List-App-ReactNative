import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:5,
        margin:5,
        borderRadius:15,
        backgroundColor:'orange',

    },
      selectedText: {
        textDecorationLine: 'line-through',
        color:'red',
        fontSize:12
      },
      text:{
        textDecorationLine: '',
        fontSize:16
      }
})