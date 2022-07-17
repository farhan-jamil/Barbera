import { View, StyleSheet, FlatList } from "react-native";
import React, { useRef, useEffect, } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { colors } from "../../../../utils/colors";
import ReviewCard from "../../../../components/ReviewCard";
import { Divider } from "react-native-elements";
import RatingCard from "../../../../components/RatingCard";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function BSheet({ openBottomSheet, onCLose }) {
    const refRBSheet = useRef();
    // console.log('openBottomSheet', openBottomSheet);
    // console.log('setOpenBottomSheet', onCLose);
    useEffect(() => {
        refRBSheet.current.open();
        // console.log('refRBSheet....r', refRBSheet);
        // console.log('refRBSheet.current.open()', refRBSheet.current.open());

    }, [refRBSheet])
    return (
        <>
            {openBottomSheet ?
                <RBSheet
                    height={hp(60.4)}
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={false}
                    dragFromTopOnly={true}
                    onClose={onCLose}
                    animationType='slide'
                    customStyles={{
                        wrapper: {
                            backgroundColor: "transparent"
                        },
                        container: {
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            elevation: 5,
                            shadowColor: 'black',
                        },
                        draggableIcon: {
                            backgroundColor: colors.neutral400
                        }
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: colors.neutral50 }}>
                        <FlatList
                            data={[1]}
                            showsVerticalScrollIndicator={false}
                            renderItem={() => (
                                <>
                                    <RatingCard />
                                    <FlatList
                                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                        showsVerticalScrollIndicator={false}
                                        renderItem={({ item }) =>
                                            <>
                                                <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
                                                    <ReviewCard />
                                                </View>
                                                <Divider width={1} color={colors.neutral400} />
                                            </>
                                        }
                                        keyExtractor={item => item.toString()}
                                    />
                                </>
                            )}
                        />
                    </View>
                </RBSheet>
                :
                null
            }
        </>

    );
}

const styles = StyleSheet.create({})