import { Box, Heading, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";

const data = {
  matinh: 2,
  tentinh: "Tỉnh Hà Giang",
  mahuyen: "24",
  tenhuyen: "Thành phố Hà Giang",
  maxa: "688",
  tenxa: "Phường Quang Trung",
  luongmua: "20.13",
  capchay: "1",
  chisoP: "0",
  nhietdo: "19.8",
  doam: "98",
  tocdogio: "2.5",
  huonggio: "146",
}
const FFWScreen = () => {
  return (
    <Box width="100%" paddingX="4">
      <VStack>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Mã tỉnh:</Heading>
            <Text>{data.matinh}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tên tỉnh:</Heading>
            <Text>{data.tentinh}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Mã huyện:</Heading>
            <Text>{data.mahuyen}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tên huyện:</Heading>
            <Text>{data.tenhuyen}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Mã xã:</Heading>
            <Text>{data.maxa}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tên xã:</Heading>
            <Text>{data.tenxa}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Lượng mưa:</Heading>
            <Text>{data.luongmua}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Cấp cháy:</Heading>
            <Text>{data.capchay}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Chỉ số P:</Heading>
            <Text>{data.chisoP}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Nhiệt độ:</Heading>
            <Text>{data.nhietdo}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Độ ẩm:</Heading>
            <Text>{data.doam}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tốc độ gió:</Heading>
            <Text>{data.tocdogio}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Hướng gió:</Heading>
            <Text>{data.huonggio}</Text>
          </HStack>
        </Box>
      </VStack>

    </Box>
  );
}

export default FFWScreen;