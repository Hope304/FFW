import { Box, Heading, HStack, Pressable, Spacer, Text, VStack } from "native-base";
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
          <HStack>
            <Heading size="sm">Mã tỉnh:</Heading>
            <Spacer />
            <Text>{data.matinh}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tên tỉnh:</Heading>
            <Spacer />
            <Text>{data.tentinh}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Mã huyện:</Heading>
            <Spacer />
            <Text>{data.mahuyen}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tên huyện:</Heading>
            <Spacer />
            <Text>{data.tenhuyen}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Mã xã:</Heading>
            <Spacer />
            <Text>{data.maxa}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tên xã:</Heading>
            <Spacer />
            <Text>{data.tenxa}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Lượng mưa:</Heading>
            <Spacer />
            <Text>{data.luongmua}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Cấp cháy:</Heading>
            <Spacer />
            <Text>{data.capchay}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Chỉ số P:</Heading>
            <Spacer />
            <Text>{data.chisoP}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Nhiệt độ:</Heading>
            <Spacer />
            <Text>{data.nhietdo}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Độ ẩm:</Heading>
            <Spacer />
            <Text>{data.doam}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Tốc độ gió:</Heading>
            <Spacer />
            <Text>{data.tocdogio}</Text>
          </HStack>
        </Box>
        <Box borderBottomWidth="1" _dark={{
          borderColor: "muted.50"
        }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="3">
          <HStack space={20}>
            <Heading size="sm">Hướng gió:</Heading>
            <Spacer />
            <Text>{data.huonggio}</Text>
          </HStack>
        </Box>
      </VStack>

    </Box>
  );
}

export default FFWScreen;