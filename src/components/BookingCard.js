import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { bodySmall, caption } from '../utils/fonts'
import UserInfoCard from './UserInfoCard'
import SDIcon from './buttons/secondaryButton/secondaryDefaultButton/SDIcon'
import SDLabel from './buttons/secondaryButton/secondaryDefaultButton/SDLabel'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function BookingCard({ onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.container}>
            <View style={styles.firstContainer}>
                <View style={styles.iconTextWrapper}>
                    <MaterialCommunityIcons name='calendar-blank-outline' size={24}
                        color={colors.primary500}
                    />
                    <Text
                        style={[bodySmall, { color: colors.neutral900, marginLeft: 8 }]}>
                        Fri, March 26 </Text>
                </View>
                <View style={styles.iconTextWrapper}>
                    <MaterialCommunityIcons name='clock-outline' size={24}
                        color={colors.primary500}
                    />
                    <Text style={[bodySmall,
                        { color: colors.neutral900, marginLeft: 8 }]}>
                        10:00 - 10:30 am</Text>
                </View>
            </View>
            {/* Second Half */}
            <View style={styles.secondContainer}>

                <UserInfoCard />

                <View style={[{ marginTop: 10 }, styles.iconTextWrapper]}>
                    <View style={{ flex: 1 }}>
                        <Text style={[caption, { color: colors.neutral700 }]}>3 Services</Text>
                        <Text style={[bodySmall, { color: colors.neutral900 }]}>Hair cut, Beard & Mustachesda</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Text style={[caption, { color: colors.neutral700 }]}>Cost</Text>
                        <Text style={[bodySmall, { color: colors.neutral900 }]}>$40.0</Text>
                    </View>

                </View>
                <View style={[{ marginTop: 10 }, styles.iconTextWrapper]}>
                    <SDIcon alignSelf='baseline'
                        Icon={<MaterialCommunityIcons name='message-text-outline' size={24}
                            color={colors.neutral900}
                        />}
                    />
                    <View style={{ marginRight: 10 }} />
                    <SDIcon alignSelf='baseline'
                        Icon={<Ionicons name='call-outline' size={24}
                            color={colors.neutral900}
                        />}
                    />
                    <View style={{ marginRight: 10 }} />
                    <View style={{ flex: 1 }} >
                        <SDLabel title='Reschedule' />
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16, marginVertical: 12, backgroundColor: colors.neutral50,
        borderRadius: 10,
        elevation: 5,
        shadowColor: colors.neutral900
    },
    firstContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', backgroundColor: colors.primary50,
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        paddingVertical: 8, paddingHorizontal: 12
    },
    iconTextWrapper: {
        flexDirection: 'row', alignItems: 'center'
    },
    secondContainer: {
        backgroundColor: colors.neutral50, borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 12
    }
})