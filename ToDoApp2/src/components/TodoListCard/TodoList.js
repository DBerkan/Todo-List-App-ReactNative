import React, { useState } from "react";
import { View,Text, useAnimatedValue, TouchableOpacity} from "react-native";
import styles from './TodoList.styles';



const TodoListCard =({todo})=>{

const [isSelected,setIsSelected] = useState(false)

const handlePress = ()=>{
    setIsSelected(!isSelected);
}
    return(
        <View style={styles.container}>
            <TouchableOpacity  style={styles.container} onPress={handlePress}>
                <Text style={isSelected ? styles.selectedText : styles.text}>{todo.text}</Text>

            </TouchableOpacity>
        </View>
    )

}

export default TodoListCard;
