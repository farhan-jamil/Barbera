import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import { titleSmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import HomeCard from '../../../../components/HomeCard'
import RightIconInput from '../../../../components/textInput/RightIconInput'
import CommonStyle from '../../../CommonStyle'
export default function Home({ navigation }) {
  const [search, setSearch] = useState('')
  return (
    <View style={CommonStyle.container}>
      <SimpleHeader
        title='Home'
      />
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 16, marginVertical: 16 }}>
          <Text style={[titleSmall, { color: colors.neutral900 }]}>Welcome John</Text>
          <View style={{ marginTop: 16 }}>
            <RightIconInput
              placeholder='Search barber Shop'
              value={search}
              onChangeText={setSearch}
              placeholderTextColor={colors.neutral600}
              onPress={() => { console.log('search button clicked ', search) }}
            />
          </View>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
              <HomeCard
                imageUri={'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg'}
                barberName={'Stylish Barber Shop'}
                rating={1.3}
                location={'Boston, England'}
                onPress={() => navigation.navigate('Appointment')}

              />
            </View>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})