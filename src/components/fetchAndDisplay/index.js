import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FetchDisplayItem = (props) => {
  return (
    <View style={[styles.ItemList]}>
         <View style={styles.innerItem}>
            <Text style={{color:'#141414', textTransform:'capitalize'}}>{props.data.id}: {props.data.title}</Text>
         </View> 
    </View>
  )
}

export default FetchDisplayItem

const styles = StyleSheet.create({
    ItemList:{
        width:'100%',
        minHeight:60,  
        justifyContent:'center',
        alignItems: 'center',
        alignContent:'center', 
        paddingHorizontal:12
    },
    innerItem:{
        backgroundColor:'#ddd', width:'100%',minHeight:45,justifyContent:'center',
        alignItems: 'flex-start',
        alignContent:'center', paddingHorizontal:10, paddingVertical:4, 
        borderRadius:12,
        borderWidth:1,
        borderColor:'#eee'
    }
})