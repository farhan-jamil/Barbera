import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cancel from '../screens/booking/Cancel';
import Pending from '../screens/booking/Pending';
import Confirm from '../screens/booking/Confirm';
import { subtitleLarge, bodyLarge, bodySmall } from '../../../utils/fonts';
import { colors } from '../../../utils/colors';
const Tab = createMaterialTopTabNavigator();
export default function TopNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // icon upper hoga us ka nechay name ay ga
                // tabBarIcon: ({ color, size }) => {
                //     let iconName;
                //     if (route.name === 'Pending') {
                //         iconName = 'calendar-blank-outline';
                //     } else if (route.name === 'Confirm') {
                //         iconName = 'check-circle-outline';
                //     } else if (route.name === 'Cancel') {
                //         iconName = 'cancel';
                //     }
                //     return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                // },
                tabBarLabel: ({ color, size, focused }) => {
                    let label;
                    if (route.name === 'Pending') {
                        label = 'Pending';
                    } else if (route.name === 'Confirm') {
                        label = 'Confirmed';
                    } else if (route.name === 'Cancel') {
                        label = 'Cancelled';
                    }
                    // caption, { color: focused ? colors.error500 : colors.primary500 }]
                    // focused ? subtitleLarge : bodyLarge,
                    return <Text style={[
                        bodyLarge,
                        {
                            color: focused?colors.neutral900:colors.neutral700,
                            // fontWeight: focused ? 'bold' : 'normal',
                        }]}>{label}</Text>;
                },
                // tabBarVisible: route.name === 'Pending' ? true : false,

                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary500,
                    height: 2,

                },
                tabBarStyle: {
                    backgroundColor: colors.neutral50,
                    elevation: 0,
                }

            }

            )

            }


        >
            <Tab.Screen name="Pending" component={Pending}
            // options={{
            //     tabBarLabel: 'Pending',
            //     tabBarIcon: ({ color, size, focused }) => (
            //         <View style={styles.wrap}>
            //             <MaterialCommunityIcons name='calendar-blank-outline' size={24}
            //                 style={{ color: focused ? colors.primary500 : colors.neutral700 }} />
            //             <Text style={[caption, { color: focused ? colors.primary500 : colors.neutral700 }]}>Pending</Text>
            //         </View>
            //     )
            // }}

            />
            <Tab.Screen name="Confirm" component={Confirm} />
            <Tab.Screen name="Cancel" component={Cancel} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})