import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/common/Header';
 

const DetailScreen = ({route,navigation}) => { 
  const { itemId, otherParam } = route.params;
  console.log({
    itemId,
    otherParam
  })
  return (
    <View style={styles.mainContainer}>
    <Header navigation={navigation} title="Detail Screen" back={true} />
    <View style={styles.Container}>
         <View style={styles.boxItem}>
           <Text style={styles.text}>Welcome to Detail Screen</Text>
         </View>
         <View style={styles.boxItem}>  
            <Text style={{color:'#000', fontSize:14}}>Data from Home screen</Text>
            <Text style={{marginVertical:8, color:'gray', fontSize:16}}>{itemId}: {otherParam}</Text>
         </View>   
          
    </View>
  </View>  
  )
}

export default DetailScreen

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