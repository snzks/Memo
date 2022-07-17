import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import firebase from 'firebase';


export default function LogoutButton() {
    const navigation = useNavigation();
    function handlePress() {
        firebase.auth().signOut()
            .then(() => {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LogIn' }],
                });
            })
            .catch(() => {
            Alert.alert("ログアウトに失敗しました")
        });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={style.label}>ログアウト</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    label: {
        fontSize: 14,
        color: "rgba(255,255,255,0.7)",
    },
})