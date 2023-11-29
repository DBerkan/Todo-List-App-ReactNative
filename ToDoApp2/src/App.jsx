import React,{useState} from "react";
import {Text,View,StyleSheet,FlatList,SafeAreaView } from "react-native";
import TodoList from './components/TodoListCard';
import SaveButtonCard from './components/SaveButtonCard';
import TodoListCard from "./components/TodoListCard";

function App() {
const [list,setList] = useState([])
const [inputText,setInputText] = useState('')


handleSave=()=>{
  if (inputText){
    const newItem = {text:inputText}
    setList([...list,newItem])
    setInputText('');
  }
};



  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.container}>
      <Text style={styles.header}>ToDo List</Text>
        <FlatList
          keyExtractor={(item)=>item.id}
          data={list}
          renderItem={({item})=> <TodoListCard todo={item}/>}
        />
      </View>
        <SaveButtonCard handleSave={handleSave} inputText={inputText} setInputText={setInputText}/>
    </SafeAreaView>

  )
};

export default App;

const styles = StyleSheet.create({
  container:{ 
      flex: 1,
      backgroundColor: '#102027',
  },
  header:{
    fontSize:28,
    textAlign:'center',
    color:'orange',
    fontStyle:'italic',
    fontWeight:'bold'
   }
});