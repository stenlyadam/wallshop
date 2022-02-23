import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  colors,
  fonts,
  IconArrowBack,
  IconDropdownArrowDown,
  IconDropdownArrowRight,
  IMGMapsDummy,
} from '../../assets';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import SliderText from 'react-native-slider-text';
import {Button, Gap} from '../../components';

const arrowdown = () => {
  return <IconDropdownArrowDown></IconDropdownArrowDown>;
};

const arrowright = () => {
  return <IconDropdownArrowRight />;
};

const Lokal = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [value, setValue] = useState('2');
  const [items, setItems] = useState([
    {
      value: 1,
      label: 'Sulawesi Utara, Indonesa',
      type: 'Provinsi',
    },
    {
      value: 2,
      label: 'Manado, Indonesia',
      type: 'Ibu kota provinsi',
    },
    {
      value: 3,
      label: 'Tomohon, Indonesia',
      type: 'Kota',
    },
    {
      value: 4,
      label: 'Minahasa Utara, Indonesia',
      type: 'Kabupaten',
    },
    {
      value: 5,
      label: 'Minahasa Selatan, Indonesia',
      type: 'Kabupaten',
    },
    {
      value: 6,
      label: 'Minahasa Tenggara, Indonesia',
      type: 'Kabupaten',
    },
    {
      value: 7,
      label: 'Minahasa, Indonesia',
      type: 'Kabupaten',
    },
    {
      value: 8,
      label: 'Bitung, Indonesia',
      type: 'Kota',
    },
    {
      value: 9,
      label: 'Tondano, Indonesia',
      type: 'Ibu kota kabupaten',
    },
    {
      value: 10,
      label: 'Talaud, Indonesia',
      type: 'Kabupaten',
    },
    {
      value: 11,
      label: 'Sangihe, Indonesia',
      type: 'Kabupaten',
    },
    {
      value: 12,
      label: 'Sonder, Indonesia',
      type: 'Kecamatan',
    },
    {
      value: 13,
      label: 'Tombatu, Indonesia',
      type: 'Kecamatan',
    },
    {
      value: 14,
      label: 'Bolaang Mongondow, Indonesia',
      type: 'Kabupaten',
    },
  ]);

  const [sliderValue, setSliderValue] = useState(0);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.currentLocationContainer}>
          <Text style={styles.subTitle}>Your Current Location</Text>
          <Switch
            trackColor={{false: colors.grey, true: '#81b0ff'}}
            thumbColor={isEnabled ? colors.lightGrey : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.subTitle}>Address</Text>
          <DropDownPicker
            style={styles.dropDownPickerStyle}
            labelStyle={styles.dropDownPickerLabelStyle}
            itemStyle={styles.dropDownPickerItemStyle}
            containerStyle={styles.dropDownPickerContainerStyle}
            dropDownStyle={{borderColor: colors.white}}
            defaultValue={value}
            placeholder="Manado, Indoenesia"
            onChangeItem={item => setValue(item.value)}
            arrowColor={colors.black}
            showArrow={true}
            arrowStyle={styles.dropDownPickerArrowStyle}
            customArrowUp={arrowdown}
            customArrowDown={arrowright}
            items={items}
          />
        </View>
      </View>
      <Gap height={10} />
      <Gap height={4} width="100%" color={colors.lightGrey} />
      <Gap height={10} />
      <View style={styles.bottomContainer}>
        <View style={styles.radiusContainer}>
          <View style={styles.radius}>
            <Text>Radius</Text>
            <Text style={styles.range}>{sliderValue} KM</Text>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              minimumTrackTintColor="#000"
              thumbTintColor={colors.red}
              maximumTrackTintColor="#099"
              maximumValue={50}
              step={1}
              onValueChange={id => setSliderValue(id)}
              sliderValue={sliderValue}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image source={IMGMapsDummy} width={200} />
          </View>
          <Button
            width="100%"
            paddingHorizontal={0}
            radius={25}
            color={colors.green}
            title="Cari"
            onPress={() => navigation.navigate('Shop')}
          />
        </View>
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

export default Lokal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    paddingHorizontal: 20,
  },
  currentLocationContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subTitle: {
    marginBottom: 15,
    fontSize: 15,
  },
  dropDownPickerStyle: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  dropDownPickerLabelStyle: {
    fontSize: 15,
    fontFamily: fonts.Roboto.regular,
    color: colors.grey,
  },
  dropDownPickerItemStyle: {justifyContent: 'flex-start'},
  dropDownPickerArrowStyle: {
    paddingRight: 7,
  },
  dropDownPickerContainerStyle: {
    height: 20,
  },

  bottomContainer: {
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36,
  },
  radius: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  range: {
    color: colors.grey,
  },
  sliderContainer: {
    marginTop: 10,
  },
});
