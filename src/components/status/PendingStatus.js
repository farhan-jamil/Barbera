import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function PendingStatus() {
    return (
        <View style={[Style.container, { backgroundColor: colors.warning500 }]}>
            <Text style={[caption, { color: colors.neutral900 }]}>Pending</Text>
        </View>
    )
}

const styles = StyleSheet.create({})