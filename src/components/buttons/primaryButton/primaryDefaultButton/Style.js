import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../../utils/colors'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    iconButton: {
        backgroundColor: colors.primary500,
        justifyContent: 'center',
        padding: 8,
        alignItems: 'center',
        borderRadius: 10,
    }

})