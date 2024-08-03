import React from 'react';
import { View, StyleSheet, Linking, Share } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Heading, HStack, Image, Pressable, Text, VStack } from 'native-base';
import Colors from '../contans/Colors';

const DrawerContent = props => {


  //HDSD
  const HDSD = () => {
    Linking.openURL("https://www.youtube.com/channel/UCMMHXxI1RsJbNj1KjhnMZKQ");
  };

  //Share
  const ShareApp = async () => {
    try {
      const result = await Share.share({
        message: "Link tải ứng dụng NINHBINHFFW\n",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <VStack>
          <HStack alignItems='center' justifyContent='center' space={4} py={4} backgroundColor={Colors.LIGHT_GREY} borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" >
            <Image source={require('../assets/images/NinhBinh_FFW.png')}
              alt='Logo Ninh Binh'
              size='lg'
            />
            <View>
              <Heading size='md' >Ninh Bình FFW</Heading>
              <Text>Phiên bản: 2.2</Text>
            </View>
          </HStack>
          <VStack px={4} space={4} borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
          }} borderColor="muted.300" py={4}>
            <Text>Liên hệ</Text>
            <Pressable onPress={() => HDSD()}>
              <HStack alignItems='center' space={4}>
                <Image
                  source={require('../assets/images/instruct.png')}
                  alt='instruct'
                  size="xs"
                />
                <Text>Hướng dẫn sử dụng</Text>
              </HStack>
            </Pressable>
            <Pressable onPress={() => ShareApp()}>
              <HStack alignItems='center' space={4}>
                <Image
                  source={require('../assets/images/share.png')}
                  alt='share'
                  size="xs"
                />
                <Text>Chia sẻ ứng dụng</Text>
              </HStack>
            </Pressable>
            <Pressable>
              <HStack alignItems='center' space={4}>
                <Image
                  source={require('../assets/images/chat.png')}
                  alt='chat'
                  size="xs"
                />
                <Text>Góp ý</Text>
              </HStack>
            </Pressable>
            <Pressable>
              <HStack alignItems='center' space={4}>
                <Image
                  source={require('../assets/images/ifee_rmbg.png')}
                  alt='instruct'
                  size="xs"
                  resizeMode='contain'
                />
                <Text>Thông tin tác giả</Text>
              </HStack>
            </Pressable>
          </VStack>
        </VStack>
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },

});
