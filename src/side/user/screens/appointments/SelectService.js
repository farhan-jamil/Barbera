import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'

import ProgressHeader from '../../../../components/headers/ProgressHeader'
import ServiceCard from '../../../../components/ServiceCard'
import ConcatButton from '../../../../components/ConcatButton'
import CommonStyle from '../../../CommonStyle'
export default function SelectService({ navigation }) {
    const BarberServicesData = [
        {
            id: 1,
            title: 'Haircut',
            price: '20',
            description: 'The ideal classic haircut haircut'
        },
        {
            id: 2,
            title: 'Hair Dry',
            price: '30',
            description: 'The ideal classic hair Dry'
        },
    ]
    const [selectedService, setSelectedService] = useState([])
    useEffect(() => {
        console.log('selectedService use effect.........', selectedService)
    }, [selectedService])
    const serviceHandler = (item) => {
        if (selectedService.length === 0) {
            setSelectedService(preData => [...preData, item])
        }
        else {
            let index = selectedService.findIndex(data => data.id === item.id)
            if (index === -1) {
                setSelectedService(preData => [...preData, item])
            }
            else {
                setSelectedService(preData => preData.filter(data => data.id !== item.id))
            }
        }
    }
    const check = (item) => {
        for (let i = 0; i < selectedService.length; i++) {
            if (selectedService[i].id == item.id) {
                return true
            }
        }
    }
    const navigationToScreenHandler = () => {
        if (selectedService.length === 0) {
            alert('Please select atleast one service')
        }
        else {
            navigation.navigate('SelectDateTime')
        }

    }
    return (
        <View style={CommonStyle.container}>
            <ProgressHeader
                progress={0.3}
                pageNumber={'1'}
                title={'Select Service'}
                onPress={() => navigation.navigate('Appointment')}
            />
            <View style={{ flex: 1, }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    data={BarberServicesData}
                    renderItem={({ item }) => (
                        <ServiceCard
                            // id={item.id}
                            // title={item.title}
                            // description={item.description}
                            // price={item.price}
                            citem={item}
                            onPress={() => { serviceHandler(item) }}
                            select={check(item)}
                        />
                    )}
                />
            </View>
            <View style={{}}>
                <ConcatButton
                    SecondaryTitle={'Back'}
                    Primarytitle={'Next'}
                    PrimaryonPress={() => navigationToScreenHandler()}
                    SecondaryonPress={() => navigation.goBack()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})