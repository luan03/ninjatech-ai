import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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