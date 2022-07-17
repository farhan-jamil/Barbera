import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../../common/splash/Splash';
import OnboardingScreen from '../../common/onboarding/OnboardingScreen';
import Login from '../../common/authentication/Login';
import Signup from '../../common/authentication/Signup';
import BottomNavigation from './BottomNavigation';
import EditProfile from '../screens/profile/EditProfile';
import Appointment from '../screens/appointments/Appointment';
import SelectService from '../screens/appointments/SelectService';
import SelectDateTime from '../screens/appointments/SelectDateTime';
import Summary from '../screens/appointments/Summary';
import ResetPassword from '../screens/profile/ResetPassword';
import NotificationSetting from '../screens/notification/NotificationSetting';
import VerifyEmail from '../../common/forgetPass/VerifyEmail';
import ResetPass from '../../common/forgetPass/ResetPass';
const Stack = createStackNavigator();
export default function StackNavigations() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={BottomNavigation} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Appointment" component={Appointment} />
            <Stack.Screen name="SelectService" component={SelectService} />
            <Stack.Screen name="SelectDateTime" component={SelectDateTime} />
            <Stack.Screen name="Summary" component={Summary} />
            <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="ResetPass" component={ResetPass} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})