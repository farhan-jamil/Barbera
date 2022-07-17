import { StyleSheet, View } from 'react-native'
import React from 'react'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import UnreadNotification from '../../../../components/notifications/UnreadNotification'
import ReadNotification from '../../../../components/notifications/ReadNotifcation'
import CommonStyle from '../../../CommonStyle'

export default function Notification() {
  return (
    <View style={CommonStyle.container}>
      <SimpleHeader
        title='Notifications'
      />
      <UnreadNotification />
      <ReadNotification />

    </View>
  )
}

const styles = StyleSheet.create({})