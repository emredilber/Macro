import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data = [
    { image: require('../icons/1.png') },
    { image: require('../icons/1.png') },
    { image: require('../icons/1.png') },
];

const renderItem = ({ item }) => (
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={item.image} style={{ width: '100%', height: 315, resizeMode: 'contain' }} />
    </View>
);

const App = () => {
    const screenWidth = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const goForward = () => {
        if (carouselRef.current) {
            carouselRef.current.snapToNext();
        }
    };

    const goBack = () => {
        if (carouselRef.current) {
            carouselRef.current.snapToPrev();
        }
    };

    return (
        <View>
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Image source={require("../icons/logo.png")} style={{ position: 'absolute', width: 48, height: 48, marginLeft: 12, marginTop: 16 }} />
            <TouchableOpacity style={{position:'absolute',backgroundColor:'#fff',paddingVertical:10,paddingHorizontal:20,borderRadius:12,alignSelf:'flex-end',right:15,top:20}}>
                <Text style={{color:'#F4A218', fontSize:16,fontWeight:500}}>Garson Çağır</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', top: '50%', left: 20, height: 40, width: 40, backgroundColor: '#293644', opacity: 0.7, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={goBack}>
                <Image source={require('../icons/left.png')} style={{ height: 18, width: 9 }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ position: 'absolute', top: '50%', right: 20, height: 40, width: 40, backgroundColor: '#293644', opacity: 0.7, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={goForward}>
                <Image source={require('../icons/right.png')} style={{ height: 18, width: 9 }} />
            </TouchableOpacity>
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
                containerStyle={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}
                dotStyle={{ width: 18, height: 4.5, borderRadius: 2, backgroundColor: 'white' }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
                dotContainerStyle={{ marginHorizontal: 5 }}
                inactiveDotStyle={{ width: 18, height: 4.5, borderRadius: 2, backgroundColor: 'white' }}
            />
        </View>
    );
};

export default App;
