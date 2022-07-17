import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../utils/colors'
import { subtitleLarge } from '../../../../utils/fonts'
export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    iconButton: {
        backgroundColor: colors.primary500,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
    }

})