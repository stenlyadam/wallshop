import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {colors, fonts} from '../../assets';
import {Button} from '../../components';
import DATA from './DATA';

const Item = ({name, type, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate('Shop')}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.type}>{type}</Text>
  </TouchableOpacity>
);

const Regional = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item name={item.name} type={item.type} navigation={navigation} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <Button type="icon-only" icon="icon-search" />
        <TextInput style={styles.textInput} placeholder="Pilih Lokasi" />
      </View>

      <FlatList
        // nestedScrollEnabled={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Regional;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 1000,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 7,
  },
  item: {
    marginBottom: 15,
  },
  name: {
    fontFamily: fonts.Roboto.regular,
    fontSize: 13,
  },
  type: {
    fontSize: 10,
    color: colors.grey,
  },
});
