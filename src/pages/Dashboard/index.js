import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  colors,
  fonts,
  IconArrowRight,
  IconCompass,
  IconPin,
  IconPin2,
  IconPinSmall,
  IconStar,
  IMGAceHardware,
  IMGBuku,
  IMGDashboard,
  IMGFashionPria,
  IMGFashionWanita,
  IMGFurniture,
  IMGGadget,
  IMGGramedia,
  IMGHandsanitizer,
  IMGKesehatan,
  IMGLeaderboard,
  IMGMainan,
  IMGMakanan,
  IMGMask,
  IMGMaskutSport,
  IMGOlahraga,
  IMGOtomotif,
  IMGPeliharaan,
  IMGSambalRoa,
  IMGSneakers,
  IMGSouvenir,
  IMGSportStation,
  IMGTarantula,
} from '../../assets';
import {Carousel, SearchBar, RoundButton, Gap, Button} from '../../components';
import PopularShop from './PopularShop';

const OpenAllButton = () => {
  return (
    <TouchableOpacity style={styles.lihatSemuaButtonContainer}>
      <Text>Lihat Semua</Text>
      <IconArrowRight color={colors.primaryBlack} />
    </TouchableOpacity>
  );
};

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.red} />
      <View style={styles.searchBar}>
        <Gap height={5} />
        <SearchBar type="dashboard" />
        <Gap height={5} />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.topContainer}>
          <Gap height={5} />
          <View style={styles.carouselContainer}>
            <Carousel
              image1={IMGDashboard}
              image2={IMGDashboard}
              image3={IMGDashboard}
            />
          </View>
        </View>
        <Gap height={80} />
        <View style={styles.promoTitleContainer}>
          <IconPin style={styles.iconPin} />
          <Text style={styles.titleTertiary}>Promo di Sekitar Anda</Text>
          <OpenAllButton />
        </View>
        <Gap height={5} />
        <View style={styles.promosContainer}>
          <RoundButton type="png" image={IMGMask} title="Masker" />
          <RoundButton
            type="png"
            image={IMGHandsanitizer}
            title="Handsanitizer"
          />
          <RoundButton type="png" image={IMGSambalRoa} title="Sambal Roa" />
          <RoundButton type="png" image={IMGSneakers} title="Sneakers" />
          <RoundButton type="png" image={IMGTarantula} title="Tarantula" />
        </View>
        <Gap height={5} />
        <View style={styles.shoppingCategoryContainer}>
          <Text style={styles.shoppingCategoryTitle}>KATEGORI BELANJA</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Leaderboard')}
            style={styles.shoppingCategoryButton}>
            <Image source={IMGLeaderboard} />
            <Text style={styles.shoppingCategoryButtonText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>
        <Gap height={3} />
        <View style={styles.categoryContainer}>
          <View style={styles.lineCategoryContainer}>
            <RoundButton
              type="square"
              image={IMGFashionPria}
              title="Fashion Pria"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGFashionWanita}
              title="Fashion Wanita"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGSouvenir}
              title="Souvenir"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGOlahraga}
              title="Olahraga "
              onClick={() => navigation.navigate('Product')}
            />
          </View>
          <View style={styles.lineCategoryContainer}>
            <RoundButton
              type="square"
              image={IMGMakanan}
              title="Makanan"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGGadget}
              title="Gadget"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGOtomotif}
              title="Otomotif"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGBuku}
              title="Buku"
              onClick={() => navigation.navigate('Product')}
            />
          </View>
          <View style={styles.lineCategoryContainer}>
            <RoundButton
              type="square"
              image={IMGKesehatan}
              title="Kesehatan"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGFurniture}
              title="Furniture"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGMainan}
              title="Mainan"
              onClick={() => navigation.navigate('Product')}
            />
            <RoundButton
              type="square"
              image={IMGPeliharaan}
              title="Peliharaan"
              onClick={() => navigation.navigate('Product')}
            />
          </View>
        </View>
        <Gap height={25} />
        <View style={styles.popularShopWrapper}>
          <Text style={styles.shoppingCategoryTitle}>TOKO TERPOPULER</Text>
          <Gap height={20} />
          <PopularShop
            shopName="Ace Hardware Mantos"
            shopDescription="Toko perlengkapan rumah"
            rating="4.9"
            location="Mantos, Kota Manado"
            image={IMGAceHardware}
          />
          <PopularShop
            shopName="Gramedia Mantos"
            shopDescription="Toko buku dan perlengkapan"
            rating="4.8"
            location="Mantos, Kota Manado"
            image={IMGGramedia}
          />
          <PopularShop
            shopName="Sport Station"
            shopDescription="Toko perlengkapan olahraga"
            rating="4.9"
            location="Mantos, Kota Manado"
            image={IMGSportStation}
          />
          <PopularShop
            shopName="Maskut Sport"
            shopDescription="Toko perlengkapan olahraga"
            rating="5.0"
            location="Manado Trade Center, Kota Manado"
            image={IMGMaskutSport}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: colors.red,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    height: 100,
    backgroundColor: colors.red,
    width: '100%',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  searchBoxContainer: {
    backgroundColor: 'white',
    width: 300,
    height: 46,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 14,
  },
  searchBoxTextContainer: {
    width: 192,
  },

  carouselContainer: {
    height: 175,
  },

  promoTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  lihatSemuaButtonContainer: {
    flexDirection: 'row',
    width: 110,
    justifyContent: 'space-between',
    right: 5,
  },
  iconPin: {
    bottom: 5,
  },
  titleTertiary: {
    right: 30,
    fontFamily: fonts.Roboto.bold,
    fontSize: 14,
  },

  roundButton: {
    alignItems: 'center',
  },
  roundButtonTitle: {
    fontSize: 12,
    width: 60,
    textAlign: 'center',
  },
  roundButtonImage: {
    borderRadius: 25,
    elevation: 3,
  },
  promosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },

  shoppingCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  shoppingCategoryTitle: {
    fontFamily: fonts.Roboto.bold,
    fontSize: 18,
  },
  shoppingCategoryButton: {
    backgroundColor: colors.green,
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shoppingCategoryButtonText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 8,
    bottom: 1,
  },

  openAllButtonContainer: {
    alignItems: 'flex-end',
    paddingRight: 26,
    marginTop: 10,
    marginBottom: 10,
  },

  lineCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 26,
    paddingVertical: 5,
  },
  popularShopWrapper: {
    paddingHorizontal: 26,
  },
});
