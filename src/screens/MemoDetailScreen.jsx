import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";
import {shape, string} from 'prop-types';
import firebase from 'firebase';
import { dateToString } from "../utils";

export default function MemoDetailScreen(props) {
    const { navigation, route } = props;
    const {id}=route.params;
    const [memo, setMemo] = useState(null);
    useEffect(()=>{
        const { currentUser} = firebase.auth();
        let unsubscribe=()=>{};
        if(currentUser){
        const db = firebase.firestore();
        const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
        unsubscribe = ref.onSnapshot((doc)=>{
            console.log(doc.id,doc.data());
            const data = doc.data();
            setMemo({
                id: doc.id,
                bodyText: data.bodyText,
                updatedAt: data.updatedAt.toDate(),
            });
        });
    }
        return unsubscribe;
    },[]);


        return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
                <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    {memo && memo.bodyText}
                </Text>
            </ScrollView>
            <CircleButton
            name="edit-2"
            style={{top:60,bottom:"auto"}}
            onPress={()=>{ navigation.navigate("MemoEdit") }}
            />
        </View>
    )
}


MemoDetailScreen.propTypes={
    route: shape({
        params:shape({ id :string}),
    }).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffffff",
    },
    memoHeader: {
        backgroundColor: "#467FD3",
        height: 96,
        justifyContent: "center",
        paddingHorizontal: 19,
        paddingHorizontal: 24,
    },
    memoTitle: {
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 32,
        fontWeight: "bold",
    },
    memoDate: {
        color: "#ffffff",
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,

    }
})