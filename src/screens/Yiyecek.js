import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AnaYemekler } from '../urunler/yiyecekler/anayemek';
import { Corbalar } from '../urunler/yiyecekler/corba';
import { Aperatifler } from '../urunler/yiyecekler/aperatif';
import { Tatlilar } from '../urunler/yiyecekler/tatli';
import { Pizallar } from '../urunler/yiyecekler/pizza';
import { Noodleler } from '../urunler/yiyecekler/noddle';
import { Makarnalar } from '../urunler/yiyecekler/makarna';
import { Salatalar } from '../urunler/yiyecekler/salata';

const Tab = createMaterialTopTabNavigator();


const YemekMenu = ({ urunler, onPressProduct, searchText }) => {
  const filteredProducts = urunler.filter(urun => {
      return urun.name.toLowerCase().includes(searchText.toLowerCase()) 
  });

  return (
      <ScrollView style={{ backgroundColor: '#fff' }}>
          <View style={{ marginTop: 20 }}>
            
            {/*YEMEKLER LİSTELENİYOR*/}
              
              {filteredProducts.map((urun, index) => ( 
                  <TouchableOpacity key={index} onPress={() => onPressProduct(urun.name)}>
                      <View style={{ marginHorizontal: 24, flexDirection: 'column', rowGap: 32, marginBottom: 16 }}>
                          <View style={{ padding: 12, backgroundColor: '#fff' ,borderBottomColor:'#DCE4ED',borderBottomWidth:1}}>
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
    menu: 'Ana Yemek',
    iconSource: require("../icons/ana-yemek.png"),
    urunler: AnaYemekler
  },
  {
    menu: 'Corba',
    iconSource: require("../icons/corba.png"),
    urunler: Corbalar
  },
  {
    menu: 'Aperatif',
    iconSource: require("../icons/aperatif.png"),
    urunler: Aperatifler
  },
  {
    menu: 'Tatli',
    iconSource: require("../icons/tatli.png"),
    urunler: Tatlilar
  },
  {
    menu: 'Pizza',
    iconSource: require("../icons/pizza.png"),
    urunler: Pizallar
  },
  {
    menu: 'Noddle',
    iconSource: require("../icons/noddle.png"),
    urunler: Noodleler
  },
  {
    menu: 'Makarna',
    iconSource: require("../icons/makarna.png"),
    urunler: Makarnalar
  },
  {
    menu: 'Salata',
    iconSource: require("../icons/salata.png"),
    urunler: Salatalar
  }
];


const Yiyecek = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ flex: 1 }}>
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
            {() => <YemekMenu
              urunler={menu.urunler}
              onPressProduct={(product) => console.log(product)}
              searchText={searchText}
            />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </View>
  )
}

export default Yiyecek