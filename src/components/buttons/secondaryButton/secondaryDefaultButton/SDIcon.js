import { StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../../utils/colors'
export default function SDIcon({ alignSelf, Icon }) {
    return (
        <TouchableHighlight
            style={[Style.iconButton, { alignSelf: alignSelf }]}
            underlayColor={colors.neutral400}
        >
            <>
                {Icon}
            </>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})