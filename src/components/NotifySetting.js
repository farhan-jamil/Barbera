import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { subtitleSmall, bodySmall } from '../utils/fonts'
import { Divider } from 'react-native-elements'
export default function NotifySetting({
    title,
    description,
    value,
    onValueChange

}) {
    return (
        <View style={{ paddingHorizontal: 16, }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center',
                paddingVertical: 12,
                backgroundColor: colors.neutral50
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{title}</Text>
                    <Text style={[bodySmall, { color: colors.neutral700 }]}>{description}</Text>
                </View>
                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    thumbColor={value ? colors.primary500 : "#f4f3f4"}
                    trackColor={{ false: "#767577", true: colors.primary200 }}
                />

            </View>
            <Divider width={1} color={colors.neutral400} />
        </View>
    )
}

const styles = StyleSheet.create({})