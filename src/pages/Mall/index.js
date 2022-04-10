import React from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { colors } from "../../assets";
import { SearchBar, Gap } from "../../components";
import dataMall from "../../components/data/dataMall";
import Mall from "./Mall";

const MallPage = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Mall
      mallName={item.name}
      mallLocation={item.location}
      time={item.time}
      range={item.range}
      image={item.image}
      onPress={() =>
        navigation.navigate("mallDetail", {
          item: item
        })
      }
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
        data={dataMall}
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
