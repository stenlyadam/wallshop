import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../assets';
import {Button} from '../../../components';

const RoundButton = ({title, image, type, onClick}) => {
  if (type === 'png') {
    return (
      <TouchableOpacity style={styles.roundButton} onPress={onClick}>
        <View style={styles.roundButtonImage}>
          <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.roundButtonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'square') {
    return (
      <TouchableOpacity style={styles.roundButton} onPress={onClick}>
        <Image source={image} style={styles.image} />
        <Text style={styles.roundButtonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'svg') {
    return (
      <TouchableOpacity style={styles.roundButton}>
        <Button type="icon-only" icon={image} onPress={onClick} />
        <Text style={styles.roundButtonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

export default RoundButton;

const styles = StyleSheet.create({
  roundButton: {
    alignItems: 'center',
  },
  roundButtonTitle: {
    fontSize: 12,
    width: 60,
    textAlign: 'center',
  },
  roundButtonImage: {
    borderRadius: 50,
    elevation: 3,
  },
  image: {
    width: 67,
    height: 67,
  },
});
