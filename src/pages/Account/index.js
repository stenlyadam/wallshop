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
  IconOrder,
  IconPin,
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
import AccountButton from './AccountButton';

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TopTab title="Akun" type="no-cart" onBack={() => navigation.goBack()} />
      <View style={styles.profileContainer}>
        <Image source={IMGProfilePicture} style={styles.profilePicture} />
        <View>
          <Text style={styles.name}>Roland Candra</Text>
          <Text style={styles.email}>rolandcandra@gmail.com</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <AccountButton title="Pesanan Saya" icon="icon-order" />
        <AccountButton title="Favorit Saya" icon="icon-love" />
        <AccountButton title="Voucher Saya" icon="icon-ticket" />
        <AccountButton title="Alamat Saya" icon="icon-pin-2" />
        <AccountButton title="Privasi dan Kebijakan" icon="icon-protection" />
        <AccountButton title="Bantuan" icon="icon-help" />
        <AccountButton
          title="Keluar"
          color={colors.red}
          bottomBorder={colors.white}
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    height: 80,
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 27,
  },
  pageTitleText: {
    fontFamily: fonts.Roboto.regular,
    fontSize: 24,
    color: colors.white,
    marginLeft: 23,
  },

  contentContainer: {
    flex: 1,
    paddingTop: 28,
  },
  profileContainer: {
    flexDirection: 'row',
    paddingHorizontal: 38,
    alignItems: 'center',
    marginTop: 28,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 20,
  },
  name: {
    fontSize: 20,
    color: colors.text.primary,
  },
  email: {
    color: colors.text.grey,
  },

  accountButtonContainer: {
    flexDirection: 'row',
    marginHorizontal: 31,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    alignItems: 'center',
    paddingBottom: 9,
    paddingHorizontal: 7,
    marginBottom: 22,
  },
  buttonText: color => ({
    fontSize: 14,
    color: color,
    marginLeft: 15,
  }),
  rightArrowContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
});
