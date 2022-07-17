import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import DefaultProfileImage from '../assets/svg/DefaultProfileImage.svg'
import PDIcon from './buttons/primaryButton/primaryDefaultButton/PDIcon'
import Feather from 'react-native-vector-icons/Feather'
export default function UploadDp({ onPress, uploadImage }) {
    console.log('uploadImage', uploadImage)
    return (
        <TouchableHighlight style={{
            width: 80,
            height: 80, borderRadius: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center'

        }}
            onPress={onPress}
        // underlayColor={colors.neutral100}
        >
            <>
                {
                    uploadImage == null ?
                        <DefaultProfileImage />
                        :
                        <Image source={{ uri: uploadImage }}
                            style={{ width: 80, height: 80, borderRadius: 10 }}

                        />
                }

                <View style={{
                    position: 'absolute',
                    top: 50,
                    left: 50,
                }}>
                    <PDIcon
                        icon={<Feather name='camera' color={colors.neutral50} size={24} />}
                    />
                    {/* <CameraIcon /> */}
                </View>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})