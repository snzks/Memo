import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';
import { Feather } from '@expo/vector-icons'; 
import LogoutButton from '../components/LogOutButton';


export default function App(props) {
    const {navigation} = props;
    useEffect(()=>{
      navigation.setOptions({
        headerRight:()=> <LogoutButton />,
    }) ;
    },[]);
  return (
    <View style={styles.container}>
    <MemoList></MemoList>
    <MemoList></MemoList>
    <MemoList></MemoList>
    <MemoList></MemoList>
    <CircleButton
    name="plus"
    onPress={()=>{ navigation.navigate("MemoCreate");}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
})