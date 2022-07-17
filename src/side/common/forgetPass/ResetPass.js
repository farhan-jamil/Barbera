import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CommonStyle from '../../CommonStyle'
import { bodySmall, titleLarge } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import LabelIconInput from '../../../components/textInput/LabelIconInput'
import PLabel from '../../../components/buttons/primaryButton/primaryLargeButton/PLabel'

export default function ResetPass({ navigation }) {
    const [confirmPassword, setConfirmPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const [showNewPassword, setShowNewPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)

    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [newPasswordError, setNewPasswordError] = useState('')

    const validationHandler = () => {
        if (newPassword === '' && confirmPassword === '') {
            setNewPasswordError('New Password is required')
            setConfirmPasswordError('Confirm Password is required')
        }
        else if (newPassword === '') {
            setNewPasswordError('New Password is required')
        }
        else if (newPassword.length < 8) {
            setNewPasswordError('New Password must be at least 8 characters')
        }
        else if (confirmPassword === '') {
            setConfirmPasswordError('Confirm Password is required')
        }
        else if (confirmPassword.length < 8) {
            setConfirmPasswordError('Confirm Password must be at least 8 characters')
        }
        else if (newPassword !== confirmPassword) {
            setConfirmPasswordError('Confirm Password must match New Password')
        }
        else {
            navigation.navigate('Login')
        }
    }
    return (
        <View style={CommonStyle.container}>
            <View style={[{ flex: 1, paddingHorizontal: 16, justifyContent: 'center' }]}>
                <Text style={[titleLarge, { color: colors.neutral900, textAlign: 'center' }]}>
                    Recover Your  Password</Text>

                <View style={{ marginTop: 12 }}>
                    <LabelIconInput
                        label='Enter New Password'
                        placeholder='Enter New Password'
                        value={newPassword}
                        onChangeText={text => { setNewPassword(text), setNewPasswordError('') }}
                        secureTextEntry={showNewPassword}
                        onPress={() => setShowNewPassword(!showNewPassword)}
                        borderColor={newPasswordError === '' ? false : true}
                        errorText={newPasswordError}
                    />
                    <View style={{ marginTop: 12 }}>
                        <LabelIconInput
                            label='Confirm Password'
                            placeholder='Re-enter your Password'
                            value={confirmPassword}
                            onChangeText={text => { setConfirmPassword(text), setConfirmPasswordError('') }}
                            secureTextEntry={showConfirmPassword}
                            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            borderColor={confirmPasswordError === '' ? false : true}
                            errorText={confirmPasswordError}
                        />
                    </View>

                </View>
            </View>
            <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                <PLabel
                    title='Send'
                    onPress={() => validationHandler()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})