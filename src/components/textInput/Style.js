import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
export default StyleSheet.create({

    textInputWarpper: {
        flexDirection: "row", alignItems: 'center',
        borderRadius: 7, backgroundColor: colors.neutral50,
        marginTop: 4,
        borderWidth: 1,
        borderColor: colors.neutral400,
        // paddingVertical:8,
        paddingHorizontal: 8
    },
    input: {
        flex: 1,
        color: colors.neutral900
    },
})