import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors} from '../styles';

const LoadingIndicator = (props) => {
  const {size} = props;
  return <ActivityIndicator size={size} color={Colors.loadingIndicator} />;
};

export default LoadingIndicator;
