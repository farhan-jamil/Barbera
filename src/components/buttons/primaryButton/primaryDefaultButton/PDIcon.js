import { StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import { colors } from '../../../../utils/colors'

export default function PDIcon({ alignSelf, icon }) {
    return (
        <TouchableHighlight
            style={[Style.iconButton, { alignSelf: alignSelf }]}
            underlayColor={colors.primary700}
        >
            <>
                {icon}
            </>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})