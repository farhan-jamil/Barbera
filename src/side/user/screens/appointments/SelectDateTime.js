import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { colors } from '../../../../utils/colors';
import ConcatButton from '../../../../components/ConcatButton';
import ProgressHeader from '../../../../components/headers/ProgressHeader';
import { Divider } from 'react-native-elements';
import { bodyLarge, subtitleLarge } from '../../../../utils/fonts';
import SDLabel from '../../../../components/buttons/secondaryButton/secondaryDefaultButton/SDLabel';
import moment from 'moment';
import CommonStyle from '../../../CommonStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SelectDateTime({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [months, setMonths] = useState(moment().format('YYYY-MM'))
  const timeArray = [
    {
      id: 1,
      time: '10:00 AM'
    },
    {
      id: 2,
      time: '10:30 AM'
    },
    {
      id: 3,
      time: '11:00 AM'
    },
    {
      id: 4,
      time: '11:30 AM'
    },
    {
      id: 5,
      time: '12:00 PM'
    },
    {
      id: 6,
      time: '12:30 PM'
    },
    {
      id: 7,
      time: '01:00 PM'
    },
    {
      id: 8,
      time: '01:30 PM'
    },
  ]
  const [selectedService, setSelectedService] = useState([])
  useEffect(() => {
    console.log('selectedService use effect.........', selectedService)
  }, [selectedService])
  const serviceHandler = (item) => {
    if (selectedService.length === 0) {
      setSelectedService(preData => [item])
    }
    else {
      let index = selectedService.findIndex(data => data.id === item.id)
      if (index === -1) {
        setSelectedService(preData => [item])
      }
      else {
        setSelectedService(preData => preData.filter(data => data.id !== item.id))
      }
    }
  }
  const check = (item) => {
    for (let i = 0; i < selectedService.length; i++) {
      if (selectedService[i].id == item.id) {
        return true
      }
    }
  }
  const navigationToScreenHandler = () => {
    console.log('selectedDate', selectedDate)
    if (selectedService.length === 0) {
      alert('Please select time')
    }
    else if (selectedDate === '') {
      alert('Please select date')
    }
    else if (moment(selectedDate.dateString).isBefore(moment().format('YYYY-MM-DD'))) {
      alert('Date must be today date or next date than current date')
    }
    else {
      navigation.navigate('Summary')
    }

  }
  return (
    <View style={CommonStyle.container}>
      <ProgressHeader
        progress={0.6}
        pageNumber={'2'}
        title={'Select Date & Time'}
        onPress={() => navigation.navigate('Appointment')}
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={[1]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <View style={{ marginBottom: 24 }}>
                <Calendar
                  renderArrow={(direction) => {
                    if (direction === 'left') {
                      return (
                        moment().format('YYYY-MM') === months ?
                          <MaterialCommunityIcons name='chevron-left' color={colors.neutral500} size={28} />
                          :
                          <MaterialCommunityIcons name='chevron-left' color={colors.primary500} size={28} />
                      )
                    } else {
                      return (
                        <MaterialCommunityIcons name='chevron-right' color={colors.primary500} size={28} />

                      )
                    }
                  }
                  }
                  hideExtraDays={true}
                  enableSwipeMonths={true}
                  disableArrowLeft={moment().format('YYYY-MM') === months ? true : false}
                  // disableArrowLeft={month === selectedDate.month ? console.log('true') : console.log('false')}
                  onDayPress={day => {
                    setSelectedDate(day)
                    console.log(day)
                    // console.log(month)
                  }}
                  onMonthChange={month => {
                    // console.log('simple Month', month)
                    // console.log('only Month', month.dateString);
                    // console.log('formated month',moment(month.dateString).format('YYYY-MM'));
                    // console.log('current', moment().format('YYYY-MM'));
                    setMonths(moment(month.dateString).format('YYYY-MM'))
                  }}
                  markedDates={{
                    [selectedDate.dateString]: { selected: true, marked: true, selectedColor: colors.primary500 },
                  }}
                  theme={{
                    todayTextColor: colors.primary500,
                    textMonthFontFamily: 'Inter-SemiBold',
                    textMonthFontSize: 16,
                    textDayFontSize: 14,
                    textDayFontFamily: 'Inter-SemiBold',
                    textDayHeaderFontFamily: 'Inter-Regular',
                    textDayHeaderFontSize: 14,
                  }}
                />
              </View>
              <Divider width={1} />
              <View style={{ paddingVertical: 16, paddingHorizontal: 16, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={[subtitleLarge, { color: colors.neutral900 }]}>Select Time</Text>
                  <Text style={[bodyLarge, { color: colors.neutral700 }]}>{selectedDate.dateString}</Text>
                </View>
                <View style={{}}>
                  <FlatList
                    data={timeArray}
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
                    numColumns={3}
                    renderItem={({ item }) => (
                      <View style={{ marginTop: 16 }}>
                        <SDLabel title={item.time} alignSelf={'baseline'}
                          onPress={() => { serviceHandler(item) }}
                          select={check(item)}
                        />
                      </View>
                    )}
                  />
                </View>
              </View>

            </View>
          )}
        />
      </View>
      <View style={{}}>
        <ConcatButton
          SecondaryTitle={'Back'}
          Primarytitle={'Next'}
          PrimaryonPress={() => navigationToScreenHandler()}
          SecondaryonPress={() => navigation.goBack()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})