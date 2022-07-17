import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { subtitleLarge } from '../../utils/fonts'
import { Divider } from 'react-native-elements'

export default function SimpleHeader({ title }) {
    return (
        <>
            <View style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                backgroundColor: colors.neutral50,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={[subtitleLarge, { color: colors.neutral900 }]}>{title}</Text>
            </View>
            <Divider width={1} color={colors.neutral400} />
        </>
    )
}

const styles = StyleSheet.create({})