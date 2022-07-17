import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { bodySmall, subtitleSmall } from '../utils/fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SSIcon from './buttons/secondaryButton/secondarySmallButton/SSIcon'
export default function DisplayDateTime({ screenName, onPress }) {
    return (
        <View>
            {
                screenName === 'Booking' ?
                    <View style={{ marginBottom: 8 }}>
                        <Text
                            style={[subtitleSmall, { color: colors.neutral900 }]}>
                            Date and Time</Text>
                    </View>
                    :
                    <View style={styles.titleWrapper}>
                        <Text
                            style={[subtitleSmall, { color: colors.neutral900 }]}>
                            Date and Time</Text>
                        <SSIcon
                            icon={
                                <MaterialIcons name='edit'
                                    size={20} color={colors.primary500} />
                            }
                            onPress={onPress}
                        />
                    </View>
            }

            <View style={styles.align}>
                <MaterialCommunityIcons name='calendar-blank-outline' size={24}
                    color={colors.primary500}
                />
                <Text
                    style={[bodySmall, { color: colors.neutral900, marginLeft: 8 }]}>
                    Fri, March 26 </Text>
            </View>
            <View style={[styles.align, { marginTop: 10 }]}>
                <MaterialCommunityIcons name='clock-outline' size={24}
                    color={colors.primary500}
                />
                <Text style={[bodySmall,
                    { color: colors.neutral900, marginLeft: 8 }]}>
                    10:00 - 10:30 am</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    align: {
        flexDirection: 'row', alignItems: 'center'
    }
})