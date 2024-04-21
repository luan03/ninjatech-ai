import { StyleSheet } from 'react-native';

const constant = {
    SPACING: 16,
    borderRadius: 10,
}

export const styles = StyleSheet.create({
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