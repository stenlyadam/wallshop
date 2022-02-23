import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fonts, WellshopLogo} from '../../assets';
import {Button, Gap} from '../../components';
import {FormInput} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Gap height={100} />
      <View style={styles.contentContainer}>
        <Image source={WellshopLogo} style={styles.wellshopLogo} />
        <FormInput
          page="log"
          label="Username"
          placeholder="Masukkan username"
          icon="icon-profile"
        />
        <Gap height={55} />
        <FormInput
          label="Password"
          placeholder="Masukkan password"
          icon="icon-lock"
          password={true}
        />
        <Gap height={85} />
        <Button
          color={colors.red}
          title="Login"
          paddingHorizontal={0}
          height={50}
          radius={30}
          width={339}
          onPress={() => navigation.navigate('Dashboard')}
        />
        <Gap height={10} />
        <Text>Lupa Password?</Text>
      </View>
      <Gap height={100} />
      <View style={styles.newAccountContainer}>
        <Text>Tidak punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.newAccountButtonText}>Buat akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    marginHorizontal: 36,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wellshopLogo: {
    marginBottom: 85,
  },
  newAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newAccountButtonText: {
    paddingLeft: 6,
    fontFamily: fonts.Roboto.bold,
  },
});
