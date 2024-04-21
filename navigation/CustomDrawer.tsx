import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer'
import { useState } from 'react';
import { styles } from './style';

// In order to comply with the requirements, a custom drawer was implemented
export default function CustomDrawer(props) {

    const [visible, setVisible] = useState(true);
    const iconArrows = visible ? require('../assets/icon-up.png') : require('../assets/icon-down.png');

    return (
        <SafeAreaView>
            <DrawerItemList {...props} />
            <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.menu]}
                onPress={() => { setVisible(visible => !visible) }}>
                <Image
                    style={styles.image}
                    source={require('../assets/icon-todo.png')}
                />
                <Text>TASKS</Text>

                <Image style={styles.arrows} source={iconArrows} />
            </TouchableOpacity>

            {visible &&
                <View>
                    <View style={styles.task}>
                        <Image
                            style={styles.check}
                            source={require('../assets/icon-check.png')}
                        />
                        <Text>Send an e-mail</Text>
                    </View>
                    <View style={styles.task}>
                        <Image
                            style={styles.check}
                            source={require('../assets/icon-check.png')}
                        />
                        <Text>Create a meeting</Text>
                    </View>
                    <View style={styles.task}>
                        <Image
                            style={styles.check}
                            source={require('../assets/icon-check.png')}
                        />
                        <Text>Block Calendar</Text>
                    </View>
                </View>
            }
        </SafeAreaView>
    )
}