import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../utils/colors';
import { subtitleLarge } from '../../utils/fonts';
import { Divider } from 'react-native-elements'

export default function LeftRightHeader({ title, rightIcon, onPress }) {
    return (
        <View style={{ width: '100%', backgroundColor: colors.neutral50 }}>
            <View style={{
                paddingVertical: 12, paddingHorizontal: 16, flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between',
            }}>
                <TouchableOpacity style={{ flex: 0.2, justifyContent: 'center' }}
                    onPress={onPress}>
                    <Ionicons name="chevron-back-sharp" size={24} color={colors.neutral900} />

                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[subtitleLarge, { color: colors.neutral900 }]}>
                        {title}</Text>
                </View>
                <View style={{ flex: 0.2, alignItems: 'flex-end' }}
                    onPress={onPress}
                >
                    {rightIcon}
                </View>
            </View>
            <Divider width={1}  color={colors.neutral400} />
        </View>
    )
}

const styles = StyleSheet.create({})