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
import {SearchBar, Gap, Button} from '../../components';
import dataToko from '../../components/data/dataToko';
import Toko from '../Shop/Toko';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const mallToko = ({navigation}) => {
  return dataToko.map((item) => {
    return (
      <View>
        <Toko
          shopName={item.name}
          shopDescription={item.description}
          rating={item.rating}
          location={item.location}
          image={item.image}
          onPress={() => navigation.navigate("Catalogue", {
            item: item
          })
        }
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

const mallDetail = ({ 
  route,
  navigation,
  selectedValue, 
  setSelectedValue 
}) => {
  const {item} = route.params;
  return (
    <ScrollView style={styles.page} nestedScrollEnabled={true}>
      <ImageBackground source={image} style={{ height: height * 0.45 }} >
        <View style={styles.imageContainer}>
        <Button
          type="icon-only"
          icon="icon-arrow-back"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}> {item.name} </Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Gap height={30} />
        <View
          style={styles.pickerContainer}
        >
          <Picker
            mode={"dropdown"}
            selectedValue={selectedValue}
            style={{ color: "black", paddingHorizontal: 20 }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue=itemValue
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
                fontSize: 18,
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
            />
            <Tab.Screen name="Item" component={Item} navigation={navigation} />
          </Tab.Navigator>
        </View>
      </View>
      </ScrollView>
  );
}

export default mallDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: "-8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: '6%',
    paddingTop: '2%',
    paddingBottom: '12%',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  pickerContainer: {
    width: "85%",
    borderRadius: 25,
    borderColor: "#ACACAC",
    borderWidth: 2,
    alignSelf: "center",
  },
  title: {
    color: 'white',
    width: '100%',
    fontWeight: '700',
    fontSize: 32,
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: {
      width: -1,
      height: 2
    }
  }
});