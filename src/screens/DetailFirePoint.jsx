import { Box, Button, Center, Heading, ScrollView, Stack, Text, VStack } from "native-base";
import React from "react";
import { transformLatLng } from "../untils/converProject";
import Dimension from "../contans/Dimension";

const DetailFirePoint = ({ route }) => {
  const { geometry, properties } = route.params;

  return (
    <Center>
      <ScrollView width={Dimension.setWidth(90)} height={Dimension.setHeight(90)}>
        <VStack>
          <Center>
            <Heading size="sm" marginTop={3}>
              Thông tin chi tiết
            </Heading>
          </Center>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Vĩ độ: </Text>
              <Text> {Math.floor(transformLatLng(geometry.coordinates[1], geometry.coordinates[0], 49).long * 100) / 100} ({geometry.coordinates[1]})
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Kinh độ: </Text>
              <Text> {Math.floor(transformLatLng(geometry.coordinates[1], geometry.coordinates[0], 49).lat * 100) / 100} ({geometry.coordinates[0]})
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Độ sáng: </Text>
              <Text> {properties.BRIGHTNESS}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Scan: </Text>
              <Text> {properties.SCAN}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Track: </Text>
              <Text> {properties.TRACK}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Ngày chụp: </Text>
              <Text> {properties.ACQ_DATE}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Giời chụp: </Text>
              <Text> {properties.ACQ_TIME}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Vệ tinh: </Text>
              <Text> {properties.SATELLITE}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Độ tin cậy: </Text>
              <Text> {properties.CONFIDENCE}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Phiên bản vệ tinh: </Text>
              <Text> {properties.VERSION}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Độ sáng kênh 31: </Text>
              <Text> {properties.BRIGHT_T31}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Thời gian chụp: </Text>
              <Text> {properties.DAYNIGHT}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Mã tỉnh: </Text>
              <Text> {properties.MATINH}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Tên tỉnh: </Text>
              <Text> {properties.TINH}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Mã huyện: </Text>
              <Text> {properties.MAHUYEN}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Tên huyện: </Text>
              <Text> {properties.HUYEN}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Mã xã: </Text>
              <Text> {properties.MAXA}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Tên xã: </Text>
              <Text> {properties.XA}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Tiểu khu: </Text>
              <Text> {properties.TIEUKHU}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Khoảnh: </Text>
              <Text> {properties.KHOANH}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Lô: </Text>
              <Text> {properties.LO}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Mã MALDLR: </Text>
              <Text> {properties.MALDLR}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>LDLR: </Text>
              <Text> {properties.LDLR}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Chủ rừng: </Text>
              <Text> {properties.CHURUNG}
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Tình trạng xác minh: </Text>
              <Text> {
                properties.XACMINH == 1 ? " Chưa xác minh" :
                  properties.XACMINH == 2 ? " Xác minh là cháy rừng" :
                    properties.XACMINH == 3 ? " Xác minh không phải cháy rừng" : " Xác minh có cháy nhưng không phải cháy rừng"
              }
              </Text>
            </Stack>
          </Box>
          <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="4">
            <Stack direction="row" justifyContent="space-between">
              <Text>Tình trạng kiểm duyệt: </Text>
              <Text> {
                properties.KIEMDUYET == 1 ? "Đã kiểm duyệt" : "Chưa kiểm duyệt"
              }
              </Text>
            </Stack>
          </Box>
          <Box paddingY={4}>
            <Stack direction="row" justifyContent="space-between" space={3}>
              {/* <Button disabled={this.state.disabled} onPress={() => this.props.navigation.navigate('map', { listFirePoint: [item], reselactFirePoint: true, lat: item.geometry.coordinates[0], long: item.geometry.coordinates[1] })} flex={1}>Xem trên bản đồ</Button> */}
              <Button height={Dimension.boxHeight(60)} flex={1} _text={{ fontWeight: 'bold', fontSize: Dimension.fontSize(16) }}>Xem trên bản đồ</Button>
              {/* <Button disabled={this.state.disabled} style={[styles.comfirm, { backgroundColor: "green" }]} onPress={() => this.props.navigation.navigate('comfirmFirePoint', { idPoint: item._id, onRefesh: () => this.onRefesh() })} flex={1} colorScheme="green" >Xác minh điểm cháy</Button> */}

              {
                properties.KIEMDUYET == 0 ?
                  <Button height={Dimension.boxHeight(60)} flex={1} colorScheme="green" _text={{ fontWeight: 'bold', fontSize: Dimension.fontSize(16) }} >Xác minh điểm cháy</Button>
                  : null
              }
            </Stack>
          </Box>
        </VStack>
      </ScrollView>

    </Center>
  );

}


export default DetailFirePoint;