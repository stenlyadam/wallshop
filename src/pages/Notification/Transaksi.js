import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {
  colors,
  fonts,
  IconArrowRight,
  IconBox,
  IconCar,
  IconCart,
  IconClock,
  IconCompass,
  IconCompleted,
  IconElectronic,
  IconPin,
  IconWallet,
  IconWorld,
  IMGHandsanitizer,
  IMGMask,
  IMGProfilePicture,
  IMGSambalRoa,
  IMGSneakers,
  IMGTarantula,
  WellshopLogo,
} from '../../assets';
import {Button, Gap} from '../../components';
import {FormInput} from '../../components';
import Carousel from '../../components/molecules/Carousel';
import TopTab from '../../components/molecules/TopTab';
import Comments from './Comments';
import DATA from './DATA';

const Transaksi = ({navigation}) => {
  const renderItem = ({item}) => (
    <Comments account={item.account} username={item.username} />
  );
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.waitingForPaymentContainer}>
        <IconWallet />
        <Text style={styles.waitingForPaymentText}>Belum di Bayar</Text>
        <View style={styles.arrowRightContainer}>
          <IconArrowRight color={colors.grey} />
        </View>
      </TouchableOpacity>
      <Gap height={1} color={colors.grey} />
      <Gap height={35} />
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
          <IconClock />
          <Text style={styles.buttonText}>Menunggu Konfirmasi</Text>
        </View>
        <View style={styles.buttonContainer}>
          <IconBox />
          <Text style={styles.buttonText}>Dikemas</Text>
        </View>
        <View style={styles.buttonContainer}>
          <IconCar />
          <Text style={styles.buttonText}>Dikirim</Text>
        </View>
        <View style={styles.buttonContainer}>
          <IconCompleted />
          <Text style={styles.buttonText}>Tiba di Tujuan</Text>
        </View>
      </View>
      <Gap height={15} />
      <Gap height={1} color={colors.grey} />
      <Text style={styles.subTitle}>Hari Ini</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Transaksi;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  waitingForPaymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  waitingForPaymentText: {
    color: colors.grey,
    marginLeft: 16,
  },
  arrowRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    height: 75,
    width: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.grey,
    textAlign: 'center',
    marginTop: 9,
  },
  subTitle: {
    fontFamily: fonts.Roboto.black,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 17,
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 15,
  },
  commentWrapper: {
    flex: 1,
  },
  commentText: {
    fontSize: 14,
  },
  loveReplyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 65,
    justifyContent: 'space-between',
  },
  greyText: {
    color: colors.grey,
  },
});
