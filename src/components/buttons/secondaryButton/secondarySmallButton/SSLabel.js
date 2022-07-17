import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import { colors } from '../../../../utils/colors'
import { subtitleLarge } from '../../../../utils/fonts'
export default function SSLabel({
    alignSelf,
    title,
    onPress,
}) {
    return (
        <TouchableHighlight
            style={[Style.container, { alignSelf: alignSelf }]}
            onPress={onPress}
            underlayColor={colors.neutral100}
        >
            <Text
                style={[subtitleLarge, { color: colors.neutral900 }]}
            >{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})