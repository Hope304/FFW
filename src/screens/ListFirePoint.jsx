import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";
import {
  Text,
  Pressable,
  FlatList,
  // Image,
  Badge,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  VStack,
  HStack,
  Heading,
  ScrollView,
} from "native-base";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Loader from "react-native-modal-loader";
import Moment from "moment";
import Colors from "../contans/Colors";
import Dimension from "../contans/Dimension";
import { compareDate, formatDate, formatDateToPost } from "../untils/dateTimeFunc";
import { getFirePointDate } from "../redux/apiRequest";
// import { mainURL } from "../untils/Variable";

const img1 = require("../assets/images/fire_notconfirmed.png");
const img2 = require("../assets/images/confirmed_fire_forest.png");
const ListFirePoint = ({ navigation }) => {
  const [groupValues, setGroupValues] = useState([])
  const [toggleDatePicker, setToggleDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dailyCheck, setDailyCheck] = useState(true);
  const [hisCheck, setHisCheck] = useState(false);
  const [isLoadData, setLoadData] = useState(false);
  const [disabled, setDisable] = useState(false);
  const [startDay, setStartDay] = useState(formatDate(new Date()));
  const [endDay, setEndDay] = useState(formatDate(new Date()));
  const [checkPick, setCheckPick] = useState(null);
  const [ToastAlert, setToastAlert] = useState(null);
  const [firePoint, setFirePoint] = useState([]);


  const ChangeCheck = () => {
    setDailyCheck(!dailyCheck);
    setHisCheck(!hisCheck);
    setLoadData(false);
    console.log("Check");
  }

  const handDownData = () => {
    compareDate(startDay, endDay)
      ? console.log("tải dữ liệu")
      : console.log('Ngày kết thúc không hợp lệ');
  }

  const handlePickDate = date => {
    setToggleDatePicker(false);
    if (checkPick) {
      const dayStart = formatDate(date);
      setStartDay(dayStart);
    } else {
      const dayEnd = formatDate(date);
      setEndDay(dayEnd);
    }
  };


  const handleDownData = async () => {
    console.log("get");
    // setRefresh(true);
    try {
      const data = {
        dateStart: formatDateToPost(startDay),
        dateEnd: formatDateToPost(endDay),
      };
      const res = await getFirePointDate(data);
      console.log(res.length);
      setFirePoint(res);
      // setRefresh(false);
    } catch (error) {
      console.log(error);
      // setRefresh(false);
    }
  }



  return (
    <Center>
      <ScrollView width={Dimension.setWidth(90)}>
        <VStack w="100%" space={4}>
          <Loader
            title="Đang tải dữ liệu..."
            size="small"
            loading={loading}
            color="#007bff"
          />
          <Box w="100%">
            <VStack w="100%" space={4}>
              <Badge _text={{
                fontSize: 18,
                fontWeight: "bold",
              }} >Lựa chọn điểm cháy</Badge>
              <Checkbox.Group onChange={ChangeCheck}>
                <VStack space={4} width="full">
                  <Box style={styles.checkBox}>
                    <Checkbox value="true" >Dữ liệu cháy trong 24h qua</Checkbox>
                  </Box>
                  <Box style={styles.checkBox}>
                    <Checkbox value="false" >Lịch sử điểm cháy</Checkbox>
                  </Box>
                </VStack>
              </Checkbox.Group>
              {hisCheck && (
                <VStack space={4}>
                  <Pressable
                    onPress={() => {
                      setCheckPick(true);
                      setToggleDatePicker(true);
                    }}>
                    <Text>{startDay}</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      setCheckPick(false);
                      setToggleDatePicker(true);
                    }}>
                    <Text>{endDay}</Text>
                  </Pressable>
                </VStack>

              )}
              <DateTimePickerModal
                isVisible={toggleDatePicker}
                mode="date"
                onConfirm={handlePickDate}
                onCancel={() => {
                  setToggleDatePicker(false);
                }}
              />
              {!isLoadData ? (
                <Button w="100%" size="lg" onPress={() => handleDownData()}>Tải dữ liệu điểm cháy</Button>

              ) : (
                <Button w="100%" size="lg" onPress={handDownData}>Mở trong bản đồ</Button>
              )}
            </VStack>
          </Box>
          <Box>
            <Badge _text={{
              fontSize: 18,
              fontWeight: "bold",
            }}>Lịch sử điểm cháy</Badge>
            <Box >

              <FlatList data={firePoint} renderItem={({
                item
              }) =>
                <Pressable onPress={() => navigation.navigate("DetailFirePoint", item)} borderBottomWidth="1" _dark={{
                  borderColor: "muted.50"
                }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="1">
                  {/* <HStack> */}
                  {/* {item.properties.XACMINH == 1 && (
                      <Image source={img1} />
                    )}
                    {item.properties.XACMINH == 2 && (
                      <Image source={img1} />
                    )}
                    {item.properties.XACMINH == 1 && (
                      <Image source={img1} />
                    )}
                    {item.properties.XACMINH == 1 && (
                      <Image source={img1} />
                    )} */}

                  {/* </HStack> */}

                  <VStack space={0}>
                    <Heading size="xs">{item.properties.XACMINH} -
                      {item.properties.XACMINH == 1
                        ? " Chưa xác minh"
                        : item.properties.XACMINH == 2
                          ? " Xác minh là cháy rừng"
                          : item.properties.XACMINH == 3
                            ? " Xác minh không phải cháy rừng"
                            : " Xác minh có cháy nhưng không phải cháy rừng"}
                    </Heading>
                    <Text p={0} style={{ fontSize: 12 }}>Huyện: {item.properties.HUYEN}</Text>
                    <Text style={{ fontSize: 12 }}>Xã: {item.properties.XA}</Text>
                    <Text style={{ fontSize: 12 }}>
                      Thời gian ghi nhận: {item.properties.ACQ_DATE}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ fontSize: 12 }}>
                        Tiểu khu: {item.properties.TIEUKHU}
                      </Text>
                      <Text style={{ fontSize: 12 }}>
                        {" "}
                        - Khoảnh: {item.properties.KHOANH}
                      </Text>
                      <Text style={{ fontSize: 12 }}> - Lô: {item.properties.LO}</Text>
                    </View>
                    <Text style={{ fontSize: 12 }}>
                      Độ tin cậy: {item.properties.CONFIDENCE}
                    </Text>
                  </VStack>
                </Pressable>
              } keyExtractor={item => item._id} />
            </Box>
          </Box>
        </VStack>
      </ScrollView>
    </Center>

  );
}

const styles = StyleSheet.create({
  checkBox: {
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    borderWidth: 0,
  },
  lable: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 16,
    color: "red",
  },
  content: {
    paddingLeft: 10,
  },
  comfirm: {
    marginHorizontal: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    flexDirection: "row",
  },
  comfirmText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  listStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    borderWidth: 0,
    marginRight: 20,
  },
});


export default ListFirePoint;