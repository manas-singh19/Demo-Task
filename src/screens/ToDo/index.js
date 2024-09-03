import { StyleSheet, Text, View, TextInput, Dimensions, Modal, Keyboard, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'
import Loading from 'react-native-vector-icons/MaterialCommunityIcons'
const { width, height } = Dimensions.get('window');

import ToDoItem from '../../components/todo/todoItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function generateRandomThreeDigitNumber() {
  return Math.floor(100 + Math.random() * 900);
}

const Todo = () => {
  const navigation = useNavigation();
  
  const [todos, setTodos] = useState([]); 

  // get the todos from the storage
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await AsyncStorage.getItem('task');
        if (data !== null) {
          const tasks = JSON.parse(data);
          console.log(tasks);
          setTodos(tasks.map(item => ({
            id: item.id,
            content: item.content,
            completed: item.completed
          })));
        }
      } catch (err) {
        console.error("Error fetching tasks from AsyncStorage:", err);
      }
    }; 
    fetchTasks();
  }, []);
 
  const [isLoading,setIsLoading] = useState(false); 

  const [inputText, setInputText] = useState(''); // input text data
  const [charCount, setCharCount] = useState(0);
  
  // textinput handler 
  const handleTextChange = (text) => {
    if (text.length <= 70) {
      return (setInputText(text), 
      setCharCount(text.length))
    }
    return alert("only allow 70 character");
  };
  
  // create new to-do handler.
  const createTodo = ()=>{ 
    Keyboard.dismiss(); 
    setIsLoading(true); 
    if (inputText.trim().length === 0) {
      alert('Please enter some text.');
      setIsLoading(false);
    } else {
      // alert('Input Submitted', inputText); 
      // Handle the submitted inputText here 
      setTodos([...todos, { id: generateRandomThreeDigitNumber(), content: inputText, completed: false }]);
      setIsLoading(false);
      setInputText('');
      AsyncStorage.setItem('task', JSON.stringify([...todos, { id: generateRandomThreeDigitNumber(), content: inputText, completed: false }]))
    }
  } 

  // todo mark as check-toggle
  const todoMarkedAsCheckedToggle = (id)=>{ 
    setTodos(
      todos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed } // Toggle the completed status for the matching todo
          : todo // Return the todo unchanged if the id doesn't match
      )
    ); 
    AsyncStorage.setItem('task',JSON.stringify(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed } // Toggle the completed status for the matching todo
        : todo // Return the todo unchanged if the id doesn't match
    ))); 
  }

  // delete the taks 
  const deleteTask = (id) => {
    console.log("id--->:", id);
    setTodos(todos.filter(todo => todo.id !== id));
    AsyncStorage.setItem('task',JSON.stringify(
      todos.filter(todo => todo.id !== id)
    )); 
  }

  // edit the todo. 
  const [openEditBox,setopenEditBox] = useState(false);
  const [todoEditId,settodoEditId] = useState('');

  const openEditBoxToggle = (id,text)=>{
    console.log(id); 
    setopenEditBox(!openEditBox); 
    settodoEditId(id);
    setInputText(text)
  }
  
  // edit current todo-task
  const editSaveTask = (id,text)=>{
    if(id && inputText.trim().length !== 0){
      console.log({
        id,text
      })
      setTodos(
        todos.map(todo => 
          todo.id === id 
            ? { ...todo, content: inputText } 
            : todo
        )
      );
      AsyncStorage.setItem('task',JSON.stringify(
        todos.map(todo => 
          todo.id === id 
            ? { ...todo, content: inputText }
            : todo 
        )
      )); 
      setInputText(''); 
      setopenEditBox(!openEditBox);
    }else{
      alert('Please enter some text.');
    }
    
  }


  return (
    <View
      style={styles.mainContainer} 
    >
      <Header navigation={navigation} title="To-Do List" back={true} />
      <View style={styles.Container}>
        <View style={styles.dataContainer}>
          {
            todos.length == 0&&(
              <View style={{width:'100%', height:40, justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:10}}>
                <Text style={{color:'#121212', fontSize:14, fontWeight:'500'}}>No tasks yet!</Text>
              </View>
            )
          }
           <FlatList 
            data={todos}
            keyExtractor={(item) => item.id} 
            style={{paddingVertical:12}}
            renderItem={({item})=>{ 
              return <ToDoItem key={item.id} data={item} checkedToggle={todoMarkedAsCheckedToggle} deleteTask={deleteTask} editToggle={openEditBoxToggle}/>
            }}
           />
        </View> 
      </View>
      {
        !openEditBox&&(
          <View style={[
            styles.BottonSection,
             // Adjust padding based on keyboard visibility
          ]}>
            <TextInput
              value={inputText}
              placeholder='Enter your Todo.'
              placeholderTextColor={"#757575"}
              style={styles.textInput} 
              onChangeText={handleTextChange}
              editable={charCount <= 70}
            />
            <View style={styles.buttonContainer}>
              {
                isLoading == false?
                  <TouchableOpacity style={styles.button} onPress={createTodo}> 
                    <Icon name="send" size={20} color='#141414'/>
                  </TouchableOpacity>
                :
                <TouchableOpacity style={styles.button}> 
                  <Loading name="send-clock-outline" size={20} color='#141414'/>
                </TouchableOpacity>
              }  
            </View> 
          </View>   
        )
      }
       
        <Modal animationType="slide" transparent={true} visible={openEditBox} >
              <View style={{width:'100%', height:'100%', backgroundColor: '#0e0e0e61', zIndex: 999999, justifyContent:'center', alignContent:'center', alignItems:'center' }}>
                  <View style={{width:'90%', height:280, backgroundColor:'#fff', borderRadius:12, borderWidth:1, borderColor:'#eee', padding:12}}>
                      <Text style={{fontSize:20, color:'#141414', fontWeight:'500', marginBottom:12}}>Edit Task</Text>
                      <TextInput
                        placeholder='Edit task.'
                        placeholderTextColor={"#757575"}
                        style={[styles.textInput,{width:'100%', marginBottom:12}]} 
                        editable={charCount <= 70}
                        onChangeText={handleTextChange}
                        value={inputText}
                      />
                      <TouchableOpacity style={[styles.editButtons,{backgroundColor:'orange'}]} onPress={()=>{editSaveTask(todoEditId,inputText)}} >
                        <Text style={{color:'#000'}}>Edit & Save</Text>
                      </TouchableOpacity>
                      <TouchableOpacity  style={[styles.editButtons,{backgroundColor:'#eee'}]} onPress={openEditBoxToggle}>
                        <Text style={{color:"#141414"}}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
              </View>
        </Modal>
    </View>
  );
}

export default Todo;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  dataContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },
  BottonSection: {
    backgroundColor: '#FBFBFB',
    borderTopWidth: 2,
    borderTopColor: '#eeeeee',
    paddingHorizontal: 10,
    flexDirection:'row',
    height:60,
    justifyContent:'space-between',
    alignItems:'center',
    alignContent:'center'
  },
  textInput: {
    width:'88%',
    height: 40,
    borderColor: '#D7D7D7',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    color:'#141414',
    fontSize:16
  },
  buttonContainer:{
    width:'10%',
    height:40,  
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    padding:0
  },
  button:{
    backgroundColor:'orange',
    width:40,
    height:40,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius:22
  },
  editButtons:{
    width:'100%',
    height:50,
    backgroundColor:'red',
    marginVertical:6,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius:12,
    borderWidth:2,
    borderColor:'#eeeeee'
  }
});