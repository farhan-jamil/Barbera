import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Style from './Style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../../utils/colors'
import { subtitleLarge } from '../../../../utils/fonts'
export default function SSLabelIcon({ alignSelf }) {
    return (
        <TouchableHighlight
            style={[Style.container, { flexDirection: 'row', alignSelf: alignSelf }]}
            underlayColor={colors.neutral100}
        >
            <>
                <MaterialCommunityIcons name='account' color={colors.neutral50}
                    size={20}
                    style={{ marginRight: 4 }}
                />
                <Text
                    style={[subtitleLarge, { color: colors.neutral50 }]}
                >Button</Text>
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})