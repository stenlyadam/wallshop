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

const AccountButton = ({
  title,
  icon,
  color = colors.grey,
  bottomBorder = colors.grey,
}) => {
  return (
    <TouchableOpacity style={styles.accountButtonContainer(bottomBorder)}>
      <Button type="icon-only" icon={icon} />
      <Text style={styles.buttonText(color)}>{title}</Text>
      <View style={styles.rightArrowContainer}>
        <IconArrowRight color={colors.grey} />
      </View>
    </TouchableOpacity>
  );
};

export default AccountButton;

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

  accountButtonContainer: bottomBorder => ({
    flexDirection: 'row',
    marginHorizontal: 31,
    borderBottomWidth: 1,
    borderBottomColor: bottomBorder,
    alignItems: 'center',
    paddingBottom: 9,
    paddingHorizontal: 7,
    marginBottom: 22,
  }),
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
