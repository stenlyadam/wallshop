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
import TokoPage from '../Shop/TokoPage';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

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
    <ScrollView style={styles.page} nestedScrollEnabled={true} >
      <ImageBackground
        source={image}
        style={{ height: height * 0.45 }}
      />
      
      <View style={styles.container}>
          <Gap height={50} />
        {/* <View> */}
          <View style={{ width: "85%", borderRadius: 25, borderColor: '#ACACAC', borderWidth: 2, alignSelf: 'center' }}>
            <Picker
              mode={'dropdown'}
              // selectedValue={selectedValue}
              style={{color: 'black'}}
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
                component={TokoPage}
                navigation={navigation}
                style={{ paddingHorizontal: 15 }}
              />
              <Tab.Screen
                name="Item"
                component={Item}
                navigation={navigation}
              />
            </Tab.Navigator>
          </View>
        </View>
      {/* </View> */}
    </ScrollView>
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