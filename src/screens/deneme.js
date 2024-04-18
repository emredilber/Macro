import React from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const KahveMenu = () => {
    return (
        <Text>kahve</Text>
    );
};
const AlkolsuzMenu = () => {
    return (
        <Text>Alkolsuz</Text>
    );
};
const AlkolluMenu = () => {
    return (
        <Text>Alkollu</Text>
    );
};
const SarapMenu = () => {
    return (
        <Text>Sarap</Text>
    );
};
const KokteylMenu = () => {
    return (
        <Text>Kokteyl</Text>
    );
};


const Icecek = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    swipeEnabled: false,
                    tabBarStyle: { elevation: 0 },

                }}
                tabBar={(props) => (
                    <View style={{ backgroundColor: '#fff', marginTop: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 15, gap: 17 }}>
                                {props.state.routes.map((route, index) => {
                                    const isFocused = props.state.index === index;

                                    let iconSource;
                                    if (route.name === 'Kahve') {
                                        iconSource = require("../icons/kahve.png");
                                    } else if (route.name === 'Alkolsuz') {
                                        iconSource = require("../icons/alkolsuz.png");
                                    } else if (route.name === 'Alkollu') {
                                        iconSource = require("../icons/alkollu.png");
                                    } else if (route.name === 'Sarap') {
                                        iconSource = require("../icons/sarap.png");
                                    } else if (route.name === 'Kokteyl') {
                                        iconSource = require("../icons/kokteyl.png");
                                    }

                                    return (
                                        <TouchableOpacity
                                            key={route.key}
                                            style={{
                                                alignItems: 'center',
                                                borderRadius: 12,
                                            }}
                                            onPress={() => {
                                                props.navigation.navigate(route.name);
                                            }}
                                        >
                                            <Image source={iconSource} style={{ width: 100, height: 100, borderRadius: 8 }} />
                                            <Text style={{ color: isFocused ? '#546881' : '#9CA3AF' }}>{route.name}</Text>
                                            <View style={{ paddingBottom: 22 }}>
                                                {isFocused && <View style={{ backgroundColor: '#F4A218', height: 3, width: 100, borderRadius: 2 }} />}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </ScrollView>
                        {}
                        <View style={{ flexDirection: 'row', marginHorizontal: 15, gap: 17 }}>
                            {props.state.routes.map((route, index) => {
                                const isFocused = props.state.index === index;

                                return (
                                    <TouchableOpacity
                                        key={route.key}
                                        style={{
                                            alignItems: 'center',
                                            borderRadius: 12,
                                        }}
                                        onPress={() => {
                                            props.navigation.navigate(route.name);
                                        }}
                                    >
                                        <Text style={{ color: isFocused ? '#546881' : '#9CA3AF' }}>{route.name}</Text>
                                        <View style={{ paddingBottom: 22 }}>
                                            {isFocused && <View style={{ backgroundColor: '#F4A218', height: 3, width: 100, borderRadius: 2 }} />}
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        {/*ARAMA ALANI*/}
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#C1D0DA', paddingHorizontal: 16, height: 48, width: 330, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../icons/search.png')} style={{ width: 25, height: 25 }} />
                                    <TextInput placeholder='Arama' placeholderTextColor={'#C1D0DA'} style={{ marginLeft: 10 }} />
                                </View>
                                <Image source={require('../icons/scan.png')} style={{ width: 25, height: 25 }} />
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#C1D0DA', height: 48, width: 48, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../icons/setting.png')} style={{ width: 25, height: 25 }} />
                            </View>
                        </View>

                    </View>
                )}
            >

                <Tab.Screen name="Kahve" component={KahveMenu} />
                <Tab.Screen name="Alkolsuz" component={AlkolsuzMenu} />
                <Tab.Screen name="Alkollu" component={AlkolluMenu} />
                <Tab.Screen name="Sarap" component={SarapMenu} />
                <Tab.Screen name="Kokteyl" component={KokteylMenu} />
            </Tab.Navigator>
        </View>
    )
}

export default Icecek