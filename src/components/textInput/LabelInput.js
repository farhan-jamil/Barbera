import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { bodySmall, caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import Style from './Style'
export default function LabelInput({
  label,
  placeholder,
  value,
  onChangeText,
  borderColor,
  errorText,
}) {
  return (
    <View style={{}}>
      <Text style={[bodySmall, { color: colors.neutral900 }]}>{label}</Text>
      <View style={[Style.textInputWarpper, { borderColor: borderColor ? colors.error500 : colors.neutral400 }]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={colors.neutral600}
          style={[Style.input, bodySmall]}
        />
      </View>
      {
        errorText === '' ? null : (
          <Text style={[caption, { color: colors.error500 }]}>{errorText}</Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({})