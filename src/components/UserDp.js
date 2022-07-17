import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

export default function UserDp({ uri }) {
    return (
        <View>
            <Image
                source={{ uri: uri }}
                style={{ width: 48, height: 48, borderRadius: 7 }} />
        </View>
    )
}

const styles = StyleSheet.create({})