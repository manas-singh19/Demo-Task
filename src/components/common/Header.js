import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
   
    return (
      <View style={styles.Header}>
        <View style={[styles.DividedApart,styles.Divided,{flexDirection:'row',justifyContent:'flex-start'}]}>
           {
            props.back&& (
              <TouchableOpacity onPress={()=>{
                props.navigation.goBack()
              }}> 
                <Icon name="chevron-back" size={22} color='#131313' />
              </TouchableOpacity>
            )
           } 
        </View> 
        <View style={[styles.DividedCenter,styles.Divided]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={[styles.DividedApart,styles.Divided]}>

        </View>
      </View>
    )
  
}

export default Header

const styles = StyleSheet.create({
    Header:{
        width:'100%',
        height:55,
        backgroundColor:'#FAFAFA',
        flexDirection:'row',  
        borderBottomWidth:1,
        borderBlockColor:"#eeeeee"
    },
    Divided:{
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center', 
        padding:10
    },
    DividedApart:{
      width:'25%', 
    },
    DividedCenter:{
      width:'50%',  
    },title:{
      color:'#131313',
      fontSize:16,
      fontWeight:'500'
    },
     
})