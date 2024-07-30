import { Box, Container, FlatList, Heading, Pressable, Text, VStack } from 'native-base';
import React from 'react'

const data = [
  {
    maxa: "688",
    ten: "Phường Quang Trung",
    huyen: "Thành Phố Hà Giang",
    capchay: "1",
  },
  {
    maxa: "688",
    ten: "Phường Quang Trung",
    huyen: "Thành Phố Hà Giang",
    capchay: "1",
  },
  {
    maxa: "688",
    ten: "Phường Quang Trung",
    huyen: "Thành Phố Hà Giang",
    capchay: "1",
  },
  {
    maxa: "688",
    ten: "Phường Quang Trung",
    huyen: "Thành Phố Hà Giang",
    capchay: "1",
  },
  {
    maxa: "688",
    ten: "Phường Quang Trung",
    huyen: "Thành Phố Hà Giang",
    capchay: "1",
  },
]
const FFWXaScreen = ({ navigation }) => {
  return (
    <Box width="100%" paddingX="4">
      <Box borderBottomWidth="1" _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="2">
        <Heading size="sm">Danh sách xã</Heading>
      </Box>
      <FlatList data={data} renderItem={({
        item
      }) => <Box borderBottomWidth="1" _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="2">
          <Pressable onPress={() => navigation.navigate('FFW')}>
            <VStack>
              <Heading size="xs">{item.maxa}-{item.ten}</Heading>
              <Text>Huyện: {item.huyen}</Text>
              <Text>Cấp cháy: {item.capchay}</Text>
            </VStack>
          </Pressable>
        </Box>} keyExtractor={item => item.id} />

    </Box>
  )
}

export default FFWXaScreen;