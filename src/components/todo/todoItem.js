import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import IconTick from 'react-native-vector-icons/MaterialCommunityIcons'

const ToDoItem = (props) => {
  return (
    <View style={styles.todoItemContainer}>
       <View style={[styles.Asidecommon,{width:'7%'}]}>
            <TouchableOpacity onPress={()=>{props.checkedToggle(props.data.id)}}>
                <IconTick 
                    name={props.data.completed ? 'checkbox-intermediate' : 'checkbox-blank-outline'}
                    size={25}
                    color={props.data.completed ? 'orange' : 'gray'}
                />       
            </TouchableOpacity> 
       </View>

       <View style={[styles.Asidecommon,{width:'75%'}]}>
            <Text style={{color:'#141414', fontSize:16,textTransform:'capitalize'}}>{props.data.content}</Text>
       </View>

       <View style={[styles.Asidecommon,{width:'18%',flexDirection:'row', justifyContent:'space-around'}]}>
            
            <TouchableOpacity onPress={()=>{props.deleteTask(props.data.id)}}>
                <Icon name="delete" size={22} color="red"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.editToggle(props.data.id, props.data.content)}}>
                <Icon name="edit" size={22} color="blue"/>
            </TouchableOpacity>
       </View>

    </View>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
    todoItemContainer:{
        backgroundColor: '#f0f0f0',
        width:'100%',
        minHeight:60, 
        marginVertical:5,
        paddingVertical:8,
        paddingHorizontal:6,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center'
    },
    Asidecommon:{

    }
})