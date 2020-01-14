import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';

import { Spacing } from '../../styles';
import { DefaultInput, DefaultButton, DefaultError } from '../../components/atoms';
import { validationSchema } from './validation';

export default class Form extends Component {

  onToSignUp = (values) => {
    console.log('Valores aqui mesmo: ', values);
  };

  render() {
    return(
      <View style={[styles.horizontalMargin, styles.horizontal]}>

        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/images/react-native.png')} />
        </View>

        <Formik
          initialValues={{ name: '', email: '', password: ''}}
          onSubmit={this.onToSignUp}
          validationSchema={validationSchema}>

          {({ handleChange, values, handleSubmit, errors }) => (

            <Fragment>

              <DefaultInput
                value={values.name}
                name='name'
                autoCapitalize='none'
                onChangeText={handleChange('name')}
                autoCorrect={false}
                editable={true}
                keyboardType='default'
                secureTextEntry={false}
                maxLength={30}
                placeholder='Nome' />

              <DefaultError errorMessage={errors.name}/>

              <DefaultInput
                value={values.email}
                name='email'
                autoCapitalize='none'
                onChangeText={handleChange('email')}
                autoCorrect={false}
                editable={true}
                keyboardType='email-address'
                secureTextEntry={false}
                maxLength={50}
                placeholder='Email' />

              <DefaultError errorMessage={errors.email}/>

              <DefaultInput
                value={values.password}
                name='password'
                autoCapitalize='none'
                onChangeText={handleChange('password')}
                autoCorrect={false}
                editable={true}
                keyboardType='default'
                secureTextEntry={true}
                maxLength={20}
                placeholder='Senha' />
                
              <DefaultError errorMessage={errors.password}/>

              <DefaultButton
                title='Cadastrar'
                color='#9b59b6'
                disabled={false}
                onPress={handleSubmit} />

            </Fragment>
          )}

        </Formik>

      </View>
    );
  }
};

const horizontalMargin = Spacing.horizontalMargin;

const styles = StyleSheet.create({
  horizontalMargin,

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  horizontal: {
    flex: 1,
    justifyContent: 'center'
  },

  image: {
    width: 100,
    height: 100
  }
});