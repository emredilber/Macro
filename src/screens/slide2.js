import React from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const data = [
    { image: require('../icons/1.png') },
    { image: require('../icons/1.png') },
    { image: require('../icons/1.png') },
];

const renderItem = ({ item }) => (
    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={item.image} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
    </View>
);

const App = () => {
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
        <View >
            <View>
                <Carousel
                    ref={carouselRef}
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
                <TouchableOpacity style={{ position: 'absolute', top: '50%', left: 20, height: 40, width: 40, backgroundColor: '#293644', opacity: 0.7, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={goBack}>
                    <Image source={require('../icons/left.png')} style={{ height: 18, width: 9 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', top: '50%', right: 20, height: 40, width: 40, backgroundColor: '#293644', opacity: 0.7, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} onPress={goForward}>
                    <Image source={require('../icons/right.png')} style={{ height: 18, width: 9 }} />
                </TouchableOpacity>
            </View>
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
                containerStyle={{ paddingTop: 8, paddingBottom: 16 }}
                dotStyle={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'blue' }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
};

export default App;
