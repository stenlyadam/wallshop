import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Picker,
  ScrollView,
  ImageBackground,
  Dimensions
} from 'react-native';
import { fonts, colors } from '../../assets';
import {SearchBar, RoundButton, Gap, Button} from '../../components';
import dummyData from '../Shop/dummyData';
import Toko from '../Shop/Toko';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const mallToko = ({navigation}) => {
  return dummyData.map((item) => {
    return (
      <View>
        <Toko
          shopName={item.name}
          shopDescription={item.description}
          rating={item.rating}
          location={item.location}
          image={item.image}
          onPress={() => navigation.navigate("ShopDetail")}
        />
      </View>
    );
  });
}

const Item = () => {
  return (
    <View>
      <Text> ITEM </Text>
    </View>
  );
}

const image= require("../../assets/images/img-mantos.png");
const height= Dimensions.get('window').height;

const mallDetail = ({navigation}) => {
  return (
    <View style={styles.page} nestedScrollEnabled={true}>
      <ScrollView style={styles.container}>
      <View>
        <ImageBackground
          source={image}
          style={{ height: height * 0.45 }}
        />
      </View>
        <Gap height={50} />
        {/* <View> */}
        <View
          style={{
            width: "85%",
            borderRadius: 25,
            borderColor: "#ACACAC",
            borderWidth: 2,
            alignSelf: "center",
          }}
        >
          <Picker
            mode={"dropdown"}
            // selectedValue={selectedValue}
            style={{ color: "black" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Lantai 1" value="lantai 1" />
            <Picker.Item label="Lantai 2" value="lantai 2" />
          </Picker>
        </View>
        <View style={styles.tabNavigatorContainer}>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: {
                color: "black",
                fontSize: 15,
                fontFamily: fonts.Roboto.medium,
                textTransform: "capitalize",
              },
              indicatorStyle: {
                backgroundColor: colors.red,
                height: 3,
                borderRadius: 8,
              },
            }}
          >
            <Tab.Screen
              name="Toko"
              component={mallToko}
              navigation={navigation}
              style={{ paddingHorizontal: 15 }}
            />
            <Tab.Screen name="Item" component={Item} navigation={navigation} />
          </Tab.Navigator>
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  );
}

export default mallDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // marginTop: -45
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignContent: 'center'
  },
  topTabStyle: {
  }
})