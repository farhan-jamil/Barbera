import { StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'
import LeftHeader from '../../../../components/headers/LeftHeader'
import { bodySmall, subtitleSmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import NotifySetting from '../../../../components/NotifySetting'
import CommonStyle from '../../../CommonStyle'
export default function NotificationSetting({ navigation }) {
    const [newBooking, setNewBooking] = useState(false)
    const [snoozeBooking, setSnoozeBooking] = useState(false)
    const [emailNotification, setEmailNotification] = useState(false)
    return (
        <View style={CommonStyle.container}>
            <LeftHeader title={'Notification Setting'}
                onPress={() => { navigation.goBack() }}
            />
            {/* <LeftHeader title={'Notification Setting'} /> */}
            <View style={{ marginTop: 16 }}>
                <NotifySetting
                    title={'New Bookings'}
                    description={'This is description'}
                    value={newBooking}
                    onValueChange={() => setNewBooking(previousState => !previousState)}
                // onValueChange={setNewBooking((value) => !value)}
                />
                <NotifySetting
                    title={'Snooze Bookings'}
                    description={'This is description'}
                    value={snoozeBooking}
                    onValueChange={() => setSnoozeBooking(previousState => !previousState)}
                />
                <NotifySetting
                    title={'Email Notifications'}
                    description={'This is description'}
                    value={emailNotification}
                    onValueChange={() => setEmailNotification(previousState => !previousState)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})