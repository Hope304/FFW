import { Box, Button, Center, CheckIcon, Container, FormControl, Select, Text, View, VStack } from "native-base";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Colors from "../contans/Colors";
import { Dropdown } from "react-native-element-dropdown";
import { ScrollView } from "react-native-gesture-handler";

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const SelectWMSLayerScreen = () => {
  const [selectTypeMapCode, setSelectTypeMapCode] = useState(undefined);
  const [selectDistrict, setSelectDistrict] = useState(undefined);
  const [selectCommune, setSelectCommune] = useState(undefined);
  return (
    <Box>
      <VStack space={4}>
        <View style={styles.containerEachLine}>
          <Text style={styles.title}>Chọn lớp bản đồ</Text>
          <Dropdown
            itemTextStyle={{ color: Colors.TEXT_COLOR }}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Chọn lớp bản đồ"
            value={selectTypeMapCode}
            onChange={item => {
              setSelectTypeMapCode(item.selectTypeMapCode);
            }}
          />
        </View>
        <View style={styles.containerEachLine}>
          <Text style={styles.title}>Chọn Quận/Huyện</Text>
          <Dropdown
            itemTextStyle={{ color: Colors.TEXT_COLOR }}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Chọn Quận/Huyện"
            value={selectDistrict}
            onChange={item => {
              setSelectDistrict(item.value);
            }}
          />
        </View>
        <View style={styles.containerEachLine}>
          <Text style={styles.title}>Chọn Xã/Phường/Thị trấn</Text>
          <Dropdown
            itemTextStyle={{ color: Colors.TEXT_COLOR }}
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Chọn Xã/Phường/Thị trấn"
            value={selectCommune}
            onChange={item => {
              setSelectCommune(item.value);
            }}
          />
        </View>
        <Center marginTop={10}>
          <Button
            shadow="3"
            size="lg"
            w="300"
            onPress={() => console.log("butoon")}>
            Chọn hiển thị
          </Button>
        </Center>
      </VStack>
    </Box>

  );
}

export default SelectWMSLayerScreen;

const styles = StyleSheet.create({
  dropdown: {
    paddingVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,

  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.TEXT_COLOR4,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.TEXT_COLOR
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  containerEachLine: {
    flexDirection: 'column',
    margin: 16,
    height: 50,
  },
  title: {
    fontWeight: "bold",
  }
});