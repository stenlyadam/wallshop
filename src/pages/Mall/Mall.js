import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, IconSmallClock} from '../../assets';
import {Gap} from '../../components';

const Mall = ({
  mallName,
  mallLocation,
  range,
  time,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.mallContainer} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.mallTextContainer}>
        <Text style={styles.mallName}>{mallName}</Text>
        <Text style={styles.mallLocation}>{mallLocation}</Text>
        <View style={styles.mallRatingContainer}>
          <IconSmallClock/>
          <Gap width={5} />
          <Text>{time} min</Text>
          <Gap width={12} />
          <Text>Within {range} Km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Mall;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  mallContainer: {
    height: 90,
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 25
  },
  mallName: {
    fontSize: 20,
  },
  mallLocation: {
    fontSize: 14,
    color: 'grey',
  },
  mallTextContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  mallRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  }
});
