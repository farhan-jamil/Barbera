import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bodySmall, titleSmall } from '../utils/fonts'
import { colors } from '../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function RatingCard() {
    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center',
            marginHorizontal: 16,
            backgroundColor: colors.primary50,
            borderRadius: 10
        }}>
            <View style={{ flex: 1, margin: 12 }}>
                <Text style={[bodySmall, { color: colors.neutral900 }]}>Average Rating</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name='star' size={24}
                        color={colors.primary500} />
                    <Text style={[titleSmall, { color: colors.neutral900 }]}>  4.9</Text>
                </View>
            </View>
            <View style={{ flex: 1, margin: 12 }}>
                <Text style={[bodySmall, { color: colors.neutral900 }]}>Total reviews</Text>
                <Text style={[titleSmall, { color: colors.neutral900 }]}>64</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})