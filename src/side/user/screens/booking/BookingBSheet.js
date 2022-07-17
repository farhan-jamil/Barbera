import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useRef, useEffect, } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { colors } from "../../../../utils/colors";
import PendingStatus from "../../../../components/status/PendingStatus";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CompleteStatus from "../../../../components/status/CompleteStatus";
import CancelStatus from "../../../../components/status/CancelStatus";
import ConfirmStatus from "../../../../components/status/ConfirmStatus";
import UserInfoCard from "../../../../components/UserInfoCard";
import DisplayDateTime from "../../../../components/DisplayDateTime";
import { Divider } from "react-native-elements";
import EditService from "../../../../components/EditService";
import { bodySmall, subtitleLarge, subtitleSmall } from "../../../../utils/fonts";
import Invoice from "../../../../components/Invoice";
import BookConcatButton from "../../../../components/BookConcatButton";
import SDLabel from '../../../../components/buttons/secondaryButton/secondaryDefaultButton/SDLabel';
import CommonStyle from "../../../CommonStyle";
export default function BookingBSheet({ openBottomSheet, onCLose, screenName, navigation }) {
    const refRBSheet = useRef();
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
    // console.log('openBottomSheet', openBottomSheet);
    // console.log('setOpenBottomSheet', onCLose);
    useEffect(() => {
        refRBSheet.current.open();
        // console.log('refRBSheet....r', refRBSheet);
        // console.log('refRBSheet.current.open()', refRBSheet.current.open());

    }, [refRBSheet])
    return (

        <RBSheet
            height={hp(85)}
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            dragFromTopOnly={true}
            onClose={onCLose}
            animationType='slide'
            customStyles={{
                wrapper: {
                    backgroundColor: "transparent"
                },
                container: {
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    elevation: 5,
                    shadowColor: 'black',
                },
                draggableIcon: {
                    backgroundColor: colors.neutral400
                }
            }}
        >
            <View style={CommonStyle.container}>
                <FlatList
                    data={[1]}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <>
                            <View style={{ paddingHorizontal: 16, }}>
                                {
                                    screenName === 'Pending' ?
                                        <PendingStatus />
                                        :
                                        screenName === 'Cancel' ?
                                            <CancelStatus />
                                            :
                                            screenName === 'Confirm' ?
                                                <ConfirmStatus />
                                                :
                                                <></>
                                }
                                <View style={[styles.userInfoCard, { marginTop: 8 }]}>
                                    <View style={{ marginTop: 10 }} />
                                    <UserInfoCard />
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <DisplayDateTime
                                        screenName='Booking'
                                    />
                                </View>
                            </View>
                            <View style={{ marginVertical: 12 }}>
                                <Divider width={1} color={colors.neutral400} />
                            </View>
                            <View style={{ paddingHorizontal: 16 }}>
                                <Text style={[subtitleSmall, { color: colors.neutral900 }]}>Service List</Text>
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
                                <Text style={[subtitleSmall, { color: colors.neutral900 }]}>Invoice</Text>
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
                                <View style={styles.totalWrapper}>
                                    <Text style={[bodySmall, { color: colors.neutral900 }]}>Grand Total</Text>
                                    <Text style={[subtitleLarge, { color: colors.neutral900 }]}>$48.0</Text>

                                </View>
                            </View>
                            <View style={{ marginVertical: 12 }}>
                                <Divider width={1} color={colors.neutral400} />
                            </View>
                            <View>
                                {
                                    screenName === 'Pending' ?
                                        <BookConcatButton
                                            SecondaryTitle='Cancel'
                                            Primarytitle='Reschedule'
                                            SecondaryonPress={onCLose}
                                            PrimaryonPress={() => { onCLose(), navigation.navigate('SelectService') }}
                                        />
                                        :
                                        screenName === 'Cancel' ?
                                            <View style={{ paddingBottom: 8, paddingHorizontal: 16 }}>
                                                <SDLabel
                                                    title={'Cancel'}
                                                    onPress={onCLose}
                                                />
                                            </View>
                                            :
                                            screenName === 'Confirm' ?
                                                <BookConcatButton
                                                    SecondaryTitle='Cancel'
                                                    Primarytitle='Reschedule'
                                                    SecondaryonPress={onCLose}
                                                    PrimaryonPress={() => { onCLose(), navigation.navigate('SelectService') }}
                                                />
                                                :
                                                <></>
                                }
                            </View>
                        </>
                    )}
                />
                {/* <FlatList
                    data={[1]}
                    showsVerticalScrollIndicator={false}
                    renderItem={() => (
                        <>
                            <RatingCard />
                            <FlatList
                                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <>
                                        <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
                                            <ReviewCard />
                                        </View>
                                        <Divider width={1} color={colors.neutral400} />
                                    </>
                                }
                                keyExtractor={item => item.toString()}
                            />
                        </>
                    )}
                /> */}
            </View>
        </RBSheet>


    );
}

const styles = StyleSheet.create({
    userInfoCard: {
        backgroundColor: colors.primary50,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10
    },
    totalWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', marginTop: 8
    }
})