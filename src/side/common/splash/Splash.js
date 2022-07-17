import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils/colors'
// import Logo from '../../../assets/svg/logo.svg'

import Logo from '../../../assets/svg/newLogo.svg'

export default function Splash({ navigation }) {
    setTimeout(() => {
        navigation.replace('OnboardingScreen')
    }, 3000);
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary500, justifyContent: 'center', alignItems: 'center' }}>
            <Logo
                width={200}
                height={200}
            />
        </View>
    )
}

const styles = StyleSheet.create({})