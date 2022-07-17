import { StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import { colors } from '../../../../utils/colors'

export default function SSIcon({ alignSelf, icon, onPress }) {
    return (
        <TouchableHighlight
            style={[Style.iconButton, { alignSelf: alignSelf }]}
            underlayColor={colors.neutral100}
            onPress={onPress}
        >
            {icon}

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})