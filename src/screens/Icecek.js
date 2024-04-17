import React from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Screen } from 'react-native-screens';

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
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    swipeEnabled: false,
                    tabBarStyle: { elevation: 0 },
                }}
                tabBar={(props) => (
                    <View style={{ backgroundColor: '#F5F5F5', marginTop: 20 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
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
                                            {/* Resimleri ekleyin */}
                                            <Image source={iconSource} style={{ width: 60, height: 60 ,borderRadius:8}} />
                                            <Text style={{ color: '#546881' }}>{route.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </ScrollView>

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