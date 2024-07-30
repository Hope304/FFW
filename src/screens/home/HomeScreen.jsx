import {
  Box,
  Button,
  Center,
  Container,
  Image,
  Pressable,
  View,
  VStack,
} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const data = [
  'https://plus.unsplash.com/premium_photo-1665311513813-8576a87a251f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ciVFMSVCQiVBQm5nfGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1710795018356-4b22df77cf8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHIlRTElQkIlQUJuZ3xlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1663946448065-967d72d58b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHIlRTElQkIlQUJuZ3xlbnwwfHwwfHx8MA%3D%3D',
  'https://wallpaperaccess.com/full/317501.jpg',
];

export default function HomeScreen({navigation}) {
  const [index, setIndex] = React.useState(0);
  console.log(index);
  const isCarousel = React.useRef(null);
  const CarouselCardItem = ({item, index}) => {
    return (
      <View shadow={4} borderRadius={6} overflow="hidden">
        <Image
          source={{
            uri: item,
          }}
          alt="Alternate Text"
          key={index}
          w="100%"
          height={200}
        />
      </View>
    );
  };
  return (
    <Box>
      <VStack space={4} alignItems="center" marginTop={4}>
        <Center alignItems="center" w="100%" style={{position: 'relative'}}>
          <Carousel
            style={styles.carousel}
            layout="default"
            autoplay
            autoplayTimeout={2000}
            loop
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            // onSnapToItem={index => setIndex(index)}
          />
          {/* <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 5,
              height: 5,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          /> */}
        </Center>
        <Center alignItems="center" width="100%" paddingX={5}>
          <Pressable
            w="100%"
            onPress={() => navigation.navigate('MapScreen')}
            shadow={4}
            rounded={6}
            overflow="hidden">
            <Image
              source={{
                uri: 'https://wallpaperaccess.com/full/317501.jpg',
              }}
              alt="Alternate Text"
              w="100%"
              height={200}
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
  pagination: {},
});
