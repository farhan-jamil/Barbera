import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Style from './Style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../../../../utils/colors'
import { subtitleLarge } from '../../../../utils/fonts'
export default function SLabelIcon({
    alignSelf,
    title,
    onPress,
    Icon
}) {
    return (
        <TouchableHighlight
            underlayColor={colors.neutral400}
            onPress={onPress}
            style={[Style.container, { flexDirection: 'row', alignSelf: alignSelf }]}
        >
            <>
                {/* <View style={[Style.container, { flexDirection: 'row', alignSelf: alignSelf }]}> */}
                {Icon}
                {/* <MaterialCommunityIcons name='account' color={colors.neutral900}
                    size={20}
                    style={{ marginRight: 8 }}
                /> */}
                <View style={{ marginRight: 8 }} />
                <Text
                    style={[subtitleLarge, { color: colors.neutral900 }]}
                >{title}</Text>
                {/* </View> */}
            </>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({})