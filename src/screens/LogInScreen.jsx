import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import AppBar from "../components/AppBar";
import Button from "../components/Button";
import firebase from "firebase";
import { useState, useEffect } from "react";

export default function LogInScreen(props){
    const { navigation } = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                navigation.reset({
                    index:0,
                    routes: [{name: "MemoList"}],
                });
            }
        });
        return unsubscribe;
    }, []);

function handlePress(){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((useCredential)=>{
        const { user } = useCredential;
        console.log(user.uid);
        navigation.reset({
            index:0,
            routes: [{name: "MemoList"}],
        });
    })
    .catch((error)=>{
        Alert.alert(error.code);
    })
}

    return(
        <View style={styles.container}>
           
            <View style={styles.LogInContainer}>
                <Text style={styles.title}>Log In</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => { setEmail(text); }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Adrress"
                    textContentType="emailAddress"
                    />
                
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => { setPassword(text); }}
                    autoCapitalize="none"
                    placeholder="Passwprd"
                    secureTextEntry
                    textContentType="password"
                />
                <Button
                label="Submit"
                onPress={handlePress}
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