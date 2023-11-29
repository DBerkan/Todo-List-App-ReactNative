import React from "react";
import { View,Text,Button, TextInput } from "react-native";
import styles from './SaveButtonCard.styles'


const SaveButtonCard =({inputText,setInputText,handleSave}) =>{

    return(
        <View>
            <View style={styles.container}>
                <TextInput  placeholder="Add" value={inputText} onChangeText={setInputText}/>
            </View>
            <View style={styles.button}>
                <Button color="white" title="Save" onPress={handleSave}/>
            </View>
        </View>
    )
}

export default SaveButtonCard;