import { StyleSheet, View } from 'react-native'
import React from 'react'
import CommonStyle from '../../../CommonStyle'
import TopNavigation from '../../navigation/TopNavigation'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
export default function Booking() {
  return (
    <View style={CommonStyle.container}>
      <SimpleHeader title="Bookings" />
      <TopNavigation />
    </View>
  )
}

const styles = StyleSheet.create({})