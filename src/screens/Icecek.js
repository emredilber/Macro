import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Kahveler } from '../urunler/icecekler/kahve';
import { Alkolsuzler } from '../urunler/icecekler/alkolsuz';
import { Alkolluler } from '../urunler/icecekler/alkolu';
import { Saraplar } from '../urunler/icecekler/sarap';
import { Kokteyller } from '../urunler/icecekler/kokteyl';

const Tab = createMaterialTopTabNavigator();

const IcecekMenu = ({ urunler, onPressProduct, selectedCategory, searchText, setSearchText }) => {
    const filteredProducts = urunler.filter(urun => {
        return urun.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (!selectedCategory || urun.category === selectedCategory);
    });

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View style={{ marginTop: 20 }}>
                {filteredProducts.map((urun, index) => (
                    <TouchableOpacity key={index} onPress={() => onPressProduct(urun.name)}>
                        <View style={{ marginHorizontal: 24, flexDirection: 'column', rowGap: 32, marginBottom: 32 }}>
                            <View style={{ padding: 12, elevation: 6, backgroundColor: '#fff' }}>
                                <View style={{ borderBottomColor: '#C1D0DA', flexDirection: 'row' }}>
                                    <Image source={urun.picture} style={{ width: 70, height: 70, borderRadius: 8 }} />
                                    <View style={{ flexDirection: 'colums', marginLeft: 12 }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ color: '#3D4C5E' }}>{urun.name}</Text>
                                            <Text style={{ color: '#f4690b', fontWeight: 500 }}>₺ {urun.price}</Text>
                                        </View>
                                        <Text style={{ color: '#546881', fontSize: 13, width: 250, marginTop: 5 }}>{urun.description}</Text></View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 11 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../icons/kcal.png')} style={{ height: 16, tintColor: '#ff0000', resizeMode: 'contain' }} />
                                        <Text style={{ fontSize: 12, color: '#FF0000', fontWeight: 500, marginLeft: 2 }}>Kcal: {urun.nutrition.kcal}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../icons/protein.png')} style={{ height: 16, tintColor: '#f4690b', resizeMode: 'contain' }} />
                                        <Text style={{ fontSize: 12, color: '#f4690b', fontWeight: 500, marginLeft: 2 }}>Protein: {urun.nutrition.protein}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../icons/oil.png')} style={{ height: 16, tintColor: '#019de7', resizeMode: 'contain' }} />
                                        <Text style={{ fontSize: 12, color: '#019de7', fontWeight: 500, marginLeft: 2 }}>Yağ: {urun.nutrition.fat}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../icons/karb.png')} style={{ height: 16, tintColor: '#3dbd41', resizeMode: 'contain' }} />
                                        <Text style={{ fontSize: 12, color: '#3dbd41', fontWeight: 500, marginLeft: 2 }}>Karb: {urun.nutrition.carb}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
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
    const [selectedCategory, setSelectedCategory] = useState(null); // Seçilen kategoriyi saklar
    const [searchText, setSearchText] = useState('');


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
        setSelectedCategory(null);
    }, [selectedMenu]);
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
                                            <Text style={{ color: isFocused ? '#546881' : '#9CA3AF', fontWeight: isFocused ? 600:400}}>{selectedMenu.menu}</Text>
                                            <View >
                                                {isFocused && <View style={{ backgroundColor: '#F4A218', height: 3, width: 100, borderRadius: 2 }} />}
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </ScrollView>

                        <View style={{ flexDirection: 'row', gap: 17, marginTop: 30, justifyContent: 'center', }}>
                            {filterOptions.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        alignItems: 'center',
                                        borderRadius: selectedCategory === option ? 0 : 8,
                                        borderRightColor: selectedCategory === option ? '#FFF' : '#F4A218',
                                        borderLeftColor: selectedCategory === option ? '#FFF' : '#F4A218',
                                        borderTopColor: selectedCategory === option ? '#FFF' : '#F4A218',
                                        borderBottomColor: '#F4A218',
                                        borderRightWidth: 1.3,
                                        borderLeftWidth: 1.3,
                                        borderTopWidth: 1.3,
                                        borderBottomWidth: selectedCategory === option ? 2.6 : 1.3,
                                        paddingVertical: 4,
                                        paddingHorizontal: 12,
                                        marginBottom: selectedCategory === option ? -1.3 : 0
                                    }}
                                    onPress={() => { setSelectedCategory(selectedCategory === option ? null : option); }}
                                >
                                    <Text style={{ color: selectedCategory === option ? '#546881' : '#F4A218', }}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/*ARAMA ALANI*/}
                        <View style={{ marginTop: 15, flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#C1D0DA', paddingHorizontal: 16, height: 48, width: 330, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../icons/search.png')} style={{ width: 25, height: 25 }} />
                                    <TextInput placeholder='Arama' onChangeText={setSearchText} value={searchText} placeholderTextColor={'#C1D0DA'} style={{ flex: 1, marginLeft: 10 }} />
                                    <TouchableOpacity>
                                        <Image source={require('../icons/scan.png')} style={{ width: 25, height: 25 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={{ borderWidth: 2, borderColor: '#C1D0DA', height: 48, width: 48, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../icons/setting.png')} style={{ width: 25, height: 25 }} />
                            </TouchableOpacity>
                        </View>


                    </View>
                )}
            >
                {menuler.map((menu, index) => (
                    <Tab.Screen name={menu.menu} key={index}>
                        {() => <IcecekMenu
                            urunler={selectedCategory ? menu.urunler.filter(urun => urun.category === selectedCategory) : menu.urunler}
                            onPressProduct={(product) => console.log(product)}
                            selectedCategory={selectedCategory}
                            searchText={searchText}
                            setSearchText={setSearchText}
                        />}
                    </Tab.Screen>
                ))}
            </Tab.Navigator>
        </View>
    );
}

export default Icecek;