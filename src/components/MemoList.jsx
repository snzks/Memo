import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { shape, string, instanceOf, arrayOf } from "prop-types";

export default function MemoList(props) {
    const { memos } = props;
    const navigation = useNavigation();
    return (
        <View>
            { memos.map((memo) => (
                <TouchableOpacity
                    key={memo.id}
                    style={styles.memoListItem}
                    onPress={() => { navigation.navigate("MemoDetail"); }}
                >
                    <View>
                        <Text style={styles.memoListItemTitle}>{memo.bodyText}</Text>
                        <Text style={styles.memoListItemDate}> {String(memo.updatedAt)}</Text>
                    </View>
                    <View style={styles.memoListButton}>
                        <Text>
                            <TouchableOpacity
                                style={styles.memoDelete}
                                onPress={() => {
                                    Alert.alert("Are you sure?");
                                }}>
                                <Feather name="x" size={16} color="#B0b0b0b0" />
                            </TouchableOpacity>
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}

        </View>
    )
}

MemoList.propTypes = {
    memos: arrayOf(shape({
        id: string,
        bodyText: string,
        updatedAt: instanceOf(Date),
    })).isRequired,
};

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
    memoDelete: {
        padding: 10,
    }
})