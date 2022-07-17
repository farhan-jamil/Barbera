import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

import CuttingIcon from '../../../assets/svg/cuttingIcon'
import CommonStyle from '../../CommonStyle'
import { bodySmall, caption, subtitleSmall, titleLarge } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import LabelInput from '../../../components/textInput/LabelInput'
import LabelIconInput from '../../../components/textInput/LabelIconInput'
import PLabel from '../../../components/buttons/primaryButton/primaryLargeButton/PLabel'
import SLabelIcon from '../../../components/buttons/secondaryButton/secondaryLargeButton/SLabelIcon'
import LogoGoogle from '../../../assets/svg/LogoGoogle.svg'
import Style from './Style'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const validationHandler = () => {
        // navigation.navigate('Home')
        if (email === '' && password === '') {
            setEmailError('Email is required')
            setPasswordError('Password is required')
        }
        else if (email === '') {
            setEmailError('Email is required')
        }
        else if (password === '') {
            setPasswordError('Password is required')
        }
        else if (password.length < 8) {
            setPasswordError('Password must be atleast 8 characters')
        }
        else {
            setEmail('')
            setPassword('')
            navigation.navigate('Home')
        }
    }
    return (
        <View style={CommonStyle.container}>
            <ScrollView
                contentContainerStyle={CommonStyle.scrollContainer}>
                <View style={CommonStyle.container}>
                    <View style={Style.imageWrapper}>
                        <CuttingIcon />
                    </View>
                    <View style={styles.titleWrapper}>
                        <Text style={[titleLarge, { color: colors.neutral900 }]}>Welcome back</Text>
                        <Text style={[bodySmall, { color: colors.neutral700, marginTop: 4 }]}>
                            You’re missed, login back to your account </Text>
                    </View>
                    <View>

                        <View style={{ marginTop: 24 }}>
                            <LabelInput
                                label='Email Address'
                                placeholder='Enter Email Address'
                                value={email}
                                onChangeText={text => { setEmail(text), setEmailError('') }}
                                borderColor={emailError === '' ? false : true}
                                errorText={emailError}
                            />
                        </View>
                        <View style={{ marginTop: 12 }}>
                            <LabelIconInput
                                label='Password'
                                placeholder='Enter Password'
                                value={password}
                                onChangeText={(pass) => { setPassword(pass), setPasswordError('') }}
                                secureTextEntry={showPassword}
                                onPress={() => setShowPassword(!showPassword)}
                                errorText={passwordError}
                                borderColor={passwordError === '' ? false : true}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')}>
                        <Text style={[subtitleSmall, styles.forgotPassword]}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.secondContainer}>
                    <View>
                        <PLabel
                            title='Login'
                            onPress={() => validationHandler()}
                        />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginVertical: 12
                        }}>
                            <Divider width={1} style={{ width: '45%' }} />

                            <Text style={[caption, { color: colors.neutral700 }]}>OR</Text>
                            <Divider width={1} style={{ width: '45%' }} />
                        </View>
                        <SLabelIcon
                            title='Login with Google'
                            onPress={() => console.log('Login with Google')}
                            Icon={<LogoGoogle />}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
                        <Text style={bodySmall}>New to Barbera? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={[subtitleSmall, { color: colors.primary500 }]}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                        {/* <Text style={bodySmall}>
                            <Text>
                                New to Barbera?
                            </Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                                <Text style={{ color: colors.primary500 }}>
                                    Create Account
                                </Text>
                            </TouchableOpacity>
                        </Text> */}
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({

    titleWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    secondContainer: {
        flex: 0.5,
        paddingVertical: 16
    },
    forgotPassword: {
        color: colors.primary500,
        textAlign: 'right',
        marginTop: 8
    },

})