import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Teks = (
  prop = {
    height,
    width,
    fontStyle,
    fontWeight,
    fontSize,
    lineHeight,
    teksFill,
  },
) => {
  return (
    <Text
      style={styles.container(
        prop,
      )}>
      {prop.teksFill}
    </Text>
  );
};

export default Teks;

const styles = StyleSheet.create({
  container: prop => ({
    height: prop.height,
    width: prop.width,
    fontStyle: prop.fontStyle,
    fontWeight: prop.fontWeight,
    fontSize: prop.fontSize,
    lineHeight: prop.lineHeight,
  }),
});
