import React from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icecek from './Icecek';
import Yiyecek from './Yiyecek';
import App from './slide2';

const Tab = createMaterialTopTabNavigator();

const QrOkundu = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <App />

            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    swipeEnabled: false,
                    tabBarStyle: { elevation: 0 },
                }}
                tabBar={(props) => (
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
                                            backgroundColor: isFocused ? '#F4A218' : '#FFF',
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
                )}
            >
                <Tab.Screen name="İçecek" component={Icecek} />
                <Tab.Screen name="Yiyecek" component={Yiyecek} />
            </Tab.Navigator>

        </SafeAreaView>

    );
};
export default QrOkundu;