import { useState, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import EventSource from "react-native-sse";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [aiMessage, setAiMessage] = useState('');
  const [userMessage, setUserMessage] = useState('');

  // SSE
  const OpenAIToken = 'sk-proj-dqG4nbHbLdkDIni8L10ST3BlbkFJsPrnc60F14Z964bEDowm';

  const handleNewMessage = useCallback(async () => {

    if (userMessage === '') {
      return;
    }

    const es = new EventSource(
      "https://api.openai.com/v1/chat/completions",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OpenAIToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          model: "gpt-3.5-turbo-0125",
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant.",
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          max_tokens: 600,
          n: 1,
          temperature: 0.7,
          stream: true,
        }),
        pollingInterval: 0,
      }
    );

    es.addEventListener("open", () => {
      setConversations((prev) => {
        return [
          ...prev,
          {
            message: userMessage,
            isHuman: true,
          },
        ];
      });

      setUserMessage("");
    });

    es.addEventListener("message", (event) => {
      if (event.data !== "[DONE]") {
        const data = JSON.parse(event.data);

        if (data.choices[0].delta.content !== undefined) {
          setAiMessage((text) => text + data.choices[0].delta.content);
        }
      }
    });

    setConversations((prev) => {
      return [
        ...prev,
        {
          message: aiMessage,
          isHuman: false,
        },
      ];
    });

    setAiMessage("");

    return () => {
      es.removeAllEventListeners();
      es.close();
    };

  }, [userMessage]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <ScrollView style={styles.scroll}>
          <View style={styles.messages}>

            {conversations &&
              conversations.map((conversation, index) => {
                if (conversation.message === '') return;

                return (
                  <View style={[styles.message, { backgroundColor: conversation.isHuman ? "lightblue" : "white", }]} key={index}>
                    <Text>{conversation.message}</Text>
                  </View>
                )
              })
            }

            {aiMessage &&
              <View style={[styles.message, { backgroundColor: "white", }]}>
                <Text>{aiMessage}</Text>
              </View>
            }

          </View>
        </ScrollView>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setUserMessage(value)}
            placeholder="Write your message"
            placeholderTextColor="#707185"
            value={userMessage} />
          <TouchableOpacity
            style={styles.button}
            onPress={handleNewMessage}
          >
            <Image
              style={styles.image}
              source={require('../../assets/icon-send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    justifyContent: 'flex-end',
  },
  messages: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  message: {
    backgroundColor: '#CCF0FA',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginBottom: 20,
    borderTopLeftRadius: 0,
  },
  form: {
    alignItems: "center",
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#242534',
    backgroundColor: '#1E1E2D',
    borderRadius: 30,
    paddingHorizontal: 30,
    color: '#ffffff'
  },
  button: {
    alignItems: "center",
    backgroundColor: '#CCF0FA',
    borderRadius: 30,
    color: '#000007',
    width: 45,
    height: 45,
    justifyContent: 'center',
    marginLeft: 15,
  },
  image: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#161622',
  },
});

export default Chat;