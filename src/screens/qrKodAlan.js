import React from 'react';

import { Image, SafeAreaView, Text, View, } from 'react-native';

const QrKodAlan = () => {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:'#fff'}}>
      <View style={{ padding: 24 }}>
        <Image source={require('../icons/macroaltut.png')} style={{ width: 198, height: 36 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
        <Image source={require('../icons/restaurant.png')} style={{ height: 105, width: 143 }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end',alignItems:'center',marginBottom:20}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 42, width: 84, height: 84, borderColor: '#000', borderWidth: 4, }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 30, width: 60, height: 60, borderColor: '#000', borderWidth: 4, }}>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default QrKodAlan;