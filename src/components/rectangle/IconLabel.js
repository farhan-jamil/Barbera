import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { bodySmall } from '../../utils/fonts'

export default function IconLabelArrow({ title, Icon, onPress }) {
    return (
        <TouchableHighlight style={[{
            paddingVertical: 12,
            flexDirection: 'row',
            alignItems: 'center'
        }]}
            onPress={onPress}
            underlayColor={colors.primary50}
        >
            <>
                {Icon}
                <Text style={[bodySmall, { marginLeft: 12, color: colors.neutral900 }]}>{title}</Text>
            </>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})