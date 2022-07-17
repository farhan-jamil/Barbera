import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { subtitleSmall, bodySmall, subtitleLarge } from '../utils/fonts'
import UserIcon from '../assets/svg/UserIcon.svg'
export default function ServiceCard({
    // id,
    // title,
    // description,
    // price,
    select,
    citem,
    onPress,
    selectedServices
}) {
    console.log('selectedServices in component', select)
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            backgroundColor: select ? colors.primary50 : colors.neutral50,
        }}
            onPress={onPress}
        >
            <View
                style={styles.image}>
                <UserIcon />
                {/* <FontAwesome5 name='headset' size={24} color={colors.neutral900} /> */}
            </View>
            <View style={styles.textedWrapper}>
                <View style={{ flex: 1, paddingVertical: 12 }}>
                    <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{citem.title}</Text>
                    <Text style={[bodySmall, { color: colors.neutral700 }]}>{citem.description}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[subtitleLarge, { color: colors.primary500, paddingLeft: 8, paddingRight: 16 }]}>${citem.price}</Text>
                </View>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16
    },
    textedWrapper: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: colors.neutral400,
        borderBottomWidth: 1,
        marginLeft: 8
    },
})
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { colors } from '../utils/colors'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { subtitleSmall, bodySmall, caption, subtitleLarge } from '../utils/fonts'
// export default function ServiceCard({
//     title,
//     description,
//     price
// }) {
//     return (
//         <TouchableOpacity style={{ flexDirection: 'row', }}
//         >
//             <View
//                 style={styles.image}>
//                 <FontAwesome5 name='headset' size={24} color={colors.neutral900} />
//             </View>
//             <View style={styles.textedWrapper}>
//                 <View style={{ flex: 1, paddingVertical: 12 }}>
//                     <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{title}</Text>
//                     <Text style={[bodySmall, { color: colors.neutral700 }]}>{description}</Text>
//                 </View>
//                 <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                     <Text style={[subtitleLarge, { color: colors.primary500, paddingLeft: 8, paddingRight: 16 }]}>${price}</Text>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     )
// }

// const styles = StyleSheet.create({
//     image: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingLeft: 16
//     },
//     textedWrapper: {
//         flex: 1,
//         flexDirection: 'row',
//         borderBottomColor: colors.neutral400,
//         borderBottomWidth: 1,
//         marginLeft: 8
//     },
// })