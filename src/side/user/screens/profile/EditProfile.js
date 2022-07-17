import { StyleSheet, Text, View, ScrollView, DatePickerIOSBase } from 'react-native'
import React, { useState } from 'react'
import LeftHeader from '../../../../components/headers/LeftHeader'
import LabelInput from '../../../../components/textInput/LabelInput'
import DisableLabelInput from '../../../../components/textInput/DisableLabelInput'
import DatePick from '../../../../components/textInput/DatePick'
import PLabel from '../../../../components/buttons/primaryButton/primaryLargeButton/PLabel'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import CommonStyle from '../../../CommonStyle'
import UploadDp from '../../../../components/UploadDp'
import { caption } from '../../../../utils/fonts'
import ImagePicker from 'react-native-image-crop-picker';
import CustomModal from '../../../../components/CustomModal'
export default function EditProfile({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [userImage, setUserImage] = useState(null);

    const [fullName, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const [dateofBirth, setDateofBirth] = useState('')
    const [show, setShow] = useState(false);

    const [fullNameError, setFullNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [dateofBirthError, setDateofBirthError] = useState('')

    const onChange = (event, selectedDate) => {
        console.log('onChange: ', selectedDate)
        const currentDate = selectedDate;
        setShow(false);
        setDateofBirth(moment(currentDate).format("MMMM Do YYYY"));
        console.log('hi', dateofBirth)
    };
    const validationHandler = () => {
        if (fullName === '' && phone === '' && dateofBirth === '') {
            setFullNameError('Full Name is required')
            setPhoneError('Phone is required')
            setDateofBirthError('Date of Birth is required')
        }
    }
    const galleryHandler = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
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
            height: 400,
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
                title='Personal Data'
                onPress={() => { navigation.goBack() }}
            />
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 52 }}>
                        <UploadDp
                            onPress={() => setModalVisible(true)}
                            uploadImage={userImage}
                        />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <LabelInput
                            label='Full Name'
                            placeholder='Full Name'
                            value={fullName}
                            onChangeText={(text) => { setFullName(text), setFullNameError('') }}
                            borderColor={fullNameError === '' ? false : true}
                            errorText={fullNameError}
                        />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <DisableLabelInput
                            label='Email Address'
                            placeholder='Email Address'
                            editable={false}
                        />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <LabelInput
                            label='Phone Number'
                            placeholder={'Phone Number'}
                            value={phone}
                            onChangeText={(text) => { setPhone(text), setPhoneError('') }}
                            borderColor={phoneError === '' ? false : true}
                            errorText={phoneError}
                        />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <DatePick
                            label='Date of Birth'
                            placeholder='Pick Date'
                            value={dateofBirth}
                            onPress={() => setShow(true)}
                            borderColor={dateofBirthError === '' ? false : true}
                            errorText={dateofBirthError}
                        />
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={new Date()}
                            mode={'date'}
                            // is24Hour={true}
                            onChange={onChange}
                        />
                    )}
                </View>
                <View>
                    <PLabel
                        title='Update Profile'
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

const styles = StyleSheet.create({})