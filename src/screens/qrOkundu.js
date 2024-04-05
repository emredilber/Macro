import React from 'react';
import { Image, SafeAreaView, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icecek from './Icecek';
import Yiyecek from './Yiyecek';
import App from './slide2';

const data = [
    { image: require('../icons/1.png') },
    { image: require('../icons/1.png') },
    { image: require('../icons/1.png') },
];

const Tab = createMaterialTopTabNavigator();

const renderItem = ({ item }) => (
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={item.image} style={{ width: '100%', height: 300, }} />
    </View>
);

const QrOkundu = () => {
    const screenWidth = Dimensions.get('window').width;

    const [activeIndex, setActiveIndex] = React.useState(0);

    const carouselRef = React.useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    const goBack = () => {
        carouselRef.current.snapToPrev();
    };

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <App/>

            <Tab.Navigator 
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: { elevation: 0 },
                }}
                tabBar={(props) => (
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
                                    onPress={() => props.navigation.navigate(route.name)}
                                >
                                    <Text style={{ color: isFocused ? '#FFFFFF' : '#546881' }}>{route.name}</Text>
                                </TouchableOpacity>
                            );
                        })}
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