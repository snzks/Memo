import React from "react";
import { 
    View, Text, TextInput, StyleSheet , KeyboardAvoidingView,Alert
} from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

export default function MemoEditScreen(props){
    const { navigation} = props;
    return(
        <KeyboardSafeView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput Value="aaaa" multiline style={styles.input}>aaaa</TextInput>
            </View>
            <CircleButton
            name="check"
            onPress={()=>{ navigation.goBack(); }} />
        </KeyboardSafeView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inputContainer:{
        flex:1,
        paddingHorizontal:27,
        paddingVertical:32,
    },
    input:{
        flex:1,
        textAlignVertical:"top",
        fontSize:16,
        lineHeight:24,
        color:"#000000",
    }

})