import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors, IconPinSmall, IconStar, IMGAceHardware} from '../../assets';
import {Gap, Button} from '../../components';

const PopularShop = ({shopName, shopDescription, rating, location, image}) => {
  return (
    <View style={styles.popularShopContainer}>
      <Image source={image} />
      <View style={styles.popularShopTextContainer}>
        <Text style={styles.popularShopName}>{shopName}</Text>
        <Text style={styles.popularShopDescription}>{shopDescription}</Text>
        <View style={styles.popularShopRatingContainer}>
          <View style={styles.popularShopRating}>
            <IconStar />
            <Gap width={5} />
            <Text>{rating}</Text>
          </View>
          <Gap width={10} />
          <View style={styles.popularShopAddress}>
            <IconPinSmall />
            <Gap width={5} />
            <Text numberOfLines={1}>{location}</Text>
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.popularShopButtonContainer}>
          <Button
            width={100}
            radius={5}
            paddingHorizontal={0}
            height={25}
            title="Ikuti"
            color={colors.green}
            fontSize={12}
          />
          <Button
            width={100}
            radius={5}
            paddingHorizontal={0}
            height={25}
            title="Lihat Toko"
            color={colors.green}
            fontSize={12}
          />
        </View>
      </View>
    </View>
  );
};

export default PopularShop;

const styles = StyleSheet.create({
  popularShopContainer: {
    height: 125,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    marginBottom: 12,
  },
  popularShopName: {
    fontSize: 20,
  },
  popularShopDescription: {
    fontSize: 14,
    color: colors.grey,
  },
  popularShopTextContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularShopRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  popularShopRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularShopAddress: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
  },
  popularShopButtonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});
