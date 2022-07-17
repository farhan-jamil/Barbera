import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/colors'

export default StyleSheet.create({

    container: {
        backgroundColor: colors.neutral50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        borderColor: colors.neutral400,
        borderWidth: 1
    },
    iconButton: {
        backgroundColor: colors.neutral50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 10,
        borderColor: colors.neutral400,
        borderWidth: 1
    }

})