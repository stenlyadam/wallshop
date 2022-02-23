import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../../atoms/Button';
import {fonts} from '../../../assets';

const TopTab = ({title, onBack, type}) => {
  if (type === 'no-cart') {
    return (
      <View style={styles.topTab}>
        <View style={styles.titleContainer}>
          <Button type="icon-only" icon="icon-arrow-back" onPress={onBack} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.topTab}>
        <View style={styles.titleContainer}>
          <Button type="icon-only" icon="icon-arrow-back" onPress={onBack} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Button type="icon-only" icon="icon-shopping-cart" />
      </View>
    );
  }
};

export default TopTab;

const styles = StyleSheet.create({
  topTab: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.Roboto.regular,
    fontSize: 28,
    marginLeft: 15,
  },
});
