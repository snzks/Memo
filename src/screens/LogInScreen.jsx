import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AppBar from "../components/AppBar";
import Button from "../components/Button";

export default function LogInScreen(props){
    const { navigation } = props;
    return(
        <View style={styles.container}>
           
            <View style={styles.LogInContainer}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input}>Email</TextInput>
                <TextInput style={styles.input}>Password</TextInput>
                <Button
                label="Submit"
                onPress={()=>{ navigation.reset({
                    index:0,
                    routes: [{ name:"MemoList"}],
                });
            }}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registerd?</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        navigation.reset({
                            index:0,
                            routes:[{ name:"SignUp"}],
                        });
                    }}
                    >
                    <Text style={styles.footerLink}>Sign up here!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f0f4f8",
    },
    LogInContainer:{
        paddingHorizontal:27,
        paddingVertical:24,
    },
    title:{
        fontSize:24,
        height:32,
        fontWeight:"bold",
        marginBottom:24,
    },
    input:{
        fontSize:16,
        height:48,
        borderColor:"#DDDDDD",
        borderWidth:1,
        backgroundColor:"#ffffff",
        paddingHorizontal:8,
        marginBottom:16,
    },
    footerText:{
        fontSize:14,
        lineHeight:24,
    },
    footerLink:{
        fontSize:14,
        lineHeight:24,
        color:"#467fd3",
        marginLeft:8,
    },
    footer:{
        flexDirection:"row",
    }
})