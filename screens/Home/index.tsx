import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Home = ({navigation}) => {
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#161622',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    image: {
      resizeMode: 'contain',
      height: 100,
      width: 200,
      flex: 1
    },
    title: {
      color: '#ffffff',
      fontSize: 25,
      fontWeight: '700',
      width: '50%',
      textAlign: 'center',
      lineHeight: 30,
      marginBottom: 12
    },
    intro: {
      color: '#ffffff',
      fontSize: 13,
      fontWeight: '400',
      width: '65%',
      textAlign: 'center',
      lineHeight: 16,
      marginBottom: 30
    },
    button: {
      backgroundColor: '#CCF0FA',
      padding: 10,
      borderRadius: 30,
      color: '#000007',
      marginBottom: 40,
      width: '90%'
    },
    textButton: {
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      height: 35,
      lineHeight: 35
    },
  });

  export default Home;