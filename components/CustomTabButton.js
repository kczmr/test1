import React from 'react';
import {TouchableOpacity} from 'react-native';

const CustomTabButton = (props) => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [
            props.style,
            {
              borderBottomColor: '#5361c7',
              borderBottomWidth: 3,
            },
          ]
        : props.style
    }
  />
);

export default CustomTabButton;
