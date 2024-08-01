import {
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Image,
  Pressable,
  Spacer,
  Text,
  View,
} from 'native-base';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Colors from '../../contans/Colors';
import {
  Dimensions,
  PermissionsAndroid,
  PixelRatio,
  Platform,
  StyleSheet,
} from 'react-native';
import MapView, {Geojson, MAP_TYPES, PROVIDER_GOOGLE} from 'react-native-maps';
import {defaultProjection, VNCoor} from '../../untils/Variable';
import Dimension from '../../contans/Dimension';
import {FloatingAction} from 'react-native-floating-action';
import Geolocation from 'react-native-geolocation-service';
import {position} from 'native-base/lib/typescript/theme/styled-system';
import {
  calculatePolylineLength,
  prjTransform,
  roundNumber,
} from '../../untils/mapFunc';
import {
  generateID,
  getCurrentDate,
  getCurrentTime,
} from '../../untils/dateTimeFunc';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {readObjData, storeObjData} from '../../untils/storageData';
import {useFocusEffect} from '@react-navigation/native';
// import {
//   generateID,
//   getCurrentDate,
//   getCurrentTime,
// } from '../../utils/dateTimeFunc';

const commonColor = {
  pending: '#bd2828',
  saved: '#e8e679',
};

const commonObj = {
  timeCreate: getCurrentTime(),
  dateCreate: getCurrentDate(),
  name: '',
  type: '',
  info: '',
  note: '',
  photos: [],
  editting: true,
};

const MapScreen = ({navigation}) => {
  const actions = [
    {
      text: 'Thêm điểm mới',
      icon: require('../../assets/images/point.png'),
      name: 'Point',
      position: 1,
    },
    {
      text: 'Thêm đường mới',
      icon: require('../../assets/images/line.png'),
      name: 'LineString',
      position: 2,
    },
    {
      text: 'Thêm vùng mới',
      icon: require('../../assets/images/polygon.png'),
      name: 'Polygon',
      position: 3,
    },
    {
      text: 'Thêm đường tự động GPS',
      icon: require('../../assets/images/line.png'),
      name: 'bt_addLineAuto',
      position: 4,
    },
    {
      text: 'Thêm vùng tự động GPS',
      icon: require('../../assets/images/polygon.png'),
      name: 'bt_addPolyAuto',
      position: 5,
    },
  ];
  const [current_action, setCurrent_action] = useState(0);
  const [editing, setEditing] = useState(null);
  const [old_action, setOld_action] = useState(0);
  const [markers, setMarkers] = useState([]);
  const [viewGroupButtonHandEdit, setViewGroupButtonHandEdit] = useState(false);
  const [viewGroupButtonGPSEdit, setViewGroupButtonGPSEdit] = useState(false);
  const [loadingWMSGetInfo, setLoadingWMSGetInfo] = useState(false);
  const [mapRender, setMapRender] = useState(false);
  const mapViewRef = useRef(null);
  const [currCoor, setCurrCoor] = useState(null);
  const [type_map, setTypeMap] = useState(3);
  const [toolMode, setToolMode] = useState(null);
  const [undoArr, setUndoArr] = useState([]);
  const toggleTool = useSharedValue(false);
  const [redoArr, setRedoArr] = useState([]);
  const [geojson, setGeojson] = useState([]);
  const [currPrj, setCurrPrj] = useState(defaultProjection);
  const [objectDraw, setObjectDraw] = useState(true);
  const [linegonMarker, setLinegonMarker] = useState([]);
  const [distanceCur, setDistanceCur] = useState(0);

  const getGeoProject = async () => {
    const allPrj = await readObjData('geoProject');

    if (allPrj) {
      setGeojson(allPrj.geojson);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getGeoProject();
    }, []),
  );

  const addPoint = (latitude, longitude) => {
    const transformToCurrPrj = prjTransform(
      4326,
      currPrj?.epsg_code,
      longitude,
      latitude,
    );

    const newPoint = {
      type: 'Feature',
      properties: {
        'marker-color': commonColor.pending,
        id: generateID(3),
        coor: {lat: transformToCurrPrj[1], lon: transformToCurrPrj[0]},
        ...commonObj,
      },
      geometry: {
        coordinates: [longitude, latitude],
        type: 'Point',
      },
    };

    return newPoint;
  };
  const addLine = (latitude, longitude, isEditting) => {
    let lastItem = undoArr[undoArr?.length - 1];
    const checkEditting = lastItem?.properties?.editting;

    if (checkEditting) {
      const updateCoor = [
        ...lastItem?.geometry?.coordinates,
        [longitude, latitude],
      ];
      const distance = calculatePolylineLength(updateCoor);
      setDistanceCur(distance);
      console.log(distance);
      const updateProps = {
        ...lastItem?.properties,
        editting: isEditting,
        distance: `${roundNumber(distance, 2)} m`,
      };

      const newLine = {
        ...lastItem,
        properties: updateProps,
        geometry: {
          coordinates: updateCoor,
          type: 'LineString',
        },
      };

      return {newLine, checkEditting};
    }

    const newLine = {
      type: 'Feature',
      properties: {
        id: generateID(3),
        stroke: commonColor.pending,
        'stroke-width': 4,
        distance: '',
        ...commonObj,
      },
      geometry: {
        coordinates: [[longitude, latitude]],
        type: 'LineString',
      },
    };

    return {newLine, checkEditting};
  };
  const addPointForPolinegon = coor => {
    setLinegonMarker([...linegonMarker, coor]);
  };
  let type_view = MAP_TYPES.STANDARD;
  if (type_map === 0) {
    type_view = MAP_TYPES.STANDARD;
  } else if (type_map === 1) {
    type_view = MAP_TYPES.SATELLITE;
  } else if (type_map === 2) {
    type_view = MAP_TYPES.TERRAIN;
  } else if (type_map === 3) {
    type_view = MAP_TYPES.HYBRID;
  }

  const drawPoint = (x, y) => {
    let newUndo = [...undoArr];
    const newPoint = addPoint(y, x);

    setUndoArr([...newUndo, newPoint]);
  };
  const drawLine = (x, y, isEditting) => {
    let newUndo = [...undoArr];

    const newLine = addLine(y, x, isEditting);

    if (newLine.checkEditting) {
      newUndo.splice(newUndo?.length - 1, 1, newLine.newLine);

      setUndoArr(newUndo);
    } else {
      setUndoArr([...undoArr, newLine.newLine]);
    }
  };

  const createObject = (latitude, longitude, isEditting) => {
    switch (toolMode) {
      case 'Point':
        drawPoint(longitude, latitude);
        break;
      case 'LineString':
        drawLine(longitude, latitude, isEditting);
        addPointForPolinegon({latitude, longitude});
        break;
      case 'Polygon':
        drawPolygon(longitude, latitude, isEditting);
        addPointForPolinegon({latitude, longitude});
        break;
    }
  };

  const handleToolPress = e => {
    const coor = e?.nativeEvent?.coordinate;
    createObject(coor?.latitude, coor?.longitude, true);
  };
  const handlePickMode = name => {
    setToolMode(name);
    toggleTool.value = true;
  };
  const clearToolData = useCallback(() => {
    setLinegonMarker([]);
    setUndoArr([]);
    setRedoArr([]);
  }, []);

  const handleUndo = () => {
    let undoTemp = [...undoArr];

    const lastItem = undoTemp.pop();
    const {coordinates, type} = lastItem.geometry;

    // if (type != 'Point') {
    //   handleTempMarker(coordinates, type, true);
    // }
    setUndoArr(undoTemp);
    setRedoArr([lastItem, ...redoArr]);
  };

  const handleRedo = () => {
    let redoTemp = [...redoArr];

    const firstItem = redoTemp.shift();
    const {coordinates, type} = firstItem.geometry;

    // if (type != 'Point') {
    //   handleTempMarker(coordinates, type, false);
    // }
    setUndoArr([...undoArr, firstItem]);
    setRedoArr(redoTemp);
  };
  const storeObj = useCallback(async obj => {
    try {
      const allPrj = await readObjData('geoProject');
      const updatedPrj =
        allPrj === null
          ? {
              geojson: obj.geojson,
            }
          : {geojson: [...allPrj.geojson, ...obj.geojson]};
      await storeObjData('geoProject', updatedPrj);
    } catch (error) {
      console.log('err', error);
    }
  }, []);

  const handleSaveGeojson = useCallback(async () => {
    try {
      const geoSaved = undoArr.map(item => {
        const fieldFilter = {
          'marker-color': commonColor.saved,
          stroke: commonColor.saved,
        };

        const obj = {
          ...item,
          properties: {
            ...item.properties,
            ...fieldFilter,
          },
        };

        return obj;
      });

      const newGeo = [...geojson, ...geoSaved];

      setGeojson(newGeo);

      const obj = {geojson: newGeo};

      handleOffMapTool();
      await storeObj(obj);
    } catch (error) {
      console.log(error);
    }
  }, [undoArr]);
  const handleInfoPress = event => {
    const position = event?.nativeEvent?.position;
    const coor = event?.nativeEvent?.coordinate;
    let x = position?.x;
    let y = position?.y;

    if (Platform.OS === 'android') {
      x = x / PixelRatio.get();
      y = y / PixelRatio.get();
    }

    // handleGetInfoRegion(x, y, coor?.latitude, coor?.longitude);
  };
  const handleLongPressMap = e => {
    const {latitude, longitude} = e.nativeEvent.coordinate;

    createObject(latitude, longitude, false);
  };
  const targetUserLocation = () => {
    const latitude = currCoor?.yUser;
    const longitude = currCoor?.xUser;

    createObject(latitude, longitude);
  };

  const handlePress = e => {
    if (toolMode && toolMode !== 'GPSLineString' && toolMode !== 'GPSPolygon') {
      handleToolPress(e);
    } else {
      handleInfoPress(e);
    }
  };
  const handleOffMapTool = () => {
    toggleTool.value = false;
    setToolMode(null);
    clearToolData();
    // closeNotifier();
  };
  const toolContainerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      toggleTool.value,
      [false, true],
      [0, 1],
      Extrapolation.CLAMP,
    );
    const bottom = interpolate(
      toggleTool.value,
      [false, true],
      [-40, 100],
      Extrapolation.CLAMP,
    );

    return {
      opacity: withSpring(opacity, {duration: 400}),
      bottom: withTiming(bottom, {duration: 400}),
    };
  });

  // const [mapType, setMapType] = useState(MAP_TYPES.HYBRID);
  return (
    <Box flex={1} safeAreaTop width="100%" alignSelf="center">
      <MapView
        ref={mapViewRef}
        style={styles.mapContainer}
        provider={'google'}
        initialRegion={VNCoor}
        mapType={type_view}
        // onLongPress={handleLongPressMap}
        onPress={handlePress}
        showsScale={true}
        showsUserLocation={true}
        showsMyLocationButton={true}>
        {undoArr?.length != 0 && (
          <Geojson
            geojson={{
              type: 'FeatureCollection',
              features: undoArr,
            }}
          />
        )}
        {objectDraw && geojson?.length != 0 && (
          <Geojson
            geojson={{
              type: 'FeatureCollection',
              features: geojson,
            }}
            // tappable={toolMode ? false : true}
            // onPress={handleOpenEdit}
          />
        )}
      </MapView>
      <Animated.View style={[styles.edittingContainer, toolContainerStyle]}>
        <View
          style={{
            justifyContent: 'space-around',
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable onPress={handleOffMapTool}>
            <Image
              source={require('../../assets/images/miniClose.png')}
              alt="close"
              size={6}
            />
          </Pressable>
          <Pressable onPress={handleUndo}>
            <Image
              source={require('../..//assets/images/undo.png')}
              alt="undo"
              size={6}
            />
          </Pressable>
          <Pressable onPress={handleRedo}>
            <Image
              source={require('../..//assets/images/redo.png')}
              alt="redo"
              size={6}
            />
          </Pressable>
          {/* <Pressable onPress={targetUserLocation} >
            <Image
              source={require('../..//assets/images/targetLocation.png')}
              alt="targetLocation"
              size={6}

            />
          </Pressable> */}
          <Pressable onPress={handleSaveGeojson}>
            <Image
              source={require('../..//assets/images/save.png')}
              alt="save"
              size={6}
            />
          </Pressable>
        </View>
      </Animated.View>
      <FloatingAction
        actions={actions}
        position="right"
        distanceToEdge={{vertical: 100, horizontal: 10}}
        buttonSize={48}
        actionsPaddingTopBottom={3}
        onPressItem={name => handlePickMode(name)}
      />

      <HStack
        safeAreaBottom
        justifyContent="center"
        height={Dimension.setHeight(8)}>
        <Pressable
          cursor="pointer"
          py="5"
          flex={1}
          onPress={() => navigation.navigate('SelectWMSLayerScreen')}>
          <Text>Bản đồ</Text>
        </Pressable>
        <Spacer />
        <Pressable
          cursor="pointer"
          py="5"
          flex={1}
          onPress={() => console.log('Mbtibles')}>
          <Text>Mbtiles</Text>
        </Pressable>
        <Spacer />
        <Pressable
          cursor="pointer"
          py="5"
          flex={1}
          onPress={() => navigation.navigate('ListFirePoint')}>
          <Text>Điểm cháy</Text>
        </Pressable>
        <Spacer />
        <Pressable
          cursor="pointer"
          py="5"
          flex={1}
          onPress={() => console.log('Liên hệ')}>
          <Text>Liên hệ</Text>
        </Pressable>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    // ...StyleSheet.absoluteFillObject,
  },
  edittingContainer: {
    position: 'absolute',
    right: 70,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '66%',
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 30,
  },
});

export default MapScreen;
