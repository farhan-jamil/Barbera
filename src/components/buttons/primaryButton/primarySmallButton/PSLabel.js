import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import { colors } from '../../../../utils/colors'
import { subtitleLarge } from '../../../../utils/fonts'
export default function PSLabel({
    alignSelf,
    title,
    onPress,
}) {
    return (
        <TouchableHighlight
            style={[Style.container, { alignSelf: alignSelf }]}
            onPress={onPress}
            underlayColor={colors.primary700}
        >
            <Text
                style={[subtitleLarge, { color: colors.neutral50 }]}
            >{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})