import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  colors,
  fonts,
  IconArrowRight,
  IconCart,
  IconCompass,
  IconElectronic,
  IconPin,
  IconWorld,
  IMGHandsanitizer,
  IMGMask,
  IMGSambalRoa,
  IMGSneakers,
  IMGTarantula,
  WellshopLogo,
} from '../../assets';
import {Button, Gap} from '../../components';
import {FormInput} from '../../components';
import Carousel from '../../components/molecules/Carousel';
import TopTab from '../../components/molecules/TopTab';

const Booking = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text>Booking</Text>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
