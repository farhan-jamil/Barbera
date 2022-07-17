import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/home/Home'
import Booking from '../screens/booking/Booking'
import Notification from '../screens/notification/Notification'
import Profile from '../screens/profile/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { caption } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: colors.neutral50,
                },
                tabBarHideOnKeyboard: true
                // tabBarStyle: { paddingVertical: 16 }
            }}>
            <Tab.Screen name="Home2" component={Home}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={styles.wrap}>
                            <MaterialCommunityIcons name='home-outline' size={24}
                                style={{ color: focused ? colors.primary500 : colors.neutral700 }}
                            />
                            <Text style={[caption, { color: focused ? colors.primary500 : colors.neutral700 }]}>Home</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Booking" component={Booking}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={styles.wrap}>
                            <MaterialCommunityIcons name='calendar-blank-outline' size={24}
                                style={{ color: focused ? colors.primary500 : colors.neutral700 }} />
                            <Text style={[caption, { color: focused ? colors.primary500 : colors.neutral700 }]}>Booking</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Notification" component={Notification}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={styles.wrap}>
                            <MaterialIcons name='notifications-none' size={24}
                                style={{ color: focused ? colors.primary500 : colors.neutral700 }} />
                            <Text
                                style={[caption,
                                    { color: focused ? colors.primary500 : colors.neutral700 }]}>Notification</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View style={styles.wrap}>
                            <FontAwesome name='user-o' size={24}
                                style={{ color: focused ? colors.primary500 : colors.neutral700 }} />
                            <Text style={[caption, { color: focused ? colors.primary500 : colors.neutral700 }]}>Profile</Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: 'center', alignItems: 'center'
    },

})