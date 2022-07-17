import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../../utils/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.neutral50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 10,
    },
    iconButton: {
        backgroundColor: colors.neutral50,
        justifyContent: 'center',
        padding: 4,
        alignItems: 'center',
        borderRadius: 10,
    }

})