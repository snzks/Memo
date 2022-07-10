import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation} from "@react-navigation/native"

export default function MemoList() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
        style={styles.memoListItem}
        onPress={()=>{ navigation.navigate("MemoDetail");}}
        >
            <View>
                <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                <Text style={styles.memoListItemDate}> 2022年12月24日 10:00</Text>
            </View>
            <View style={styles.memoListButton}>
                <Text>
                    <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={()=>{ Alert.alert("Are you sure?");
                    }}>
                        <Feather name="x" size={16} color="#B0b0b0b0" />
                    </TouchableOpacity>
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    memoListItem: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: "center",
        borderColor: "rgba(0,0,0,0.15)",
        borderBottomWidth: 1,
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 10,
        lineHeight: 16,
        color: "#84848484",
    },
    memoDelete:{
        padding: 10,
    }
})