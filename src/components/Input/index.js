/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native';
import * as S from './styled';

const InputComponent = (props) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon
        {...props}
        fill="#EE6C63"
        name={secureTextEntry ? 'eye-off' : 'eye'}
      />
    </TouchableWithoutFeedback>
  );

  const {
    placeholder,
    size,
    accessoryRight,
    password,
    value,
    onChangeText,
    autoCompleteType,
    keyboardType,
  } = props;

  return (
    <S.Input
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
      }}
      placeholder={placeholder}
      size={size}
      accessoryRight={accessoryRight && renderIcon}
      secureTextEntry={password && secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      autoCompleteType={autoCompleteType}
      textStyle={{
        color: '#EE6C63',
        fontFamily: 'Roboto-Thin',
      }}
      autoCapitalize="none"
      keyboardType={keyboardType}
      placeholderTextColor="#EE6C63"
    />
  );
};

InputComponent.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.string,
  accessoryRight: PropTypes.bool,
  password: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  autoCompleteType: PropTypes.string,
  keyboardType: PropTypes.string,
};

InputComponent.defaultProps = {
  placeholder: 'placeholder',
  size: 'medium',
  accessoryRight: false,
  password: false,
  value: '',
  onChangeText: () => {},
  autoCompleteType: 'off',
  keyboardType: 'default',
};

export default InputComponent;
