import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { bodySmall, caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function LabelInput({
    label,
    placeholder,
    errorText,
    editable,
    value
}) {
    return (
        <View style={{}}>
            <Text style={[bodySmall, { color: colors.neutral900 }]}>{label}</Text>
            <View style={[Style.textInputWarpper, { borderColor: colors.neutral400, backgroundColor: colors.neutral200 }]}>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    editable={editable}
                    placeholderTextColor={colors.neutral700}
                    style={[bodySmall, {
                        flex: 1,
                        color: colors.neutral700
                    }]}
                />
            </View>
            {/* {
                errorText === '' ? null : (
                    <Text style={[caption, { color: colors.error500 }]}>{errorText}</Text>
                )
            } */}
        </View>
    )
}

const styles = StyleSheet.create({})