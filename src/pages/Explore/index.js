import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {colors, fonts, IMGExplore1, IMGExplore2} from '../../assets';
import {Gap} from '../../components';

import TabNavigator from './TabNavigator';
import TopTab from '../../components/molecules/TopTab';

const Explore = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopTab title="Eksplorasi" onBack={() => navigation.goBack()} />
        <TabNavigator navigation={navigation} />
        <Gap color={colors.white} width={'100%'} height={30} />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.Roboto.medium,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});
