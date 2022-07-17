import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../../../utils/colors'
import { subtitleLarge } from '../../../../../utils/fonts'
export default function PLabelIcon({ alignSelf }) {
    return (
        <TouchableHighlight
            style={[Style.container, { flexDirection: 'row', alignSelf: alignSelf }]}
            underlayColor={colors.primary700}
        >
            <>
                <MaterialCommunityIcons name='account' color={colors.neutral50}
                    size={20}
                    style={{ marginRight: 8 }}
                />
                <Text
                    style={[subtitleLarge, { color: colors.neutral50 }]}
                >Button</Text>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})