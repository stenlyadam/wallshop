import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, IconPinSmall, IconStar, IMGAceHardware} from '../../assets';
import {Gap} from '../../components';

const Toko = ({
  shopName,
  shopDescription,
  rating,
  location,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.shopContainer} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.shopTextContainer}>
        <Text style={styles.shopName}>{shopName}</Text>
        <Text style={styles.shopDescription}>{shopDescription}</Text>
        <View style={styles.shopRatingContainer}>
          <View style={styles.shopRating}>
            <IconStar />
            <Gap width={5} />
            <Text>{rating}</Text>
          </View>
          <Gap width={10} />
          <View style={styles.shopAddress}>
            <IconPinSmall />
            <Gap width={5} />
            <Text numberOfLines={1}>{location}</Text>
          </View>
        </View>
        <Gap height={10} />
      </View>
    </TouchableOpacity>
  );
};

export default Toko;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  shopContainer: {
    height: 80,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    marginBottom: 10,
  },
  shopName: {
    fontSize: 20,
  },
  shopDescription: {
    fontSize: 14,
    color: colors.grey,
  },
  shopTextContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  shopRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  shopRating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopAddress: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
  },
});
