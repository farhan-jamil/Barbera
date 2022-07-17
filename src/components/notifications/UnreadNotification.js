import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { bodySmall, caption, subtitleSmall } from '../../utils/fonts'
import Style from './Style'
import UserIcon from '../../assets/svg/UserIcon.svg'
export default function UnreadNotification() {
    return (
        <View style={{ backgroundColor: colors.primary50 }}>
            <View style={Style.mainViewWrap}>
                <View style={Style.iconView}>
                    <UserIcon />
                </View>
                <View style={[Style.textViewWrap, {
                    borderBottomColor: colors.neutral400
                }]}>

                    <Text style={[subtitleSmall, { color: colors.primary500 }]}>You received a new booking</Text>
                    <Text style={[bodySmall, { color: colors.neutral900 }]}>Stylish saloon has confirmed your booking</Text>
                    <Text style={[caption, { color: colors.neutral700, marginTop: 8 }]}>10:03 PM • Mar 21</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})