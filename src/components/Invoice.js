import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { bodySmall } from '../utils/fonts'
export default function Invoice({ title, price }) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between', alignItems: 'center', marginTop: 8
        }}>
            <Text style={[bodySmall, { color: colors.neutral700 }]}>{title}</Text>
            <Text style={[bodySmall, { color: colors.neutral900 }]}>${price}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})