import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { bodySmall } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function RightIconInput({
    placeholder,
    value,
    onChangeText,
    onPress,
}) {
    // console.log('LabelIconInput.js: secureTextEntry: ', secureTextEntry)
    return (
        <View style={{}}>
            <View style={Style.textInputWarpper}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.neutral600}
                    style={[Style.input, bodySmall]}
                />
                <TouchableOpacity onPress={onPress}>
                    <AntDesign name='search1' color={colors.neutral900} size={24} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({})