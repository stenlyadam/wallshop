import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  colors,
  fonts,
  IMGGramediaFeed,
  IMGGramediaFollowing,
} from '../../assets';
import {Button, Gap} from '../../components';
import TopTab from '../../components/molecules/TopTab';

const Feed = () => {
  return (
    <View>
      <View style={styles.feedHeaderContainer}>
        <Image source={IMGGramediaFollowing} />
        <View style={styles.feedHeaderTextContainer}>
          <Text style={styles.feedHeaderText}>Gramedia Manado</Text>
        </View>
        <Button type="icon-only" icon="icon-three-dots" />
      </View>
      <View style={styles.feedImageContainer}>
        <Image source={IMGGramediaFeed} />
      </View>
      <View style={styles.feedCaptionContainer}>
        <Gap height={13} />
        <Text style={styles.bold}>1273 Suka</Text>
        <Gap height={9} />
        <Text style={styles.bold}>Gramediamanado</Text>
        <Gap heigth={6} />
        <Text>
          Buku Bisnis & ekonomi DISKON hingga 20 {`\n \n`}
          Grameds, yuk dapatkan buku-buku kesukaan kamu seperti How To Be Rich,
          Analisis Laporan Keuangan dan masih banyak lagi yang DISKON 20.
          {`\n \n`}
          Yuk buruan dateng
        </Text>
      </View>
      <Gap height={15} />
    </View>
  );
};

const Following = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopTab title="Mengikuti" />
      <ScrollView>
        <Feed />
        <Feed />
      </ScrollView>
    </View>
  );
};

export default Following;

const styles = StyleSheet.create({
  bold: {
    fontFamily: fonts.Roboto.bold,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  feedHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20,
  },
  feedHeaderTextContainer: {
    width: 270,
  },
  feedHeaderText: {
    fontSize: 14,
  },
  feedImageContainer: {
    width: '100%',
  },
  feedCaptionContainer: {
    paddingHorizontal: 15,
  },
});
