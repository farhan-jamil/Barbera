import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { titleSmall, bodySmall, subtitleSmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import PLabel from '../../../../components/buttons/primaryButton/primaryLargeButton/PLabel'
import LeftRightHeader from '../../../../components/headers/LeftRightHeader'
import CommonStyle from '../../../CommonStyle'
import SIcon from '../../../../components/buttons/secondaryButton/secondaryLargeButton/SIcon'
import BSheet from './BSheet'
export default function Appointment({ navigation }) {
    const [openBottomSheet, setOpenBottomSheet] = useState(false)
    const images = [
        { img: 'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg' },
        { img: 'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg' },
        { img: 'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg' },
        { img: 'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg' },
        { img: 'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg' },
        { img: 'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg' },

    ]
    return (
        <View style={CommonStyle.container}>
            <LeftRightHeader
                title={'Details'}
                rightIcon={<MaterialCommunityIcons name='cards-heart' size={24}
                    color={colors.neutral900}
                />}
                onPress={() => navigation.goBack('')}
            />
            <FlatList
                data={[1]}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{}}>
                        <View>
                            <Image
                                source={{ uri: 'data:image/jpeg;base64,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' }}
                                style={{ height: 273, width: '100%' }}
                            />
                        </View>
                        <View style={{ flex: 1, paddingBottom: 16 }}>

                            <View style={{ flexDirection: 'row', marginTop: 12, paddingHorizontal: 16, }}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View>
                                            <Text style={[titleSmall, { color: colors.neutral900 }]}>Stylish Barber Shop</Text>
                                            <Text style={[bodySmall, { color: colors.neutral700 }]}>Boston, England</Text>
                                        </View>
                                        <SIcon
                                            iconName='cards-heart'
                                        />
                                    </View>

                                </View>

                            </View>
                            <View style={styles.reviewWrapper}>
                                <View style={{ flexDirection: 'row', }}>
                                    <MaterialCommunityIcons name='star' size={20} color={colors.primary500} />
                                    <Text style={[bodySmall, { color: colors.neutral900 }]}> 4.9</Text>
                                    <Text style={[bodySmall, { color: colors.neutral700 }]}> (62)</Text>
                                </View>
                                <TouchableOpacity onPress={() => { setOpenBottomSheet(true) }}>
                                    <Text style={[subtitleSmall, { color: colors.primary500 }]}>See All Reviews</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ paddingHorizontal: 16, marginTop: 12 }}>

                                <Text style={[subtitleSmall, { color: colors.neutral900, marginTop: 12, }]}>Description</Text>
                                <Text style={[bodySmall, { color: colors.neutral700 }]}>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.</Text>

                                <View>
                                    <Text style={[subtitleSmall, { color: colors.neutral900, marginTop: 12, }]}>Images</Text>
                                    <FlatList
                                        data={images}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        renderItem={({ item }) => (
                                            <View style={{ marginTop: 8 }}>
                                                <Image source={{ uri: 'https://arynews.tv/wp-content/uploads/2020/03/Barber.jpg' }}
                                                    style={{
                                                        width: 170, height: 120,
                                                        borderRadius: 10,
                                                        marginRight: 8
                                                    }}
                                                />
                                            </View>
                                        )}
                                    />

                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
                <PLabel
                    title='Book Appointment'
                    onPress={() => navigation.navigate('SelectService')}
                />
            </View>
            {
                openBottomSheet && <BSheet openBottomSheet={openBottomSheet}
                    onCLose={() => setOpenBottomSheet(false)}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    reviewWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.primary50, marginTop: 12
    }
})