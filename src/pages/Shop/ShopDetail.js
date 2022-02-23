import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  colors,
  fonts,
  IconStarBig,
  IMGElonMusk,
  IMGGramedia,
  IMGGramediaShop,
  IMGManusiaDigital,
  IMGRatingDummy,
  IMGStephenHawking,
  IMGTheLeanStartup,
} from '../../assets';
import {Button, Gap} from '../../components';
import TopTab from '../../components/molecules/TopTab';

const ShopDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopTab title="Toko" onBack={() => navigation.goBack()} />
      <ScrollView style={styles.page}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Image source={IMGGramedia} style={styles.image} />
            <View>
              <Text style={styles.shopTitle}>Gramedia Mantos</Text>
              <Text style={styles.shopAddress}>Mantos, Kota Manado</Text>
            </View>
          </View>
          <Gap height={17} />
          <View style={styles.shopPoints}>
            <View style={styles.shopAlign}>
              <View style={styles.shopRatingStar}>
                <Text style={styles.shopPointsValue}>4.8</Text>
                <Gap width={4} />
                <IconStarBig />
              </View>
              <Text style={styles.shopSubTitle}>Dari pembeli</Text>
            </View>

            <View style={styles.shopAlign}>
              <Text style={styles.shopPointsValue}>27.5K</Text>
              <Text style={styles.shopSubTitle}>Pengikut</Text>
            </View>

            <View style={styles.shopAlign}>
              <Text style={styles.shopPointsValue}>127K</Text>
              <Text style={styles.shopSubTitle}>Kunjungan</Text>
            </View>
          </View>
          <Gap height={22} />
          <View style={styles.shopDescriptionContainer}>
            <Text style={styles.shopDescription}>
              PT. ACE Hardware Indonesia Tbk adalah sebuah perusahaan ritel yang
              bergerak dalam bidang perlengkapan rumah dan produk gaya hidup
            </Text>
          </View>
          <Gap height={9} />
          <View style={styles.shopFollowButtonContainer}>
            <Button
              title="Ikut"
              height={32}
              paddingHorizontal={0}
              color={colors.blue}
              width={170}
              fontFamily={fonts.Roboto.medium}
              fontSize={15}
            />
            <Button
              title="Kirim Pesan"
              height={32}
              paddingHorizontal={0}
              color={colors.lightGrey}
              width={170}
              fontColor={colors.black}
              fontFamily={fonts.Roboto.medium}
              fontSize={15}
            />
          </View>
          <Gap height={21} />
          <View style={styles.bestSellerContainer}>
            <View style={styles.booksContainer}>
              <View>
                <Image source={IMGStephenHawking} style={styles.books} />
              </View>
              <Gap height={8} />
              <Text numberOfLines={3}>Sejarah Singkat Waktu</Text>
            </View>
            <View style={styles.booksContainer}>
              <View>
                <Image source={IMGTheLeanStartup} style={styles.books} />
              </View>
              <Gap height={8} />
              <Text numberOfLines={3}>The Lean Startup</Text>
            </View>
            <View style={styles.booksContainer}>
              <View>
                <Image source={IMGElonMusk} style={styles.books} />
              </View>
              <Gap height={8} />
              <Text numberOfLines={3}>Elon Musk: Masa depan Fantastis</Text>
            </View>
            <View style={styles.booksContainer}>
              <View>
                <Image source={IMGManusiaDigital} style={styles.books} />
              </View>
              <Gap height={8} />
              <Text numberOfLines={3}>Manusia Digital</Text>
            </View>
          </View>
          <Gap height={14} />
          <Button
            title="CATALOGUE"
            paddingHorizontal={0}
            color={colors.green}
            height={43}
            radius={20}
          />
          <Gap height={15} />
          <Button
            title="PROMO"
            paddingHorizontal={0}
            color={colors.green}
            height={43}
            radius={20}
          />
          <Gap height={33} />
          <Image source={IMGGramediaShop} style={styles.shopPicture} />
          <Gap height={42} />
          <Image source={IMGRatingDummy} style={styles.ratingDummy} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  ratingDummy: {
    width: '100%',
  },
  shopPicture: {
    width: '100%',
    height: 204,
    borderRadius: 20,
  },
  booksContainer: {
    width: 80,
    alignItems: 'center',
    height: 135,
  },
  bestSellerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  books: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  shopFollowButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  shopDescription: {
    fontSize: 12,
  },
  shopDescriptionContainer: {
    paddingHorizontal: 5,
  },
  shopSubTitle: {
    fontSize: 10,
  },
  shopPointsValue: {
    fontFamily: fonts.Roboto.medium,
    fontSize: 25,
  },
  shopRatingStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopAlign: {
    alignItems: 'center',
  },
  shopPoints: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  shopAddress: {
    fontSize: 13,
    color: colors.grey,
  },
  shopTitle: {
    fontSize: 23,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
});
