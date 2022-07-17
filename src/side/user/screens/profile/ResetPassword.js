import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { bodySmall, subtitleLarge } from '../../../../utils/fonts'
import { colors } from '../../../../utils/colors'
import LabelIconInput from '../../../../components/textInput/LabelIconInput'
import PLabel from '../../../../components/buttons/primaryButton/primaryLargeButton/PLabel'
import PasswordIcon from '../../../../assets/svg/PasswordIcon.svg'
import LeftHeader from '../../../../components/headers/LeftHeader'
import CommonStyle from '../../../CommonStyle'
export default function ResetPassword({ navigation }) {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [passwordVissible, setPasswordVissible] = useState(true)
    const [newPasswordVissible, setNewPasswordVissible] = useState(true)
    const [confirmPasswordVissible, setConfirmPasswordVissible] = useState(true)
    const [passwordError, setPasswordError] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const validationHandler = () => {
        if (password === '' && newPassword === '' && confirmPassword === '') {
            setPasswordError('Password is required')
            setNewPasswordError('New Password is required')
            setConfirmPasswordError('Confirm Password is required')
        }
        else if (password === '') {
            setPasswordError('Password is required')
        }
        else if (password.length < 8) {
            setPasswordError('Password must be 8 character')
        }
        else if (newPassword === '') {
            setNewPasswordError('New Password is required')
        }
        else if (newPassword.length < 8) {
            setNewPasswordError('New Password must be 8 character')
        }
        else if (confirmPassword === '') {
            setConfirmPasswordError('Confirm Password is required')
        }
        else if (confirmPassword.length < 8) {
            setConfirmPasswordError('Confirm Password must be 8 character')
        }
        else if (newPassword !== confirmPassword) {
            setConfirmPasswordError('Confirm Password must be same as New Password')
        }
    }
    return (
        <View style={CommonStyle.container}>
            <LeftHeader
                title='Change Password'
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView
                contentContainerStyle={CommonStyle.scrollContainer}
            >
                <View style={CommonStyle.container}>
                    <View style={{ marginTop: 30, alignSelf: 'center' }}>
                        <PasswordIcon
                            width={84}
                            height={84} />
                    </View>
                    <Text style={[subtitleLarge,
                        { color: colors.neutral900, marginTop: 30 }]}>Reset your password</Text>
                    <Text style={[bodySmall, { color: colors.neutral700 }]}>Enter your current password to create a new password</Text>

                    <View style={{ marginTop: 16 }}>
                        <LabelIconInput
                            label='Current Password'
                            placeholder='Enter password'
                            value={password}
                            onChangeText={(p) => { setPassword(p), setPasswordError('') }}
                            secureTextEntry={passwordVissible}
                            onPress={() => setPasswordVissible(!passwordVissible)}
                            borderColor={passwordError === '' ? false : true}
                            errorText={passwordError}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={[subtitleLarge, { color: colors.neutral900 }]}>Create New Password</Text>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <LabelIconInput
                            label='Enter New Password'
                            placeholder='Enter new password'
                            value={newPassword}
                            onChangeText={(text) => { setNewPassword(text), setNewPasswordError('') }}
                            secureTextEntry={newPasswordVissible}
                            onPress={() => setNewPasswordVissible(!newPasswordVissible)}
                            borderColor={newPasswordError === '' ? false : true}
                            errorText={newPasswordError}
                        />
                    </View>
                    <View style={{ marginTop: 12 }}>
                        <LabelIconInput
                            label='Confirm Password'
                            placeholder='Re-enter your Password'
                            value={confirmPassword}
                            onChangeText={(text) => { setConfirmPassword(text), setConfirmPasswordError('') }}
                            secureTextEntry={confirmPasswordVissible}
                            onPress={() => setConfirmPasswordVissible(!confirmPasswordVissible)}
                            borderColor={confirmPasswordError === '' ? false : true}
                            errorText={confirmPasswordError}
                        />
                    </View>

                </View>
                <View style={styles.secondContainer}>
                    <PLabel
                        title='Change Password'
                        onPress={() => { validationHandler() }}
                    />

                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    secondContainer: {
        flex: 0.2,
        paddingVertical: 16
    }
})