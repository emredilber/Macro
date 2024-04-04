import React from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Screen1 = () => (
    <View style={{ flex: 1 }}>
        <Text>Screen 1</Text>
    </View>
);

const Screen2 = () => (
    <View style={{ flex: 1 }}>
        <Text>Screen 2</Text>
    </View>
);

const QrOkundu = () => {
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image source={require('../icons/1.png')} style={{ resizeMode: 'contain' }}></Image>

            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: { elevation: 0 },
                }}
                tabBar={(props) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20 }}>
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
                                        borderRadius: 10,
                                        backgroundColor: isFocused ? '#F4690B' : '#DDDDDD',
                                    }}
                                    onPress={() => props.navigation.navigate(route.name)}
                                >
                                    <Text style={{ color: isFocused ? '#FFFFFF' : '#333333' }}>{route.name}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                )}
            >
                <Tab.Screen name="İçecek" component={Screen1} />
                <Tab.Screen name="Yiyecek" component={Screen2} />
            </Tab.Navigator>
        </SafeAreaView>

    );
};
export default QrOkundu;
