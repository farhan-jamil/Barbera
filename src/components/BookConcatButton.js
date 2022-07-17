import { StyleSheet, View } from 'react-native'
import React from 'react'
import SLabel from './buttons/secondaryButton/secondaryLargeButton/SLabel'
import PLabel from './buttons/primaryButton/primaryLargeButton/PLabel'
import { colors } from '../utils/colors'
import SDLabel from './buttons/secondaryButton/secondaryDefaultButton/SDLabel'
import SSLabel from './buttons/secondaryButton/secondarySmallButton/SSLabel'
export default function ConcatButton({
    SecondaryTitle,
    Primarytitle,
    PrimaryonPress,
    SecondaryonPress
}) {
    // console.log('ConcatButton',PrimaryonPress)
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 12,
            paddingHorizontal: 16,
            backgroundColor: colors.neutral50,
            // elevation: 5,
            // shadowColor: 'black'
        }}>
            <View style={{ flex: 1 }}>
                <SDLabel title={SecondaryTitle} alignSelf='stretch' onPress={SecondaryonPress} />
            </View>
            <View style={{ marginRight: 10 }} />
            <View style={{ flex: 1 }}>
                <SDLabel title={Primarytitle} alignSelf='stretch' onPress={PrimaryonPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})