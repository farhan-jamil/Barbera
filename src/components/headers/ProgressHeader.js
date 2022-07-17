import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider } from 'react-native-elements'
import * as Progress from 'react-native-progress';
import { subtitleSmall, bodySmall, caption } from '../../utils/fonts'
import { colors } from '../../utils/colors'
export default function ProgressHeader({
    progress,
    pageNumber,
    title,
    onPress
}) {
    return (
        <View style={{ backgroundColor: colors.neutral50 }}>
            <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: colors.neutral50 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <Progress.Circle progress={progress} size={56}
                        showsText={true}
                        thickness={4}
                        formatText={() => progress * 100 + '%'}
                        color={colors.primary500}
                        // fill={colors.error500}
                        allowFontScaling={true}
                        textStyle={[caption, { color: colors.neutral900 }]}
                        // endAngle={0.1}
                        borderWidth={1}
                        borderColor={colors.neutral700}
                    />
                    <View style={{ flex: 1, marginLeft: 12 }}>

                        <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{title}</Text>
                        <Text style={[bodySmall, { color: colors.neutral700 }]}>{pageNumber} of 3</Text>
                    </View>
                    <TouchableOpacity style={{}} onPress={onPress}>
                        <MaterialCommunityIcons name='close' color={colors.neutral700} size={24} />
                    </TouchableOpacity>
                </View>
            </View>
            <Divider width={1} color={colors.neutral400} />
        </View>
    )
}

const styles = StyleSheet.create({})
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import { Divider } from 'react-native-elements'
// import * as Progress from 'react-native-progress';
// import { subtitleSmall, bodySmall, caption } from '../../utils/fonts'
// import { colors } from '../../utils/colors'
// export default function ProgressHeader({
//     progress,
//     pageNumber,
//     title
// }) {
//     return (
//         <View style={{ backgroundColor: colors.neutral50 }}>
//             <View style={{ paddingHorizontal: 16, paddingVertical: 12, backgroundColor: colors.neutral50 }}>
//                 <View style={{
//                     flexDirection: 'row',
//                     alignItems: 'center', justifyContent: 'center',
//                     backgroundColor: 'pink'
//                 }}>
//                     <Progress.Circle progress={progress} size={56}
//                         showsText={true}
//                         thickness={4}
//                         formatText={() => progress * 100 + '%'}
//                         // fill={colors.error500}
//                         allowFontScaling={true}
//                         textStyle={[caption, { color: colors.neutral900 }]}
//                         // endAngle={0.1}
//                         borderWidth={1}
//                         borderColor={colors.neutral700}
//                     />
//                     <View style={{ flex: 1, marginLeft: 12, backgroundColor: 'yellow' }}>
//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                             <Text style={[subtitleSmall, { color: colors.neutral900 }]}>{title}</Text>
//                             <MaterialCommunityIcons name='close' color={colors.neutral700} size={24} />
//                         </View>

//                         <Text style={[bodySmall, { color: colors.neutral700 }]}>{pageNumber} of 3</Text>
//                     </View>
//                 </View>
//             </View>
//             <Divider width={1} />
//         </View>
//     )
// }

// const styles = StyleSheet.create({})