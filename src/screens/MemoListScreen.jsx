import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';
import { Feather } from '@expo/vector-icons'; 


export default function App() {
  return (
    <View style={styles.container}>
    <AppBar />
    <MemoList></MemoList>
    <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
})