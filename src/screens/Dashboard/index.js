import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

import Header from '../../components/common/Header'
import TaskBox from '../../components/common/TaskBox'
import { useNavigation,useNavigationState  } from '@react-navigation/native';

const Dashboard = () => {
  const  navigation = useNavigation();  
  const data = [
    {
      id:1,
      title: 'To-Do List App',
      navigationPage:'Todo'
    },
    {
      id:2,
      title: 'Fetch and Display Data from an API',
      navigationPage:'FetchAndDisplay'
    },
    {
      id:3,
      title: 'Custom Modal Component',
      navigationPage:'CustomModalComponent'
    },
    {
      id:4,
      title: 'Simple Navigation Flow',
      navigationPage:'SimpleNavigation'
    },
    {
      id:5,
      title: 'Form with Validation',
      navigationPage:'FormValidation'
    },
  ]

  return (
    <View style={styles.mainContainer}>
       <Header navigation={navigation} title="Task List" back={false}/>
       <View style={styles.Container}>
        <FlatList 
          data={data} 
          style={styles.flatList}
          renderItem={({item})=>{ 
            return <TaskBox navigation={navigation} navigationPage={item.navigationPage} title={item.title}/>
          }}
          keyExtractor={(item) => item.id.toString()} // Added keyExtractor
        />
       </View> 
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  Container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#fff', 
    padding:12, 
  },
  flatList:{
    width: '100%', 
    marginTop:100
  }
})