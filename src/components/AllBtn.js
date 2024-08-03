import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

// import Fonts from '../contants/Fonts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Dimension from '../contans/Dimension';
import Colors from '../contans/Colors';

export const RoundBtn = ({
  event,
  icon,
  iconSize,
  iconColor,
  btnColor,
  mLeft,
  mRight,
  mTop,
  mBottom,
  pd,
  rotateZ,
  disabled,
  bdRadius,
  w,
  bdW,
  bdCl,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || false}
      onPress={event}
      style={[
        styles.roundContainer,
        {
          backgroundColor: btnColor || 'transparent',
          marginLeft: mLeft || 0,
          marginRight: mRight || 0,
          marginTop: mTop || 0,
          marginBottom: mBottom || 0,
          padding: pd || 0,
          transform: [{ rotateZ: rotateZ || '0deg' }],
          width: w || 'auto',
          borderWidth: bdW || 0,
          borderColor: bdCl || 'transparent',
        },
      ]}>
      <Image
        source={icon}
        style={{
          width: iconSize || 22,
          height: iconSize || 22,
          borderRadius: bdRadius || 0,
          tintColor: iconColor,
        }}
      />
    </TouchableOpacity>
  );
};

export const AddBtn = ({ event }) => {
  return (
    <TouchableOpacity
      onPress={event}
      style={{
        position: 'absolute',
        bottom: hp('6%'),
        right: Dimension.setWidth(7),
        padding: 10,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 50,
        opacity: 0.8,
      }}>
      <Image
        source={require('../assets/images/add.png')}
        style={{ width: 22, height: 22, tintColor: '#ffffff' }}
      />
    </TouchableOpacity>
  );
};

export const BackBtn = ({ event, top, left }) => {
  const safeDimension = useSafeAreaInsets();
  const mt = top || safeDimension.top + hp('1.2%');
  const ml = left || safeDimension.left + wp('3.6%');

  return (
    <TouchableOpacity
      onPress={event}
      style={{
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 999,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: mt,
        left: ml,
      }}>
      <Image
        source={require('../assets/images/back.png')}
        style={{ width: 24, height: 24, tintColor: '#ffffff' }}
      />
    </TouchableOpacity>
  );
};

export const BackBtn2 = ({
  event,
  iconColor,
  iconSize,
  mLeft,
  mRight,
  mTop,
  mBottom,
  pd,
  w,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={event}
      style={[
        styles.roundContainer,
        {
          backgroundColor: iconColor || Colors.DEFAULT_GREEN,
          marginLeft: mLeft || 0,
          marginRight: mRight || 0,
          marginTop: mTop || 0,
          marginBottom: mBottom || 0,
          padding: pd || 10,
          width: w || 'auto',
          height: w || 'auto',
        },
      ]}>
      <Image
        source={icon ? icon : require('../assets/images/back.png')}
        style={{
          width: iconSize || 24,
          height: iconSize || 24,
          tintColor: '#ffffff',
        }}
      />
    </TouchableOpacity>
  );
};

export const TextBtn = ({
  event,
  text,
  textSize,
  textFont,
  textColor,
  btnColor,
  mLeft,
  mRight,
  mTop,
  mBottom,
  bdRadius,
  w,
  pd,
  disabled,
  bdW,
  bdCl,
  fw,
  als,
}) => {
  return (
    <TouchableOpacity
      onPress={event}
      disabled={disabled || false}
      style={[
        styles.roundContainer,
        {
          backgroundColor: btnColor || 'transparent',
          borderRadius: bdRadius || 12,
          marginLeft: mLeft || 0,
          marginRight: mRight || 0,
          marginTop: mTop || 0,
          marginBottom: mBottom || 0,
          width: w || 'auto',
          padding: pd || 0,
          borderWidth: bdW || 0,
          borderColor: bdCl || 'transparent',
          alignSelf: als || 'auto',
        },
      ]}>
      <Text
        style={{
          fontSize: textSize || wp('3.6%'),
          // fontFamily: textFont || Fonts.SF_MEDIUM,
          color: textColor || Colors.WHITE,
          fontWeight: fw || 'normal',
        }}>
        {text || ''}
      </Text>
    </TouchableOpacity>
  );
};

const RegisterBtn = ({ nameBtn, onEvent }) => {
  return (
    <TouchableOpacity
      onPress={onEvent}
      style={{
        alignSelf: 'flex-end',
        marginRight: Dimension.setWidth(3),
        backgroundColor: '#ff9e57',
        paddingVertical: Dimension.setHeight(0.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: Dimension.setWidth(28),
        height: Dimension.setHeight(5),
        marginTop: Dimension.setHeight(1),
        marginBottom: Dimension.setHeight(2.5),
      }}>
      <Text
        style={{
          fontSize: Dimension.fontSize(17),
          // fontFamily: Fonts.SF_SEMIBOLD,
          color: '#ffffff',
        }}>
        {!nameBtn ? 'Đăng kí' : nameBtn}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundContainer: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RegisterBtn;
