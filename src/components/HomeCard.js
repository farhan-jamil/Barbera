import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../utils/colors'
import PDLabel from './buttons/primaryButton/primaryDefaultButton/PDLabel'
import { bodySmall, subtitleSmall } from '../utils/fonts'
import SDIcon from './buttons/secondaryButton/secondaryDefaultButton/SDIcon'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function HomeCard({
    imageUri,
    barberName,
    location,
    rating,
    onPress
}) {
    return (
        <View style={{
            backgroundColor: colors.neutral50,
            borderRadius: 10,
            elevation: 2, shadowColor: 'black',
        }}>
            <Image source={{ uri: imageUri }}
                style={styles.image}
            />
            <View style={{
                paddingVertical: 12,
                paddingHorizontal: 12
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{barberName}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='star' size={16} color={colors.primary500} />
                        <Text style={[bodySmall, { color: colors.neutral700 }]}> {rating}</Text>
                    </View>
                </View>
                <Text style={[bodySmall, { color: colors.neutral700 }]}>{location}</Text>
                <View style={{
                    marginTop: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <SDIcon
                        Icon={<Ionicons name='heart-outline' size={24} color={colors.neutral900}
                        />}
                    />
                    <View style={{ marginRight: 8 }} />
                    <View style={{ flex: 1 }}>
                        <PDLabel title='Book Appointment'
                            alignSelf='stretch'
                            onPress={onPress}
                        />
                    </View>
                </View>
            </View>
            {/* <View style={[styles.detailWrapper, { backgroundColor: 'yellow' }]}>
                <View style={styles.titleWrapper}>
                    <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{barberName}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='star' size={16} color={colors.primary500} />
                        <Text style={[bodySmall, { color: colors.neutral700 }]}> {rating}</Text>
                    </View>
                </View>
                <View>
                    <Text style={[bodySmall, { color: colors.neutral700 }]}>{location}</Text>
                    <View style={{
                        marginTop: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <SDIcon />
                        <View style={{ marginRight: 8 }} />
                        <View style={{ flex: 1 }}>
                            <PDLabel title='Book Appointment'
                                alignSelf='stretch'
                                onPress={onPress}
                            />
                        </View>
                    </View>
                </View>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%', height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    detailWrapper: {
        backgroundColor: colors.neutral50,
        paddingVertical: 12,
        paddingHorizontal: 12
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})