import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { bodySmall} from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function LabelIconHelperInput({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onPress,
    helperText
}) {
    // console.log('LabelIconInput.js: secureTextEntry: ', secureTextEntry)
    return (
        <View style={{}}>
            <Text style={[bodySmall, { color: colors.neutral900 }]}>{label}</Text>
            <View style={Style.textInputWarpper}>
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
         
        </View>
    )
}

const styles = StyleSheet.create({})