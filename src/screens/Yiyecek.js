import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


const Yiyecek = () => {

  const data = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ];
  return (
    <View style={{ flex: 1 }}>
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

      <View style={{ borderBottomWidth: 1, borderBottomColor: '#C1D0DA', marginHorizontal: 10, marginTop: 20, padding: 10, flexDirection: 'row' }}>
        <Image source={require('../icons/tavuk.png')} style={{ marginHorizontal: 10, width: 70, height: 70, borderRadius: 8 }} />
        <View style={{ flexDirection: 'colums' }}>
          <Text style={{ color: '#3D4C5E' }}>Tavuk Izgara Şöleni</Text>
          <Text style={{ color: '#546881', fontSize: 13, width: 250, marginTop: 5 }}>Tavuk But, Şiş, Pirzola, Baget, Baharatlı Patates Kızartması, Pilav, Biber, Acılı Ezme, Meşrubat ve Salata ile servis edilir.</Text></View>
      </View>
    </View>
  )
}

export default Yiyecek