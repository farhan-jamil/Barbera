import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { subtitleSmall, subtitleLarge } from '../utils/fonts'
import UserIcon from '../assets/svg/UserIcon.svg'
import SSIcon from './buttons/secondaryButton/secondarySmallButton/SSIcon'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default function EditService({
    title,
    description,
    price,
    onPress,
    arrayLength,
    indexOfElement
}) {
    console.log('arrayLength in component', arrayLength)
    console.log('indexOfElement in component', indexOfElement)
    return (
        <View style={{ flexDirection: 'row' }}
        >
            <View
                style={styles.image}>
                <UserIcon />
                {/* <FontAwesome5 name='headset' size={24} color={colors.neutral900} /> */}
            </View>
            <View style={[styles.textedWrapper,
            { borderBottomWidth: arrayLength === indexOfElement ? 0 : 1 }
            ]}>
                <View style={{ flex: 1, paddingVertical: 12 }}>
                    <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{title}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[subtitleLarge, { color: colors.primary500, paddingLeft: 8, paddingRight: 16 }]}>${price}</Text>
                </View>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                    onPress={onPress}
                >
                    <SSIcon
                        icon={<MaterialCommunityIcons name='minus-circle-outline' size={20}
                            color={colors.error500}
                        />}
                        onPress={() => console.log('remove')}
                    />
                    {/* <MaterialCommunityIcons name='minus-circle-outline' size={28}
                    color={colors.error500}
                    /> */}
                </TouchableOpacity>
                {/* minus-circle-outline */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    textedWrapper: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: colors.neutral400,
        // borderBottomWidth: 1,
        marginLeft: 8
    },
})