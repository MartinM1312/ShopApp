import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={24}
      color={Colors.primary}
    />
  );
};

export default CustomHeaderButton;
