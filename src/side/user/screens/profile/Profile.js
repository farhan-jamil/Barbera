import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconLabelArrow from '../../../../components/rectangle/IconLabelArrow'
import IconLabel from '../../../../components/rectangle/IconLabel'
import UserIcon from '../../../../assets/svg/UserIcon.svg'
import PasswordIcon from '../../../../assets/svg/PasswordIcon.svg'
import NotifyIcon from '../../../../assets/svg/NotifyIcon.svg'
import ShareIcon from '../../../../assets/svg/ShareIcon.svg'
import LogoutIcon from '../../../../assets/svg/LogoutIcon.svg'
import { subtitleSmall, bodySmall } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import SimpleHeader from '../../../../components/headers/SimpleHeader'
import CommonStyle from '../../../CommonStyle'
import UserDp from '../../../../components/UserDp'
export default function Profile({ navigation }) {
    return (
        <View style={CommonStyle.container}>
            <SimpleHeader
                title='Profile'

            />
            <View style={{ marginHorizontal: 16}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                    <UserDp
                        uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3i_qZtrjSgoPCyIOywhlX8MKOzRIaQbKU0A&usqp=CAU'
                    />
                    <View style={{ marginLeft: 12 }}>
                        <Text style={[subtitleSmall, { color: colors.neutral900 }]}>John Doe</Text>
                        <Text style={[bodySmall, { color: colors.neutral700 }]}>Owner</Text>
                    </View>
                </View>
                <View style={{ marginTop: 12 }} />
                <IconLabelArrow title='Personal Data' Icon={<UserIcon />}
                    onPress={() => navigation.navigate('EditProfile')}
                />
                <IconLabelArrow title='Change Password' Icon={<PasswordIcon />}
                    onPress={() => navigation.navigate('ResetPassword')}
                />
                <IconLabelArrow title='Notification Setting' Icon={<NotifyIcon />}
                    onPress={() => navigation.navigate('NotificationSetting')}
                />
                <IconLabel title='Share' Icon={<ShareIcon />}
                    onPress={() => console.log('Share')}
                />
                <IconLabel title='Logout' Icon={<LogoutIcon />}
                    onPress={() => navigation.navigate('Login')} 
                    />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})