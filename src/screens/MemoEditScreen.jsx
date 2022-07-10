import React from "react";
import { 
    View, Text, TextInput, StyleSheet , KeyboardAvoidingView
} from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoEditScreen(){
    return(
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <AppBar />
            <View style={styles.inputContainer}>
                <TextInput Value="aaaa" multiline style={styles.input}>aaaa</TextInput>
            </View>
            <CircleButton name="check" />
        </KeyboardAvoidingView>
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