import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import BookingCard from '../../../../components/BookingCard'
import CommonStyle from '../../../CommonStyle'
import BookingBSheet from './BookingBSheet'
export default function Cancel() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false)
  return (
    <View style={CommonStyle.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) =>
          <BookingCard
            onPress={() => { setOpenBottomSheet(true) }}
          />}
        keyExtractor={item => item.toString()}
      />
      {
        openBottomSheet && <BookingBSheet openBottomSheet={openBottomSheet}
          onCLose={() => setOpenBottomSheet(false)}
          screenName='Cancel'
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({})