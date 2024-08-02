import React, {useCallback, useRef, useState} from 'react';
import {Box, Button, Center, Pressable, View, VStack} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const DOT_SIZE = 8;

const data = [
  require('../../assets/images/1.jpg'),
  require('../../assets/images/2.jpg'),
  require('../../assets/images/3.jpg'),
  require('../../assets/images/4.jpg'),
];

const MemoizedPagination = React.memo(({dotsLength, activeDotIndex}) => (
  <View style={styles.paginationContainer}>
    {Array.from({length: dotsLength}).map((_, index) => (
      <View
        key={index}
        style={[
          styles.dotStyle,
          index === activeDotIndex && {
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          },
        ]}
      />
    ))}
  </View>
));

export default function HomeScreen({navigation}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isCarousel = useRef(null);

  const renderItem = useCallback(
    ({item}) => (
      <View shadow={4} borderRadius={6} overflow="hidden">
        <FastImage
          source={item}
          style={{width: '100%', height: 200}}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    ),
    [],
  );

  return (
    <Box>
      <VStack space={4} alignItems="center" marginTop={4}>
        <Center alignItems="center" w="100%">
          <Carousel
            ref={isCarousel}
            data={data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setActiveIndex(index)}
            autoplay
            loop
            pagingEnabled
          />
          <MemoizedPagination
            dotsLength={data.length}
            activeDotIndex={activeIndex}
          />
        </Center>
        <Center alignItems="center" width="100%" paddingX={5}>
          <Pressable
            w="100%"
            onPress={() => navigation.navigate('MapScreen', {firePoint: []})}
            shadow={4}
            rounded={6}
            overflow="hidden">
            <FastImage
              source={{uri: 'https://wallpaperaccess.com/full/317501.jpg'}}
              style={{width: '100%', height: 200}}
              resizeMode={FastImage.resizeMode.cover}
            />
          </Pressable>
        </Center>
        <Center w="100%" paddingX={5}>
          <Button
            shadow="3"
            size="lg"
            w="100%"
            onPress={() => navigation.navigate('FFWHuyen')}>
            Danh sách cấp cháy
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dotStyle: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
});
