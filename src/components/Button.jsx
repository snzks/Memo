import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { string } from "prop-types";

export default function Button(props){
    const {label} = props;
    return(
        <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>{label}</Text>
    </View>
    )
}

Button.PropTypes = {
    label:string.isRequired,
}


const styles= StyleSheet.create({
    buttonContainer:{
        backgroundColor:"#467FD3",
        borderRadius:4,
        alignSelf:"flex-start",
        marginBottom:24,
    },
    buttonLabel:{
        fontsize:16,
        lineHeight:32,
        paddingVertical:8,
        paddingHorizontal:32,
        color:"#ffffff"
    },
})