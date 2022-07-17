import { StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../../utils/colors'
export default function SIcon({ alignSelf, iconName }) {
    return (
        <TouchableHighlight
            style={[Style.iconButton, { alignSelf: alignSelf }]}
            underlayColor={colors.neutral400}
        >
            <MaterialCommunityIcons name={iconName} color={colors.neutral900}
                size={24}

            />

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})