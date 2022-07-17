import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgressHeader from '../../../../components/headers/ProgressHeader'
import UserInfoCard from '../../../../components/UserInfoCard'
import { bodySmall, subtitleLarge, subtitleSmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Divider } from 'react-native-elements'
import EditService from '../../../../components/EditService'
import Invoice from '../../../../components/Invoice'
import ConcatButton from '../../../../components/ConcatButton'
import CommonStyle from '../../../CommonStyle'
import DisplayDateTime from '../../../../components/DisplayDateTime'
export default function Summary({ navigation }) {
    const selectedServicesData = [
        {
            id: 1,
            title: 'Service 1',
            price: 100,
        },
        {
            id: 2,
            title: 'Service 2',
            price: 200,
        },
        {
            id: 3,
            title: 'Service 3',
            price: 300,
        },
        {
            id: 4,
            title: 'Service 4',
            price: 400,
        },
    ]
    // console.log('length', selectedServicesData[selectedServicesData.length-1])
    return (
        <View style={CommonStyle.container}>
            <ProgressHeader
                progress={1}
                pageNumber={'3'}
                title={'Summary'}
                onPress={() => navigation.navigate('Appointment')}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={[1]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <>
                            <View style={{ paddingHorizontal: 16 }}>
                                <View style={{ marginVertical: 16 }}>
                                    <View style={styles.userInfoCard}>
                                        <UserInfoCard />
                                    </View>
                                </View>
                                <View>
                                    <DisplayDateTime
                                        screenName='Summary'
                                        onPress={() => navigation.navigate('SelectDateTime')}
                                    />
                                </View>
                            </View>
                            <View style={{ marginVertical: 12 }}>
                                <Divider width={1} color={colors.neutral400} />
                            </View>
                            <View style={{ paddingHorizontal: 16 }}>
                                <Text style={[subtitleSmall, { color: colors.neutral900 }]}>
                                    Service List</Text>
                                <View style={{ marginTop: 8 }}>
                                    <FlatList
                                        keyExtractor={(item) => item.id.toString()}
                                        data={selectedServicesData}
                                        renderItem={({ item }) => (
                                            <EditService
                                                title={item.title}
                                                price={item.price}
                                                onPress={() => { console.log('pressed') }}
                                                arrayLength={selectedServicesData.length - 1}
                                                indexOfElement={selectedServicesData.indexOf(item)}
                                            />
                                        )}
                                    />
                                </View>
                            </View>
                            <View style={{ marginVertical: 12 }}>
                                <Divider width={1} color={colors.neutral400} />
                            </View>
                            <View style={{ paddingHorizontal: 16, marginBottom: 12 }}>
                                <Text
                                    style={[subtitleSmall, { color: colors.neutral900 }]}>
                                    Invoice</Text>
                                <Invoice
                                    title='Services charges'
                                    price='36'
                                />
                                <Invoice
                                    title='Govt. Tax'
                                    price='4.0'
                                />
                                <Invoice
                                    title='Barbera Tax'
                                    price='8.0'
                                />
                                <View style={styles.totalAmountWrapper}>
                                    <Text
                                        style={[bodySmall, { color: colors.neutral900 }]}>
                                        Grand Total</Text>
                                    <Text
                                        style={[subtitleLarge, { color: colors.neutral900 }]}>
                                        $48.0</Text>

                                </View>
                            </View>
                            <Divider width={1} color={colors.neutral400} />
                            <View style={{ paddingHorizontal: 16, marginTop: 8 }} >
                                <Text style={[subtitleSmall, { color: colors.neutral900 }]}>
                                    Payment Method</Text>
                                <View style={styles.payment}>
                                    <MaterialIcons name='payment' color={colors.primary500} size={24} />
                                    <Text style={[subtitleSmall, { color: colors.primary500, marginLeft: 10 }]}>Add Payment Method</Text>

                                </View>
                            </View>
                        </>
                    )}
                />
            </View>
            <View style={{}}>
                <ConcatButton
                    SecondaryTitle={'Back'}
                    Primarytitle={'Book Now'}
                    PrimaryonPress={() => navigation.replace('Home')}
                    SecondaryonPress={() => navigation.goBack()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfoCard: {
        backgroundColor: colors.primary50,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10
    },
    totalAmountWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    payment: {

        flexDirection: 'row',
        alignItems: 'center', marginTop: 12

    }
})