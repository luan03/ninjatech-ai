import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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