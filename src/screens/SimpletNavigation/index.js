import { StyleSheet, Text, Button, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import Header from '../../components/common/Header'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [data,setData] = useState({
    id:1,
    otherdata:"Data pass to Detailed screen"
  });

  const handleNavihation = ()=>{
    navigation.navigate('DetailScreen',
      {
        itemId: data.id,
        otherParam: data.otherdata,
      }
    )
  }

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title="Home Screen" back={false} />
      <View style={styles.Container}>
           <View style={styles.boxItem}>
             <Text style={styles.text}>Welcome to Home Screen</Text>
           </View>
           <View style={styles.boxItem}>  
              <Button title=" Go to Details Screen" onPress={() => handleNavihation()} style={{backgroundColor:'red'}}/> 
           </View> 
           <View style={[styles.boxItem,{marginTop:0, height:20}]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color:'gray', fontSize:14, fontWeight:'bold'}} >
                  Go back to Dashboard
                </Text>
              </TouchableOpacity>
           </View> 
      </View>
    </View>  
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  text:{
    color:'#141414',
    fontSize:22,
    fontWeight:'bold',
  },
  boxItem:{
    width:'100%', height:90, justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:33
  }
})