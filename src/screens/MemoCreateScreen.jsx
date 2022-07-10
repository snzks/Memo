import React from "react";
import { 
    View, Text, TextInput, StyleSheet , KeyboardAvoidingView, Keyboard
} from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

export default function MemoCreateScreen(){
    return(
        <KeyboardSafeView style={styles.container}>
            <AppBar />
            <View style={styles.inputContainer}>
                <TextInput Value="" multiline style={styles.input} onSubmitEditing={Keyboard.dismiss}></TextInput>
            </View>
            <CircleButton name="check" />
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