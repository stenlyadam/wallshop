import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, IMGDashboard} from '../../../assets';
import Swiper from 'react-native-swiper';

const Carousel = ({image1, image2, image3}) => {
  return (
    <Swiper
      style={styles.carouselWrapper}
      autoplay={true}
      dotStyle={{
        backgroundColor: colors.green,
        opacity: 0.5,
      }}
      paginationStyle={{bottom: 0}}
      activeDotStyle={{backgroundColor: colors.green}}>
      <View style={styles.slide1}>
        <Image source={image1} style={styles.carouselPicture} />
      </View>
      <View style={styles.slide1}>
        <Image source={image2} style={styles.carouselPicture} />
      </View>
      <View style={styles.slide1}>
        <Image source={image3} style={styles.carouselPicture} />
      </View>
    </Swiper>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselWrapper: {
    height: 200,
  },
  slide1: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  carouselPicture: {
    height: 160,
    width: '100%',
    borderRadius: 8,
  },
});
