import React from 'react';
import {useRoute} from '@react-navigation/native';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {fonts} from '../../../assets';
import {Button} from '../..';

const FormInput = ({
  type,
  button,
  label,
  placeholder,
  icon,
  password,
  width = 358,
  textWidth = '100%',
  borderBottomWidth = 0,
  backgroundColor = 'lightgrey',
  borderRadius = 10,
  paddingRight = 10,
  fontSize = 20,
  paddingStart = 15,
  fontWeight = 'bold',
  labelSize = 15,
}) => {
  const prop = {
    width,
    fontSize,
    textWidth,
    borderBottomWidth,
    backgroundColor,
    borderRadius,
    paddingRight,
    paddingStart,
    fontWeight,
    labelSize,
  };
  const route = useRoute();

  // Pakai if ini untuk menambah icon di page signup dan membedakan style Forminput
  // if (type === 'password' || route.name === 'Login') {
  //   if (route.name === 'Signup') {
  //     prop.borderBottomColor=null
  //   }
  //   button = <Button type="icon-only" icon={icon} color={setDisabled} />
  // }

  // pembeda style form input
  if (route.name === 'Login') {
    button = <Button type="icon-only" icon={icon} />;
    prop.width = 339;
    prop.textWidth = '90%';
    prop.borderBottomWidth = 1;
    prop.backgroundColor = null;
    prop.paddingRight = 4;
    prop.paddingStart = null;
    prop.fontWeight = 'normal';
    prop.labelSize = 14;
  }
  return (
    <View style={styles.formContainer(prop)}>
      <Text style={styles.label(prop)}>{label}</Text>
      <View style={styles.textInputContainer(prop)}>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={password}
          style={styles.textInput(prop)}
        />
        {button}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  formContainer: prop => ({
    width: prop.width,
    borderBottomWidth: prop.borderBottomWidth,
  }),
  textInputContainer: prop => ({
    backgroundColor: prop.backgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: prop.borderRadius,
    paddingRight: prop.paddingRight,
  }),
  textInput: prop => ({
    fontFamily: fonts.Roboto.regular,
    width: prop.textWidth,
    fontSize: prop.fontSize,
    paddingStart: prop.paddingStart,
  }),
  label: prop => ({
    fontWeight: prop.fontWeight,
    fontFamily: fonts.Roboto.regular,
    fontSize: prop.labelSize,
    marginBottom: 5,
  }),
});
