import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function ConfirmStatus() {
    return (
        <View style={[Style.container, { backgroundColor: colors.primary500 }]}>
            <Text style={[caption, { color: colors.neutral50 }]}>Confirmed</Text>
        </View>
    )
}

const styles = StyleSheet.create({})