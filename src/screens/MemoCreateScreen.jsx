import React, { useState } from "react";
import {
    View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Keyboard, Alert
} from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";
import firebase from "firebase";

export default function MemoCreateScreen(props) {
    const [bodyText, setBodyText] = useState('');
    const { navigation } = props;
    function handlePress() {
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser.uid}/memos`);
        ref.add({
            bodyText,
            updatedAt: new Date(),
        })
            .then((docRef) => {
                Alert.alert(docRef.id);
            })
            .catch((error) => {
                Alert.alert(error);
            })
        navigation.goBack();
    }

    return (
        <KeyboardSafeView style={styles.container}>

            <View style={styles.inputContainer}>
                <TextInput
                    Value={bodyText}
                    multiline
                    style={styles.input}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={(text)=>{setBodyText(text);}}
                    autoFocus
                    />
            </View>
            <CircleButton
                name="check"
                onPress={handlePress}
            />
        </KeyboardSafeView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 27,
        paddingVertical: 32,
    },
    input: {
        flex: 1,
        textAlignVertical: "top",
        fontSize: 16,
        lineHeight: 24,
        color: "#000000",
    }

})