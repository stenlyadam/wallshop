import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
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

const Comments = ({account, username}) => {
  return (
    <View style={styles.commentContainer}>
      <Image source={IMGProfilePicture} style={styles.profilePicture} />
      <View style={styles.commentWrapper}>
        <Text style={styles.commentText}>
          <Text style={styles.boldText}>{account}</Text> menandai anda dalam
          sebuah komentar: <Text style={styles.blueText}>{username}</Text> lucu
          banget <Text style={styles.greyText}> 8j</Text>
        </Text>
        <View style={styles.loveReplyContainer}>
          <Button type="icon-only" icon="icon-love-small" />
          <TouchableOpacity>
            <Text style={styles.greyText}>Balas</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Comments;

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
  boldText: {
    fontFamily: fonts.Roboto.bold,
  },
  blueText: {
    color: 'blue',
  },
});
