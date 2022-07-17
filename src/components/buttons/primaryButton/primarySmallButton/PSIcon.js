import { StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../../utils/colors'

export default function PSIcon({ alignSelf }) {
    return (
        <TouchableHighlight
            style={[Style.iconButton, { alignSelf: alignSelf }]}
            underlayColor={colors.primary700}
        >
            <MaterialCommunityIcons name='account' color={colors.neutral50}
                size={20}

            />

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})