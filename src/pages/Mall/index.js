import React from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { colors } from "../../assets";
import { SearchBar, Gap } from "../../components";
import Mall from "./Mall";

const DATA = [
  {
    id: 1,
    name: "Manado Town Square",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-shop-logo.png"),
  },
  {
    id: 2,
    name: "Megamall",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-shop-logo.png"),
  },
  {
    id: 3,
    name: "Manado Trade Center",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-shop-logo.png"),
  },
  {
    id: 4,
    name: "IT Center Manado",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-shop-logo.png"),
  },
  {
    id: 5,
    name: "Lippo Plaza",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-shop-logo.png"),
  },
  {
    id: 6,
    name: "Marina Shoping Walk",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-shop-logo.png"),
  },
  {
    id: 7,
    name: "Manado Town Square",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-shop-logo.png"),
  },
  {
    id: 8,
    name: "Manado Town Square",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-ace-hardware.png"),
  },
  {
    id: 9,
    name: "Manado Town Square",
    location: "Manado",
    time: '17',
    range: '2',
    image: require("../../assets/images/img-ace-hardware.png"),
  },
];

const MallPage = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Mall
      mallName={item.name}
      mallLocation={item.location}
      time={item.time}
      range={item.range}
      image={item.image}
      onPress={() => navigation.navigate("mallDetail")}
    />
  );
  return (
    <SafeAreaView style={styles.page}>
      <View style={{paddingHorizontal: 20}} >
        <Text style={styles.textStyle} >
          Ayo eksplorasi
        </Text>
        <Gap height={10}/>
        <SearchBar />
        <Gap height={20}/>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default MallPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: 15,
    height: '100%',
    paddingTop: 15
  },
  textStyle: {
    fontFamily: 'poppins',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 36,
    paddingLeft: 10
  }
});
