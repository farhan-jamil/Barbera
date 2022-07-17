import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonStyle from '../../CommonStyle'
import { bodySmall, titleLarge } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import LabelInput from '../../../components/textInput/LabelInput'
import LabelIconInput from '../../../components/textInput/LabelIconInput'
import PLabel from '../../../components/buttons/primaryButton/primaryLargeButton/PLabel'
import LeftHeader from '../../../components/headers/LeftHeader'
import UploadDp from '../../../components/UploadDp'
import CustomModal from '../../../components/CustomModal'
import ImagePicker from 'react-native-image-crop-picker';
import Style from './Style'
export default function Signup({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [userImage, setUserImage] = useState(null);
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)

    const [fullNameError, setFullNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const validationHandler = () => {
        if (fullName === '' && email === '' && password === '' && confirmPassword === '') {
            setFullNameError('Full Name is required')
            setEmailError('Email is required')
            setPasswordError('Password is required')
            setConfirmPasswordError('Confirm Password is required')
        }
        else if (fullName === '') {
            setFullNameError('Full Name is required')
        }
        else if (email === '') {
            setEmailError('Email is required')
        }
        else if (password === '') {
            setPasswordError('Password is required')
        }
        else if (password.length < 8) {
            setPasswordError('Password must be 8 characters')
        }
        else if (confirmPassword === '') {
            setConfirmPasswordError('Confirm Password is required')
        }
        else if (confirmPassword.length < 8) {
            setConfirmPasswordError('Confirm Password must be 8 characters')
        }
        else if (password !== confirmPassword) {
            setConfirmPasswordError('Password and Confirm Password does not match')
        }

    }
    const galleryHandler = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            // flex: 1,
            cropping: true
        }).then(image => {
            console.log(image);
            setUserImage(image.path)
            setModalVisible(false);
        }).catch(e => {
            console.log('User Cancel Image', e);
            setModalVisible(false);
        });
    }
    const cameraHandler = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
        }).then(image => {
            console.log('camera Image', image);
            setUserImage(image.path)
            setModalVisible(false);
        }).catch(e => {
            console.log('User Close Camera', e);
            setModalVisible(false);
        });
    }
    return (
        <View style={CommonStyle.container}>
            <LeftHeader
                onPress={() => navigation.goBack()}
                title="Create Account"
            />
            <ScrollView
                contentContainerStyle={CommonStyle.scrollContainer}>
                <View style={styles.firstContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[titleLarge, { color: colors.neutral900 }]}>
                            Become a Part</Text>
                        <Text style={[bodySmall, { color: colors.neutral700 }]}>
                            Enter the details below to create an account</Text>
                    </View>
                    <View style={{ marginTop: 24, }}>
                        <UploadDp
                            onPress={() => setModalVisible(true)}
                            uploadImage={userImage}
                        />
                    </View>
                    <View>
                        <View style={{ marginTop: 12 }}>
                            <LabelInput
                                label='Full Name'
                                placeholder='i.e John Doe'
                                value={fullName}
                                onChangeText={(text) => { setFullName(text), setFullNameError('') }}
                                borderColor={fullNameError === '' ? false : true}
                                errorText={fullNameError}
                            />
                        </View>
                        <View style={{ marginTop: 12 }}>
                            <LabelInput
                                label='Email Address'
                                placeholder='Enter Email Address'
                                value={email}
                                onChangeText={(text) => { setEmail(text), setEmailError('') }}
                                borderColor={emailError === '' ? false : true}
                                errorText={emailError}
                            />
                        </View>
                        <View style={{ marginTop: 12 }}>
                            <LabelIconInput
                                label='Password'
                                placeholder='Enter Password'
                                value={password}
                                onChangeText={(text) => { setPassword(text), setPasswordError('') }}
                                secureTextEntry={showPassword}
                                onPress={() => setShowPassword(!showPassword)}
                                errorText={passwordError}
                                borderColor={passwordError === '' ? false : true}
                            />
                        </View>
                        <View style={{ marginTop: 12 }}>
                            <LabelIconInput
                                label='Confirm Password'
                                placeholder='Re-enter your Password'
                                value={confirmPassword}
                                onChangeText={(text) => { setConfirmPassword(text), setConfirmPasswordError('') }}
                                secureTextEntry={showConfirmPassword}
                                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                errorText={confirmPasswordError}
                                borderColor={confirmPasswordError === '' ? false : true}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.secondContainer}>
                    <PLabel
                        title='Create Account'
                        onPress={() => validationHandler()}
                    />

                </View>
            </ScrollView>
            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onCross={() => setModalVisible(false)}
                onGallery={() => galleryHandler()}
                onCamera={() => cameraHandler()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    firstContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 16
    },
    secondContainer: {
        flex: 0.2,
        paddingTop: 30,
        paddingBottom: 16
    }
})
{/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
                        <Text style={bodySmall}>Already a user of Barbera?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={[subtitleSmall, { color: colors.primary500 }]}>
                                Create Account
                            </Text>
                        </TouchableOpacity>
                    </View> */}
{/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 28 }}>
                        <Text >
                            <Text style={[bodySmall,{color:colors.neutral900}]}>
                                Already a user of Barbera?
                            </Text>
                            <Text style={[subtitleSmall,{ color: colors.primary500 }]}>
                                Login Account
                            </Text>
                        </Text>
                    </View> */}