import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet ,Dimensions} from 'react-native';

const Carousel = ({ data }) => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    if (activeIndex > 0) {
      scrollViewRef.current.scrollTo({ x: (activeIndex - 1) * screenWidth, animated: true });
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < data.length - 1) {
      scrollViewRef.current.scrollTo({ x: (activeIndex + 1) * screenWidth, animated: true });
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.floor(contentOffsetX / screenWidth);
          setActiveIndex(newIndex);
        }}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Göstergeler */}
      <View style={styles.indicatorsContainer}>
        {data.map((_, index) => (
          <View key={index} style={[styles.indicator, index === activeIndex && styles.activeIndicator]} />
        ))}
      </View>

      {/* Sol ve sağ butonlar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.button}>
          <Text style={styles.buttonText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'blue',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Carousel;
