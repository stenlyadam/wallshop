import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../assets";
import TokoPage from "../Shop/TokoPage";
import Produk from "../Shop/Produk";
import Mall from "../Mall/index";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <View style={styles.tabNavigatorContainer}>
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
          name="Toko"
          component={TokoPage} 
          navigation={navigation}
          style={{paddingHorizontal: 15}}
        />
        <Tab.Screen
          name="Produk"
          component={Produk}
          navigation={navigation}
        />
        <Tab.Screen
          name="Mall"
          component={Mall}
          navigation={navigation}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabNavigatorContainer: {
    height: '100%',
    paddingBottom: 150
  },
});
