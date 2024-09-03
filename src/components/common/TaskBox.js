import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TaskBox = (props) => {
  return (
    <TouchableOpacity style={styles.TaxkBox} onPress={()=>{
        props.navigation.navigate(`${props.navigationPage}`)
    }}>
     <Text style={styles.TeckBoxText}>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default TaskBox;

const styles = StyleSheet.create({
    TaxkBox:{
        width:'100%',
        height:60,
        backgroundColor:'#fafafa',
        borderRadius:12,
        justifyContent:'center',
        alignItems: 'center',
        alignContent :'center',
        borderColor:"#eeeeee",
        borderWidth:2,
        marginVertical:6
      },
      TeckBoxText:{
        fontSize:16,
        fontWeight:'500',
        color:'#131313'
      }
})