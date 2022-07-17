import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { bodySmall, caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function RightIconInput({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onPress,
    errorText,
    borderColor
}) {
    // console.log('LabelIconInput.js: secureTextEntry: ', secureTextEntry)
    return (
        <View style={{}}>
            <Text style={[bodySmall, { color: colors.neutral900 }]}>{label}</Text>
            <View style={[Style.textInputWarpper, { borderColor: borderColor ? colors.error500 : colors.neutral400 }]}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.neutral600}
                    style={[Style.input, bodySmall]}
                />
                <TouchableOpacity onPress={onPress}>
                    {secureTextEntry ? (
                        <MaterialCommunityIcons name="eye-outline" size={22}
                            style={Style.icon}
                        />

                    )
                        :
                        (
                            <MaterialCommunityIcons name="eye-off-outline" size={22}
                                style={Style.icon}
                            />
                        )
                    }
                </TouchableOpacity>
            </View>
            {
                errorText === '' ?
                    <Text style={[caption, { color: colors.neutral700, marginTop: 4 }]}>Password must be 8 character</Text>
                    :
                    < Text style={[caption, { color: colors.error500, marginTop: 4 }]}>{errorText}</Text>
            }
        </View >
    )
}

const styles = StyleSheet.create({})