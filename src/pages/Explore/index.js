import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, fonts, IMGExplore1, IMGExplore2} from '../../assets';
import {Carousel, Gap} from '../../components';

import TabNavigator from './TabNavigator';
import TopTab from '../../components/molecules/TopTab';

const Explore = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopTab title="Eksplorasi" onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <Carousel
            image1={IMGExplore1}
            image2={IMGExplore2}
            image3={IMGExplore2}
          />
        </View>
        <Text style={styles.title}>Eksplorasi yuk!</Text>
        <TabNavigator navigation={navigation} />
        <Gap color={colors.white} width={'100%'} height={30} />
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  page: {
    // flex: 1,
    // height: 10000,
    backgroundColor: colors.white,
  },
  carouselContainer: {
    height: 190,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.Roboto.medium,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});
