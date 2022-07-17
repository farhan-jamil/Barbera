import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CuttingIcon from '../../../assets/svg/cuttingIcon'
import { bodySmall, subtitleLarge, titleLarge } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import Onboarding from 'react-native-onboarding-swiper';

const SkipButton = ({ ...props }) => {
    return (

        < TouchableOpacity   {...props} style={{ marginLeft: 16 }}>
            < Text style={[subtitleLarge, { color: colors.primary500 }]} >Skip</Text >
        </TouchableOpacity >
    )
}
const NextButton = ({ ...props }) => {
    return (
        < TouchableOpacity   {...props} style={{ marginRight: 16 }}>
            < Text style={[subtitleLarge, { color: colors.primary500 }]} >Next</Text >
        </TouchableOpacity >
    )
}
const DoneButton = ({ ...props }) => {
    return (
        < TouchableOpacity   {...props} style={{ marginRight: 16 }}>
            < Text style={[subtitleLarge, { color: colors.primary500 }]} >Get Started</Text >
        </TouchableOpacity >
    )
}
const Dots = ({ selected }) => {
    return (
        < View style={{ width: selected ? 16 : 8, height: 8, borderRadius: 4, backgroundColor: selected ? colors.primary500 : colors.neutral300, marginRight: 8 }} />

    )
}


export default function OnboardingScreen({ navigation }) {
    const data = [
        {
            // backgroundColor: '#fff',
            // image: <Image source={require('./images/circle.png')} />,
            // title: 'Onboarding',
            // subtitle: 'Done with React Native Onboarding Swiper',
            // id: 1,
            image: <CuttingIcon />,
            backgroundColor: colors.neutral50,
            title: 'First Screen',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
            // id: 2,
            image: <CuttingIcon />,
            backgroundColor: colors.neutral50,
            title: 'Second Screen',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
        {
            // id: 3,
            image: <CuttingIcon />,
            backgroundColor: colors.neutral50,
            title: 'Third Screen',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },

    ]

    return (
        <Onboarding
            pages={data}
            titleStyles={titleLarge}
            subTitleStyles={bodySmall}
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            SkipButtonComponent={SkipButton}
            NextButtonComponent={NextButton}
            DoneButtonComponent={DoneButton}
            DotComponent={Dots}
            bottomBarColor={colors.neutral50}
        />
    )
}

const styles = StyleSheet.create({})