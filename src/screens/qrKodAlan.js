import React from 'react';

import { Image, SafeAreaView, Text, View, } from 'react-native';

const QrKodAlan = () => {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:'#fff'}}>
      <View style={{ padding: 24 }}>
        <Image source={require('../icons/macroaltut.png')} style={{ width: 198, height: 36 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center',marginTop:40 }}>
        <Image source={require('../icons/restaurant.png')} style={{ height: 105, width: 143 }} />
      </View>
      <View>
        <Text style={{color:'#000',fontSize:27,textAlign:'center',fontWeight:900,marginTop:40}}>MENÜYÜ İNCELEMEK İÇİN QR KODU TARATINIZ</Text>
        <View style={{flexDirection:'row',alignItems:'center',marginTop:35}}>
          <View style={{flex:1,height:6,backgroundColor:'#F4690B'}}></View>
          <View style={{height:170,width:170,borderWidth:6,borderColor:'#F4690B',borderRadius:11, alignItems:'center',padding:8}}>
            <Image source={require('../icons/qr.png')} style={{flex:1, resizeMode:'contain',margin:10}}  />
            <Text style={{fontSize:9.5,fontWeight:500,color:'#000'}}>www.pasabahcerestaurant.com</Text>
          </View>
          <View style={{flex:1,height:6,backgroundColor:'#F4690B'}}></View>
        </View>
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