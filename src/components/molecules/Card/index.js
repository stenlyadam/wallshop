import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import {colors, IconStar, IconStarBig} from '../../../assets';
import { Button, Gap } from '../../atoms';

const Card = ({
  namaProduk,
  harga,
  toko,
  rating,
  jumlahRating,
  terjual,
  image,
  onPress
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.descContainer}>
        <Text style={styles.namaProduk}>{namaProduk}</Text>
        <Gap height={8}/>
        <Text style={styles.hargaProduk}>{harga}</Text>
        <Gap height={15} />
        <Text style={styles.toko}>{toko}</Text>
        <Gap height={5} />
        <View style={styles.ratingContainer} >
          <IconStar />
          <Gap width={5} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Gap width={5} />
          <Text style={styles.ratingText}>({jumlahRating})</Text>
          <Gap width={5} />
          <Text>|</Text>
          <Gap width={5} />
          <Text style={styles.ratingText}>Terjual {terjual}</Text>
        </View>
        <Button
          width={'100%'}
          radius={5}
          paddingHorizontal={0}
          height={25}
          title="Beli"
          color={colors.green}
          fontSize={14}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    flex: 2,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  container:{
    flex: 1,
    height: 350,
    elevation: 3,
    borderRadius: 15,
    marginBottom: 10,
    marginHorizontal: 5
  },
  descContainer: {
    flex: 2,
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 17,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  namaProduk: {
    flex: 1.5,
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 16,
    lineHeight: 16.41
  },
  hargaProduk: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16.41
  },
  toko: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 13,
    color: colors.grey
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  ratingText: {
    fontSize: 11
  }
});
