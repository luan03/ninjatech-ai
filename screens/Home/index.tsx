import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './style';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../../assets/robot.png')}
      />

      <Text style={styles.title}>How may I help you today?</Text>
      <Text style={styles.intro}>Using this software, you can ask your questions and receive answers using artificial intelligence assistant</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Chat')
        }
      >
        <Text style={styles.textButton}>Start a new chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;