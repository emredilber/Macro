import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icecek from './Icecek';
import Yiyecek from './Yiyecek';
import App from './slide';

const Tab = createMaterialTopTabNavigator();

const QrOkundu = () => {
    const [open, setOpen] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
            setKeyboardHeight(event.endCoordinates.height);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHeight(0);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    swipeEnabled: false,
                    tabBarStyle: { elevation: 0 },
                }}
                tabBar={(props) => (
                    <View style={{marginTop:-keyboardHeight}}>
                        <App />
                        <View style={{ backgroundColor: '#F5F5F5', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 65 }}>
                                {props.state.routes.map((route, index) => {
                                    const isFocused = props.state.index === index;
                                    return (
                                        <TouchableOpacity
                                            key={route.key}
                                            style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: 10,
                                                paddingHorizontal: 40,
                                                borderRadius: 12,
                                                backgroundColor: isFocused ? '#F4A218' : null,
                                                marginVertical: 12
                                            }}
                                            onPress={() => {
                                                props.navigation.navigate(route.name);
                                            }}
                                        >
                                            <Text style={{ color: isFocused ? 'white' : '#546881' }}>{route.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </View>
                )}
            >
                <Tab.Screen name="İçecek" component={Icecek} />
                <Tab.Screen name="Yiyecek" component={Yiyecek} />
            </Tab.Navigator>

            <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
                <TouchableOpacity onPress={toggleMenu} style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#f4690b', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={open ? require('../icons/sepet.png') : require('../icons/zil.png')} style={{ height: 36, resizeMode: 'contain' }} />
                </TouchableOpacity>
                {open && (
                    <View style={{ position: 'absolute', bottom: 70, right: 8 }}>
                        <TouchableOpacity onPress={toggleMenu} style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: '#f4a218', alignItems: 'center', justifyContent: 'center', zIndex: 999, marginBottom: 10 }}>
                            <Image source={require('../icons/zil.png')} style={{ height: 30, resizeMode: 'contain' }} />

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: '#f4a218', alignItems: 'center', justifyContent: 'center', zIndex: 999, marginBottom: 10 }}>
                            <Image source={require('../icons/payment.png')} style={{ height: 30, resizeMode: 'contain' }} />

                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: '#f4a218', alignItems: 'center', justifyContent: 'center', zIndex: 999, marginBottom: 10 }}>
                            <Image source={require('../icons/liste.png')} style={{ height: 30, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default QrOkundu;
