import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";
import { useState, useEffect, useCallback } from 'react';

export default function Messaging() {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
        {
            _id: Math.round(Math.random() * 1000000),
            text: '#awesome',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'Developer',
            },
          },
          {
            _id: Math.round(Math.random() * 1000000),
            text: 'Palo Alto',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
            },
            sent: true,
            received: true,
          },
          {
            _id: Math.round(Math.random() * 1000000),
            text: 'Where are you?',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'Developer',
            },
          },
          {
            _id: Math.round(Math.random() * 1000000),
            text: 'Yes, and I use Gifted Chat!',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
            },
            sent: true,
            received: true
          },
          {
            _id: Math.round(Math.random() * 1000000),
            text: 'Are you building a chat app?',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'Developer',
            },
          },
          {
            _id: Math.round(Math.random() * 1000000),
            text: "You are officially rocking GiftedChat.",
            createdAt: new Date(),
            system: true,
          },
    
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);
  
  return (
    <View style={styles.container}>
        <GiftedChat 
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

