import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    line: {
        flexDirection: 'row',
    },
    ball: {
        height: 50,
        width: 50,
        marginLeft: 1,
        marginRight: 1,
        borderRadius: 50,
        backgroundColor: 'black',
    },
})

export default styles