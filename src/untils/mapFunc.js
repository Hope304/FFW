import proj from 'proj4';
import epsg from 'epsg-to-proj';

const prjTransform = (fromPrj, toPrj, lat, long) => {
  try {
    const longlat = proj(epsg[fromPrj], epsg[toPrj], [
      Number(lat),
      Number(long),
    ]);

    return longlat;
  } catch (error) {
    console.log(error);
  }
};
const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371000;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
};

const calculatePolylineLength = arr => {
  let totalLength = 0;

  for (let i = 0; i < arr?.length - 1; i++) {
    const lon1 = arr[i][0];
    const lat1 = arr[i][1];
    const lon2 = arr[i + 1][0];
    const lat2 = arr[i + 1][1];

    totalLength += calculateDistance(lat1, lon1, lat2, lon2);
  }

  return totalLength;
};
const roundNumber = (num, dec) => {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
};
export {prjTransform, calculateDistance, calculatePolylineLength, roundNumber};
