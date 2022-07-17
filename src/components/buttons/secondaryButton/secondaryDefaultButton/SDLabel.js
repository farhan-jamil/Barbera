import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import { colors } from '../../../../utils/colors'
import { subtitleLarge } from '../../../../utils/fonts'
export default function SDLabel({ alignSelf, title, onPress, select }) {
    return (
        <TouchableHighlight
            style={[Style.container, {
                alignSelf: alignSelf,
                backgroundColor: select ? colors.primary50 : colors.neutral50,
            }]}
            onPress={onPress}
            underlayColor={colors.neutral400}
        >

            <Text
                style={[subtitleLarge, { color: colors.neutral900 }]}
            >{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})