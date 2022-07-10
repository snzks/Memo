import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import CircleButton from './src/components/CircleButton';
import MemoList from './src/components/MemoList';

export default function App() {
  return (
    <View style={styles.container}>
    <AppBar />
    <MemoList></MemoList>
    <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
