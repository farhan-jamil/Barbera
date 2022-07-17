import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { bodySmall, caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function DatePick({
    label,
    placeholder,
    value,
    onChangeText,
    onPress,
    borderColor,
    errorText,
}) {
    // console.log('LabelIconInput.js: secureTextEntry: ', secureTextEntry)
    return (
        <View >
            <Text style={[bodySmall, { color: colors.neutral900 }]}>{label}</Text>
            <TouchableOpacity style={[Style.textInputWarpper, { borderColor: borderColor ? colors.error500 : colors.neutral400 }]}
                onPress={onPress}
                activeOpacity={0.8}
            >
                {/* <Text>March 12, 1998</Text> */}
                <TextInput
                    editable={false}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.neutral600}
                    style={[Style.input, bodySmall]}
                />
                <MaterialCommunityIcons name='calendar-blank-outline' size={24} />
            </TouchableOpacity>
            {
                errorText === '' ? null : (
                    <Text style={[caption, { color: colors.error500 }]}>{errorText}</Text>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({})