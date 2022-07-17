import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { bodySmall } from '../../utils/fonts'
export default function IconLabelArrow({ title, Icon, onPress }) {
    return (
        <TouchableHighlight style={[{
            paddingVertical: 12,
            justifyContent: 'space-between', flexDirection: 'row',
            alignItems: 'center'

        }]}
            underlayColor={colors.primary50}
            onPress={onPress}
        >
            <>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {Icon}
                    <Text style={[bodySmall, { marginLeft: 12, color: colors.neutral900 }]}>{title}</Text>
                </View>
                <MaterialCommunityIcons name='chevron-right' size={24}
                    color={colors.neutral700}

                />
            </>
        </TouchableHighlight >
    )
}

const styles = StyleSheet.create({})