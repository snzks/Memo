import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';
import LogoutButton from '../components/LogOutButton';
import firebase from 'firebase';
import {doc, onSnapshot} from 'firebase/firestore';

export default function App(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

useEffect(()=>{
  const db= firebase.firestore();
  const { currentUser } = firebase.auth();
  let unsubscribe =()=>{};
  if(currentUser){
  const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt','desc');
  unsubscribe = ref.onSnapshot((snapshot)=>{
    const userMemos = [];
    snapshot.forEach((doc)=>{
      const data = doc.data();
      userMemos.push({
        id:doc.id,
        bodyText: data.bodyText,
        updatedAt: data.updatedAt.toDate(),
      });
    });
    setMemos(userMemos);
  },(error)=>{
    console.log(error);
    Alert.alert("error");
  });
  }
  return unsubscribe;
},[]);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate("MemoCreate"); }}
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