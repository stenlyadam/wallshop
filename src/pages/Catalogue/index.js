import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  colors,
  fonts,
  IconStarBig,
  IMGElonMusk,
  IMGGramedia,
  IMGGramediaShop,
  IMGManusiaDigital,
  IMGRatingDummy,
  IMGStephenHawking,
  IMGTheLeanStartup,
} from "../../assets";
import { Button, Gap } from "../../components";
import TopTab from "../../components/molecules/TopTab";

import BestSeller from "./BestSeller";
import Kategori from "./Kategori";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Promo from "./Promo";

const Tab = createMaterialTopTabNavigator();

const Catalogue = ({ route, navigation }) => {
  const {item} = route.params;
  return (
    <View style={styles.page}>
      <TopTab title="Catalogue" onBack={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Image source={item.image} style={styles.image} />
          <View>
            <Text style={styles.shopTitle}>{item.name}</Text>
            <Text style={styles.shopAddress}>{item.location}</Text>
          </View>
        </View>
        <Gap height={15} />
        <View style={styles.shopPoints}>
          <View style={styles.shopAlign}>
            <View style={styles.shopRatingStar}>
              <IconStarBig />
              <Gap width={4} />
              <Text style={styles.shopPointsValue}>{item.rating}</Text>
            </View>
            <Text style={styles.shopSubTitle}>Dari pembeli</Text>
          </View>

          <View style={styles.shopAlign}>
            <Text style={styles.shopPointsValue}>27.5K</Text>
            <Text style={styles.shopSubTitle}>Pengikut</Text>
          </View>

          <View style={styles.shopAlign}>
            <Text style={styles.shopPointsValue}>127K</Text>
            <Text style={styles.shopSubTitle}>Kunjungan</Text>
          </View>
        </View>
        <Gap height={26} />
        <View style={styles.shopFollowButtonContainer}>
          <Button
            title="Ikuti"
            height={35}
            paddingHorizontal={0}
            color={colors.blue}
            width={175}
            fontFamily={fonts.Roboto.medium}
            fontSize={15}
            radius={10}
          />
          <Button
            title="Kirim Pesan"
            height={35}
            paddingHorizontal={0}
            color={colors.lightGrey}
            width={175}
            fontColor={colors.black}
            fontFamily={fonts.Roboto.medium}
            fontSize={15}
            radius={10}
          />
        </View>
      </View>
      <Gap height={15}/>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            color: 'black',
            fontSize: 15,
            fontFamily: fonts.Roboto.medium,
            textTransform: "capitalize",
          },
          indicatorStyle: {
            backgroundColor: colors.red,
            height: 3,
            borderRadius: 8,
          }
        }}
      >
        <Tab.Screen
          name="Best Seller"
          component={BestSeller}
          navigation={navigation}
        />
        <Tab.Screen
          name="Kategori"
          component={Kategori}
          navigation={navigation}
        />
        <Tab.Screen
          name="Promo"
          component={Promo}
          navigation={navigation}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Catalogue;

const styles = StyleSheet.create({
  ratingDummy: {
    width: "100%",
  },
  shopPicture: {
    width: "100%",
    height: 204,
    borderRadius: 20,
  },
  shopFollowButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  shopDescription: {
    fontSize: 12,
  },
  shopDescriptionContainer: {
    paddingHorizontal: 5,
  },
  shopSubTitle: {
    fontSize: 10,
  },
  shopPointsValue: {
    fontFamily: fonts.Roboto.medium,
    fontSize: 25,
  },
  shopRatingStar: {
    flexDirection: "row",
    alignItems: "center",
  },
  shopAlign: {
    alignItems: "center",
  },
  shopPoints: {
    flexDirection: "row",
    backgroundColor: colors.white,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  shopAddress: {
    fontSize: 13,
    color: colors.grey,
  },
  shopTitle: {
    fontSize: 23,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
});
