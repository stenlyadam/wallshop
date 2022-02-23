import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import {colors} from '../../assets';
import {Button, Teks, Gap, FormInput} from '../../components';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Teks
            teksFill={'Selamat Datang'}
            fontStyle={'normal'}
            fontWeight={'bold'}
            fontSize={29}
            width={242}
            height={44}
            lineHeight={43}
          />
          <Gap height={5} />
          <Teks
            teksFill={
              'Nikmati kemudahan menjelajah beragam toko fisik di sekitarmu dalam satu genggaman tangan'
            }
            fontStyle={'normal'}
            fontWeight={'normal'}
            fontSize={13}
            width={333}
            height={40}
            lineHeight={19}
          />
          <Gap height={31} />
          <Teks
            teksFill={'Mari bergabung'}
            fontStyle={'normal'}
            fontWeight={'bold'}
            fontSize={29}
            width={244}
            height={44}
            lineHeight={43}
          />
        </View>
        <View style={styles.formContainer}>
          <FormInput label="Nama lengkap" />
          <Gap height={10} />
          <FormInput label="Username" />
          <Gap height={10} />
          <FormInput label="Email" />
          <Gap height={10} />
          <FormInput type="password" label="Buat password" password={true} />
          <Gap height={10} />
          <FormInput
            type="password"
            label="Konfirmasi password"
            password={true}
          />
          <Gap height={35} />
          <Button
            color={colors.red}
            title="Daftar sekarang"
            paddingHorizontal={0}
            height={50}
            radius={30}
            width={358}
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    justifyContent: 'center',
    paddingVertical: 30,
  },
  textContainer: {
    left: 25,
  },
  formContainer: {
    paddingTop: 18,
    alignItems: 'center',
  },
});
