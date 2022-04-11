import React from 'react'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { IMGDummyPromo } from '../../assets'

const Promo = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Image source={IMGDummyPromo} />
        <Image source={IMGDummyPromo} />
        <Image source={IMGDummyPromo} />
      </ScrollView>
    </View>
  );
}

export default Promo

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "white"
  }
})