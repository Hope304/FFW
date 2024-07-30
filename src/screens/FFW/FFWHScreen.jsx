import { Box, Container, FlatList, Heading, Pressable, Text, VStack } from 'native-base';
import React from 'react'

const data = [{
  matinh: 24,
  ten: "Thành Phố Hà Giang",
  xa: 8,
  capchay: [
    { cap: "V", soluong: 0 },
    { cap: "IV", soluong: 0 },
    { cap: "III", soluong: 0 },
    { cap: "II", soluong: 0 },
    { cap: "I", soluong: 8 },
  ]
}, {
  matinh: 24,
  ten: "Thành Phố Hà Giang",
  xa: 8,
  capchay: [
    { cap: "V", soluong: 0 },
    { cap: "IV", soluong: 0 },
    { cap: "III", soluong: 0 },
    { cap: "II", soluong: 0 },
    { cap: "I", soluong: 8 },
  ]
}, {
  matinh: 24,
  ten: "Thành Phố Hà Giang",
  xa: 8,
  capchay: [
    { cap: "V", soluong: 0 },
    { cap: "IV", soluong: 0 },
    { cap: "III", soluong: 0 },
    { cap: "II", soluong: 0 },
    { cap: "I", soluong: 8 },
  ]
}]



const FFWHuyencreen = ({ navigation }) => {
  return (
    <Box width="100%" paddingX="4">
      <FlatList data={data} renderItem={({
        item
      }) => <Box borderBottomWidth="1" _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="2">
          <Pressable onPress={() => navigation.navigate('FFWXa')}>
            <VStack>
              <Heading size="xs">{item.matinh}-{item.ten}</Heading>
              <Text>Tổng số xã: {item.xa}</Text>
              <Text>Số xã ở các cấp cháy: {item.capchay.length}</Text>
            </VStack>
          </Pressable>
        </Box>} keyExtractor={item => item.id} />

    </Box>
  );
};

export default FFWHuyencreen;