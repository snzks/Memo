import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AppBar from "../components/AppBar";
import Button from "../components/Button";

export default function SignUpScreen(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>

            <View style={styles.LogInContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input}>Email</TextInput>
                <TextInput style={styles.input}>Password</TextInput>
                <Button
                    label="Submit"
                    onPress={() => { navigation.navigate("LogIn") }}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registerd?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: "LogIn" }],
                            });
                        }}>
                        <Text style={styles.footerLink}>Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8",
    },
    LogInContainer: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        height: 32,
        fontWeight: "bold",
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: "#DDDDDD",
        borderWidth: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: "#467fd3",
        marginLeft: 8,
    },
    footer: {
        flexDirection: "row",
    }
})