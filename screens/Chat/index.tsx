import { styles } from './style';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useChat } from 'hooks/useChat';

const Chat = () => {

  const { handleNewMessage, conversations, aiMessage, userMessage, setUserMessage } = useChat();

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

export default Chat;