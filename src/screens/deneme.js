import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Kahveler } from '../urunler/icecekler/kahve';
import { Alkolsuzler } from '../urunler/icecekler/alkolsuz';
import { Alkolluler } from '../urunler/icecekler/alkolu';
import { Saraplar } from '../urunler/icecekler/sarap';
import { Kokteyller } from '../urunler/icecekler/kokteyl';

const Tab = createMaterialTopTabNavigator();

const IcecekMenu = ({ urunler, onPressProduct }) => {
    const [searchText, setSearchText] = useState('');

    const filteredProducts = urunler.filter(urun => {
        return urun.name.toLowerCase().includes(searchText.toLowerCase());
    });

    return (
        <ScrollView>
            <View style={{ padding: 20 }}>
                <TextInput
                    placeholder="Ürün ara"
                    onChangeText={setSearchText}
                    value={searchText}
                    style={{ marginBottom: 20, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }}
                />
                {filteredProducts.map((urun, index) => (
                    <TouchableOpacity key={index} onPress={() => onPressProduct(urun.name)}>
                        <Text>{urun.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};
const menuler = [
    {
        menu: 'Kahve',
        iconSource: require("../icons/kahve.png"),
        urunler: Kahveler
    },
    {
        menu: 'Alkolsuz',
        iconSource: require("../icons/alkolsuz.png"),
        urunler: Alkolsuzler
    },
    {
        menu: 'Alkollu',
        iconSource: require("../icons/alkollu.png"),
        urunler: Alkolluler
    },
    {
        menu: 'Sarap',
        iconSource: require("../icons/sarap.png"),
        urunler: Saraplar
    },
    {
        menu: 'Kokteyl',
        iconSource: require("../icons/kokteyl.png"),
        urunler: Kokteyller
    }
];


const Icecek = () => {
    const [selectedMenu, setSelectedMenu] = useState(menuler[0]);
    const [filterOptions, setFilterOptions] = useState([]);

    useEffect(() => {
        // Filtre seçeneklerini oluştur
        let options = [];
        // Sadece seçili menünün ürünlerindeki kategori ve menşei bilgilerini al
        selectedMenu.urunler.forEach(item => {
            if (item.category && !options.includes(item.category)) {
                options.push(item.category);
            }
            if (item.menşei && !options.includes(item.menşei)) {
                options.push(item.menşei);
            }
        });
        setFilterOptions(options);
    }, [selectedMenu]);

    const handleFilter = (filter) => {
        // Filtreleme işlemleri burada yapılacak
        console.log(`Filtre uygulandı: ${filter}`);
    };

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

                                    const selectedMenu = menuler.find(menu => menu.menu === route.name);
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={{
                                                alignItems: 'center',
                                                borderRadius: 12,
                                            }}
                                            onPress={() => {
                                                setSelectedMenu(selectedMenu);
                                                props.navigation.navigate(route.name);
                                            }}
                                        >
                                            <Image source={selectedMenu.iconSource} style={{ width: 100, height: 100, borderRadius: 8 }} />
                                            <Text style={{ color: selectedMenu === selectedMenu ? '#546881' : '#9CA3AF' }}>{selectedMenu.menu}</Text>
                                            <View style={{ paddingBottom: 22 }}>
                                                {isFocused && <View style={{ backgroundColor: '#F4A218', height: 3, width: 100, borderRadius: 2 }} />}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </ScrollView>

                        <View style={{ flexDirection: 'row', marginHorizontal: 15, gap: 17 }}>
                            {filterOptions.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        alignItems: 'center',
                                        borderRadius: 12,
                                    }}
                                    onPress={() => handleFilter(option)}
                                >
                                    <Text style={{ color: '#546881' }}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                    </View>
                )}
            >
                {menuler.map((menu, index) => (
                    <Tab.Screen name={menu.menu} key={index}>
                        {() => <IcecekMenu urunler={menu.urunler} onPressProduct={(product) => console.log(product)} />}
                    </Tab.Screen>
                ))}
            </Tab.Navigator>
        </View>
    );
}

export default Icecek;