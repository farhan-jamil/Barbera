import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CommonStyle from '../../CommonStyle'
import { bodySmall, titleLarge } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import LabelInput from '../../../components/textInput/LabelInput'
import PLabel from '../../../components/buttons/primaryButton/primaryLargeButton/PLabel'

export default function VerifyEmail({ navigation }) {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const validationHandler = () => {
        if (email === '') {
            setEmailError('Email is required')
        }
        else {
            navigation.navigate('ResetPass')
        }
    }
    return (
        <View style={CommonStyle.container}>
            <View style={[{ flex: 1, paddingHorizontal: 16, justifyContent: 'center' }]}>
                <Text style={[titleLarge, { color: colors.neutral900, textAlign: 'center' }]}>Recover Password</Text>
                <Text style={[bodySmall, { color: colors.neutral700, textAlign: 'center' }]}>Enter your email address to receive an email to recover your password</Text>
                <View style={{ marginTop: 12 }}>
                    <LabelInput
                        label='Email Address'
                        placeholder='Enter Email Address'
                        value={email}
                        onChangeText={text => { setEmail(text), setEmailError('') }}
                        borderColor={emailError === '' ? false : true}
                        errorText={emailError}
                    />
                </View>
            </View>
            <View style={{ paddingHorizontal: 16, paddingVertical: 22 }}>
                <PLabel
                    title='Send Email'
                    onPress={() => validationHandler()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})