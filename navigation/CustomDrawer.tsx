import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer'
import { useState } from 'react';
import { styles } from './style';

export default function CustomDrawer(props) {

    const [visible, setVisible] = useState(true);

    return (
        <SafeAreaView>
            <View>
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
                    {visible ? <Image
                        style={styles.arrows}
                        source={require('../assets/icon-up.png')}
                    /> : <Image
                        style={styles.arrows}
                        source={require('../assets/icon-down.png')}
                    />}

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
            </View>
        </SafeAreaView>
    )
}