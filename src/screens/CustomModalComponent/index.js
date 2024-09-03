import { View, Button, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import CustomModal from '../../components/customModal';
import Header from '../../components/common/Header';
import { useNavigation } from '@react-navigation/native';


const CustomModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const handleConfirm = () => {
      setModalVisible(false);
      // Add your confirm action logic here
      console.log('Confirmed!');
    };
  
    const handleCancel = () => {
      setModalVisible(false);
      // Add your cancel action logic here
      console.log('Cancelled!');
    };
  
    return (
    //   <View style={styles.container}>

   
    //   </View>
    <View style={styles.mainContainer} >
            <Header navigation={navigation} title="Custom Modal" back={true} />
            <View style={[styles.Container,{paddingTop:40, padding:12}]}>
                <Button title="Show Custom Modal" onPress={() => setModalVisible(true)} />
                <CustomModal
                visible={modalVisible}
                title="Confirm Action"
                bodyContent={<Text>Are you sure you want to proceed?</Text>}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                />
            </View>
    </View>
    );
}

export default CustomModalComponent

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