import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import COLORS from '../../theme/colors';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

interface CallBack {
  (): void;
}
interface CheckBoxProps {
  width: number;
  value: boolean;
  style?: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    iconColor?: string;
  };
  icon?: JSX.Element;
  onChange?: CallBack;
}

const CheckBox = ({width, value, style, icon, onChange}: CheckBoxProps) => {
  return (
    <TouchableOpacity
      onPress={onChange}
      style={{
        height: width,
        width: width,
        backgroundColor: value
          ? style?.backgroundColor || COLORS.white
          : 'transparent',
        borderWidth: style?.borderWidth || 1,
        borderColor: style?.borderColor ?? COLORS.white,
      }}>
      {value && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {icon || (
            <FontAwesomeIcon icon={faCheck} style={{color: style?.iconColor}} />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
export default CheckBox;
