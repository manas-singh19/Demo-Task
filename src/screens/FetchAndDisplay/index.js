import { FlatList, StyleSheet, ActivityIndicator, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/common/Header'
import { useNavigation } from '@react-navigation/native';

import FetchDisplayItem from '../../components/fetchAndDisplay';

export function generateRandomThreeDigitNumber() {
    return Math.floor(100 + Math.random() * 900);
  }

const FetchAndDisplay = () => {
  const navigation = useNavigation();

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');
  
  useEffect(()=>{
     // Fetch data when the component mounts
    const fetchData = async () => {
        setLoading(true);
        setError('');
        setTodos([]);
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
          console.log(response.status)
          
          if(response.status == 200){
            const data = await response.json();
            setTodos(data.slice(0, 20)); // Get first 20 todos for simplicity 
          }

          if(response.status !== 200){ 
            setTodos([]);
            setError('Something went wrong please try again later.')
          }
         
        } catch (error) {
          console.error('Error fetching data:', error); 
          setError('Something went wrong please try again later.')
          setTodos([]);
        }
        finally{
            setLoading(false);
        }
      };
  
      fetchData();
  },[]);

  return (
    <View
    style={styles.mainContainer} 
  >
    <Header navigation={navigation} title="Fetch and Display Data" back={true} />
    <View style={styles.Container}>

        {
            loading&&(
                <ActivityIndicator size="large" color="#0000ff" style={{marginTop:290}}/>
            )
        }

        {
            error&&(
                <View style={{width:'100%', height:90, justifyContent:'center',alignContent:'center', alignItems:'center'}}>
                    <Text style={{color:"#141414", fontSize:14, fontWeight:'500'}}>{error}</Text>
                </View>
            )
        }

        <FlatList 
            data={todos}
            keyExtractor={(item) => item.id}  
            renderItem={({index,item})=>{ 
                return <FetchDisplayItem key={index} data={item}/>
            }}
        />

    </View>
    </View>    
  )
}

export default FetchAndDisplay

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
})