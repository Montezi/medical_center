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
    autoCompleteType
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
        elevation: 0.8,
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
};

InputComponent.defaultProps = {
  placeholder: 'placeholder',
  size: 'medium',
  accessoryRight: false,
  password: false,
  value: '',
  onChangeText: () => {},
  autoCompleteType: "off",
};

export default InputComponent;
