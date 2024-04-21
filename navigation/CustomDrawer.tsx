import { Text, View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer'
import { useState } from 'react';

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

const constant = {
    SPACING: 16,
    borderRadius: 10,
}

const styles = StyleSheet.create({
    menu: {
        marginHorizontal: constant.SPACING / 1.7,
        marginVertical: constant.SPACING / 2.5,
        borderRadius: constant.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
    },
    task: {
        marginHorizontal: constant.SPACING / 1.7,
        marginVertical: constant.SPACING / 2.5,
        borderRadius: constant.borderRadius,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: 20,
        width: 20,
        marginRight: 8,
    },
    check: {
        resizeMode: 'contain',
        height: 15,
        width: 15,
        marginRight: 8,
    },
    arrows: {
        resizeMode: 'contain',
        height: 10,
        width: 10,
        marginLeft: 170,
        flex: 1
    },
})