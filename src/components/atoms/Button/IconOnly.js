import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  IconProfile,
  IconLock,
  IconMenu,
  IconElectronic,
  IconHouse,
  IconBall,
  IconMedicine,
  IconChefHat,
  IconFruits,
  IconFurniture,
  IconDog,
  IconCart,
  IconBack,
  IconOrder,
  IconLove,
  IconProtection,
  IconHelp,
  IconTicket,
  IconPin2,
  IconSearch,
  IconPin,
  IconPinSmall,
  IconArrowBack,
  IconShoppingCart,
  IconLoveSmall,
  IconThreeDots,
} from '../../../assets';
import {colors} from '../../../assets';

const IconOnly = ({icon, onPress, width, height, color = colors.white}) => {
  const Icon = () => {
    if (icon === 'icon-profile') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconProfile />
        </View>
      );
    }
    if (icon === 'icon-lock') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconLock />
        </View>
      );
    }
    if (icon === 'icon-menu') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconMenu />
        </View>
      );
    }
    if (icon === 'icon-electronic') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconElectronic />
        </View>
      );
    }
    if (icon === 'icon-furniture') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconFurniture />
        </View>
      );
    }
    if (icon === 'icon-house') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconHouse />
        </View>
      );
    }
    if (icon === 'icon-ball') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconBall />
        </View>
      );
    }
    if (icon === 'icon-medicine') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconMedicine />
        </View>
      );
    }
    if (icon === 'icon-chef-hat') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconChefHat />
        </View>
      );
    }
    if (icon === 'icon-fruits') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconFruits />
        </View>
      );
    }
    if (icon === 'icon-dog') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconDog />
        </View>
      );
    }
    if (icon === 'icon-cart') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconCart />
        </View>
      );
    }
    if (icon === 'icon-back') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconBack />
        </View>
      );
    }
    if (icon === 'icon-order') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconOrder />
        </View>
      );
    }
    if (icon === 'icon-love') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconLove />
        </View>
      );
    }
    if (icon === 'icon-ticket') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconTicket />
        </View>
      );
    }
    if (icon === 'icon-pin-2') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconPin2 />
        </View>
      );
    }
    if (icon === 'icon-protection') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconProtection />
        </View>
      );
    }
    if (icon === 'icon-help') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconHelp />
        </View>
      );
    }
    if (icon === 'icon-search') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconSearch />
        </View>
      );
    }
    if (icon === 'icon-pin-small') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconPinSmall />
        </View>
      );
    }
    if (icon === 'icon-arrow-back') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconArrowBack />
        </View>
      );
    }
    if (icon === 'icon-shopping-cart') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconShoppingCart />
        </View>
      );
    }
    if (icon === 'icon-love-small') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconLoveSmall />
        </View>
      );
    }
    if (icon === 'icon-three-dots') {
      return (
        <View style={styles.iconContainer(width, height)}>
          <IconThreeDots />
        </View>
      );
    }
    return <View style={styles.none(color)} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: (width, height, color) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: width,
    height: height,
    backgroundColor: color,
  }),
  none: color => ({
    width: 36,
    height: 36,
    backgroundColor: color,
  }),
});
