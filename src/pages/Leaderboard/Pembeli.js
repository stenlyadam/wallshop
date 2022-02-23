import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {colors, fonts, IMGProfilePicture} from '../../assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Gap} from '../../components';
import DATA from './DATA';

const User = ({name, total, color, rank, picture}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.userContainer}>
        <View style={styles.numberContainer(color)}>
          <Text style={styles.number}>{rank}</Text>
        </View>
        <Gap width={9} />
        <Image source={picture} style={styles.picture} />
        <Gap width={9} />
        <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userSpent}>{total}</Text>
        </View>
      </View>
    </View>
  );
};

const Pembeli = ({navigation}) => {
  const renderItem = ({item}) => (
    <User
      name={item.name}
      total={item.total}
      color={item.color}
      rank={item.rank}
      picture={item.picture}
    />
  );
  return (
    <View>
      <Gap height={10} />
      <FlatList
        // nestedScrollEnabled={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Pembeli;

const styles = StyleSheet.create({
  userName: {
    fontSize: 20,
  },
  userSpent: {
    fontSize: 15,
    color: colors.grey,
  },
  picture: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  number: {
    fontFamily: fonts.Roboto.black,
    color: colors.white,
    fontSize: 29,
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowColor: colors.black,
    textShadowRadius: 10,
  },
  userContainer: {
    width: 367,
    height: 79,
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 10,
  },
  numberContainer: color => ({
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color ? color : 'white',
    borderRadius: 15,
    borderWidth: color ? 0 : 1,
  }),
});
