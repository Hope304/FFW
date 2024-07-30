import { Box, Center, HStack, Icon, Pressable, Spacer, Text } from "native-base";
import React from "react";
import Colors from "../../contans/Colors";

const MapScreen = ({ navigation }) => {
  return (
    <Box flex={1} safeAreaTop width="100%" alignSelf="center">

      <HStack safeAreaBottom justifyContent="center" paddingX={4} >
        <Pressable cursor="pointer" py="5" flex={1} onPress={() => navigation.navigate("SelectWMSLayerScreen")}>
          <Text>Bản đồ</Text>
        </Pressable>
        <Spacer />
        <Pressable cursor="pointer" py="5" flex={1} onPress={() => console.log("Mbtibles")}>
          <Text>Mbtiles</Text>
        </Pressable>
        <Spacer />
        <Pressable cursor="pointer" py="5" flex={1} onPress={() => console.log("Điểm cháy")}>
          <Text>Điểm cháy</Text>
        </Pressable>
        <Spacer />
        <Pressable cursor="pointer" py="5" flex={1} onPress={() => console.log("Liên hệ")}>
          <Text>Liên hệ</Text>
        </Pressable>
      </HStack>
    </Box>
  )
}

export default MapScreen;