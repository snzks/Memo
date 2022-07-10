import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MemoList(){
    return(
    <View style={styles.memoListItem}>
    <View>
      <Text style={styles.memoListItemTitle}>買い物リスト</Text>
      <Text style={styles.memoListItemDate}> 2022年12月24日 10:00</Text>
    </View>
    <View style={styles.memoListButton}>
      <Text>X</Text>
    </View>
  </View>
    )
}

const styles = StyleSheet.create({
    memoListItem:{
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: "center",
        borderColor: "rgba(0,0,0,0.15)",
        borderBottomWidth:1,
      },
      memoListItemTitle:{
        fontSize: 16,
        lineHeight: 32,
      },
      memoListItemDate:{
        fontSize: 10,
        lineHeight: 16,
        color: "#84848484",
      },
})