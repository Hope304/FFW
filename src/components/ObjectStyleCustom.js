import React, { useState } from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Keyboard,
  TextInput,
} from 'react-native';
import Colors from '../../../contants/Colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Fonts from '../../../contants/Fonts';
import { rowAlignCenter } from '../../../contants/CssFE';
import { RoundBtn, TextBtn } from '../../../components/AllBtn';
import ColorPickerCustom from '../../../components/ColorPicker';
import Images from '../../../contants/Images';

const ObjectStyleCustom = ({
  toggleStyleModal,
  currStyle,
  onSaveStyle,
  onClose,
}) => {
  const [toggleColorModal, setToggleColorModal] = useState();
  const [pointColor, setPointColor] = useState(
    currStyle?.color || Colors.DEFAULT_BLUE,
  );
  const [polinegonColor, setPolinegonColor] = useState(
    currStyle?.fillColor || Colors.FABEBOOK_BLUE,
  );
  const [borderColor, setBorderColor] = useState(
    currStyle?.strokeColor || Colors.LIGHT_RED,
  );
  const [bdWidth, setbdWidth] = useState(currStyle?.strokeWidth || 2);
  const [statePicker, setStatePicker] = useState(null);

  const handleOpenColorCustom = state => {
    setStatePicker(state);
    setToggleColorModal(true);
  };


  const handleChangeBd = text => {
    setbdWidth(text);
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSaveStyle = () => {
    const style = {
      strokeColor: borderColor,
      fillColor: polinegonColor,
      strokeWidth: parseInt(bdWidth),
      color: pointColor,
    };

    onSaveStyle(style);
    onClose();
  };

  return (
    <Modal
      isVisible={toggleStyleModal}
      animationIn="fadeInUp"
      animationInTiming={333}
      animationOut="fadeOutDown"
      animationOutTiming={333}>
      <Pressable style={styles.container} onPress={closeKeyboard}>
        <View
          style={[
            rowAlignCenter,
            { justifyContent: 'space-between', paddingHorizontal: 6 },
          ]}>
          <View style={{ width: 14 }} />
          <Text style={styles.headerText}>Tuỳ chỉnh hiển thị</Text>
          <RoundBtn
            icon={Images.close}
            iconSize={14}
            iconColor={'red'}
            event={onClose}
          />
        </View>

        <View style={styles.objContainer}>
          <Text style={[styles.h2Text, { color: Colors.FABEBOOK_BLUE }]}>
            Đối tượng điểm
          </Text>
          <View
            style={[
              rowAlignCenter,
              styles.containerStyle,
              { justifyContent: 'flex-start' },
            ]}>
            <View style={rowAlignCenter}>
              <Text style={styles.label}>Chọn màu:</Text>
              <Pressable
                style={[styles.colorDisplay, { backgroundColor: pointColor }]}
                onPress={() => {
                  handleOpenColorCustom(0);
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.objContainer}>
          <Text style={[styles.h2Text, { color: Colors.FABEBOOK_BLUE }]}>
            Đối tượng trong vùng
          </Text>
          <View
            style={[
              rowAlignCenter,
              styles.containerStyle,
              { justifyContent: 'flex-start' },
            ]}>
            <View style={rowAlignCenter}>
              <Text style={styles.label}>Chọn màu:</Text>
              <Pressable
                style={[styles.colorDisplay, { backgroundColor: polinegonColor }]}
                onPress={() => {
                  handleOpenColorCustom(1);
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.objContainer}>
          <Text style={[styles.h2Text, { color: Colors.DEFAULT_GREEN }]}>
            Đường viền
          </Text>
          <View style={[rowAlignCenter, styles.containerStyle]}>
            <View style={rowAlignCenter}>
              <Text style={styles.label}>Chọn màu:</Text>
              <Pressable
                style={[styles.colorDisplay, { backgroundColor: borderColor }]}
                onPress={() => {
                  handleOpenColorCustom(2);
                }}
              />
            </View>
            <View style={rowAlignCenter}>
              <Text style={styles.label}>Độ dày viền: </Text>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={bdWidth}
                onChangeText={handleChangeBd}
              />
            </View>
          </View>
        </View>

        <View style={styles.bntContainer}>
          <TextBtn
            text={'Lưu'}
            textColor={'black'}
            pd={10}
            btnColor={Colors.LIGHT_GREEN}
            w={'30%'}
            event={handleSaveStyle}
            bdRadius={22}
          />
        </View>
      </Pressable>

      <ColorPickerCustom
        toggleColorModal={toggleColorModal}
        setToggleColorModal={setToggleColorModal}
        onColorPicker={handlePickColor}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: 12,
  },

  headerText: {
    alignSelf: 'center',
    fontFamily: Fonts.SF_SEMIBOLD,
    fontSize: wp('4.6%'),
    color: Colors.GOOGLE_BLUE,
  },

  objContainer: {
    marginTop: 10,
  },

  h2Text: {
    fontFamily: Fonts.SF_MEDIUM,
    fontSize: wp('3.8%'),
  },

  containerStyle: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 6,
    paddingHorizontal: wp('6%'),
  },

  colorDisplay: {
    borderWidth: 0.6,
    borderColor: Colors.INACTIVE_GREY,
    width: 66,
    height: 30,
    borderRadius: 6,
    marginLeft: 4,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.INACTIVE_GREY,
    width: 24,
  },
  label: {
    fontFamily: Fonts.SF_REGULAR,
    fontSize: wp('3.4%'),
    color: Colors.TEXT_COLOR2,
  },

  bntContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
});

export default ObjectStyleCustom;
