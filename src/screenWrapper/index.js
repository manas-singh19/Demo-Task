import React from "react"; 
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";


const ScreenWrapper = ({children})=>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>  
            {children}
        </SafeAreaView>
    )
}

export default ScreenWrapper;