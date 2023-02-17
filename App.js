import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import { useState, useEffect, useCallback } from 'react';
import Messaging from './components/MessagingDone';
import Maps from './components/MapsDone';

export default function App() {

  return (
    // <Messaging/>
    <Maps />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
