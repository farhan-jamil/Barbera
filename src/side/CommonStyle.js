import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral50
    },
    scrollContainer: {
        flexGrow: 1, paddingHorizontal: 16
    }
})