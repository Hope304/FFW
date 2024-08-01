import { Dimensions } from "react-native";

export const mainURL = "https://giamsatrunghanam.xuanmaijsc.vn";

export const prvCode = 35;
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 1;
export const VNCoor = {
  latitude: 20.5358,
  longitude: 105.9172,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: ASPECT_RATIO * LATITUDE_DELTA,
};
