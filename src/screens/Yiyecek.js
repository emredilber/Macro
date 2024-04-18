import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


const AnaYemek = () => {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#C1D0DA', paddingHorizontal: 16, marginTop: 20, height: 48, width: 330, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../icons/search.png')} style={{ width: 25, height: 25 }} />
          <TextInput placeholder='Arama' placeholderTextColor={'#C1D0DA'} style={{ marginLeft: 10 }} />
        </View>
        <Image source={require('../icons/scan.png')} style={{ width: 25, height: 25 }} />
      </View>
      <View style={{ borderWidth: 2, borderColor: '#C1D0DA', height: 50, borderRadius: 10, marginTop: 20, width: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../icons/setting.png')} style={{ width: 25, height: 25 }} />
      </View>
    </View>

  );
};
const Corba = () => {
  return (
    <View>

      <View style={{ borderBottomWidth: 1, borderBottomColor: '#C1D0DA', marginHorizontal: 10, marginTop: 20, padding: 10, flexDirection: 'row' }}>
        <Image source={require('../icons/tavuk.png')} style={{ marginHorizontal: 10, width: 70, height: 70, borderRadius: 8 }} />
        <View style={{ flexDirection: 'colums' }}>
          <Text style={{ color: '#3D4C5E' }}>Tavuk Izgara Şöleni</Text>
          <Text style={{ color: '#546881', fontSize: 13, width: 250, marginTop: 5 }}>Tavuk But, Şiş, Pirzola, Baget, Baharatlı Patates Kızartması, Pilav, Biber, Acılı Ezme, Meşrubat ve Salata ile servis edilir.</Text></View>
      </View>

    </View>
  );
};
const Aperatif = () => {
  return (
    <Text>Aperatif</Text>
  );
};
const Tatli = () => {
  return (
    <Text>Tatli</Text>
  );
};
const Pizza = () => {
  return (
    <Text>Pizza</Text>
  );
};
const Noodle = () => {
  return (
    <Text>Noodle</Text>
  );
};
const Makarna = () => {
  return (
    <Text>Makarna</Text>
  );
};
const Salata = () => {
  return (
    <Text>salata</Text>
  );
};
const Aperatif2 = () => {
  return (
    <Text>Aperatif2</Text>
  );
};


const Yiyecek = () => {
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

                  let iconSource;
                  if (route.name === 'AnaYemek') {
                    iconSource = require("../icons/ana-yemek.png");
                  } else if (route.name === 'Corba') {
                    iconSource = require("../icons/corba.png");
                  } else if (route.name === 'Aperatif') {
                    iconSource = require("../icons/aperatif.png");
                  } else if (route.name === 'Tatli') {
                    iconSource = require("../icons/tatli.png");
                  } else if (route.name === 'Pizza') {
                    iconSource = require("../icons/pizza.png");
                  } else if (route.name === 'Noodle') {
                    iconSource = require("../icons/noodle.png");
                  } else if (route.name === 'Makarna') {
                    iconSource = require("../icons/makarna.png");
                  } else if (route.name === 'Salata') {
                    iconSource = require("../icons/salata.png");
                  } else if (route.name === 'Aperatif2') {
                    iconSource = require("../icons/aperatif2.png");
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

            {/*ARAMA ALANI*/}
            <View style={{ flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#C1D0DA', paddingHorizontal: 16, marginTop: 20, height: 48, width: 330, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={require('../icons/search.png')} style={{ width: 25, height: 25 }} />
                  <TextInput placeholder='Arama' placeholderTextColor={'#C1D0DA'} style={{ marginLeft: 10 }} />
                </View>
                <Image source={require('../icons/scan.png')} style={{ width: 25, height: 25 }} />
              </View>
              <View style={{ borderWidth: 2, borderColor: '#C1D0DA', height: 50, borderRadius: 10, marginTop: 20, width: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../icons/setting.png')} style={{ width: 25, height: 25 }} />
              </View>
            </View>

          </View>
        )}
      >
        <Tab.Screen name="AnaYemek" component={AnaYemek} />
        <Tab.Screen name="Corba" component={Corba} />
        <Tab.Screen name="Aperatif" component={Aperatif} />
        <Tab.Screen name="Tatli" component={Tatli} />
        <Tab.Screen name="Pizza" component={Pizza} />
        <Tab.Screen name="Noodle" component={Noodle} />
        <Tab.Screen name="Makarna" component={Makarna} />
        <Tab.Screen name="Salata" component={Salata} />
        <Tab.Screen name="Aperatif2" component={Aperatif2} />
      </Tab.Navigator>
    </View>
  )
}

export default Yiyecek