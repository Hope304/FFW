import proj from 'proj4';
import epsg from 'epsg-to-proj';

function calculateAreaInSquareMeters(x1, x2, y1, y2) {
  return (y1 * x2 - x1 * y2) / 2;
}

function calculateYSegment(latitudeRef, latitude, circumference) {
  return ((latitude - latitudeRef) * circumference) / 360;
}

function calculateXSegment(longitudeRef, longitude, latitude, circumference) {
  return (
    ((longitude - longitudeRef) *
      circumference *
      Math.cos(latitude * (Math.PI / 180))) /
    360
  );
}

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
const calculateAreaPolygonMeter = arr => {
  const radius = 6371000;

  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const listY = [];
  const listX = [];
  const listArea = [];

  const latitudeRef = arr[0][1];
  const longitudeRef = arr[0][0];
  for (let i = 1; i < arr?.length; i++) {
    let latitude = arr[i][1];
    let longitude = arr[i][0];
    listY.push(calculateYSegment(latitudeRef, latitude, circumference));
    listX.push(
      calculateXSegment(longitudeRef, longitude, latitude, circumference),
    );
  }

  for (let i = 1; i < listX?.length; i++) {
    let x1 = listX[i - 1];
    let y1 = listY[i - 1];
    let x2 = listX[i];
    let y2 = listY[i];
    listArea.push(calculateAreaInSquareMeters(x1, x2, y1, y2));
  }

  let areasSum = 0;
  listArea.forEach(area => (areasSum = areasSum + area));

  let areaCalc = Math.abs(areasSum);
  return areaCalc;
};

export { prjTransform, calculateDistance, calculatePolylineLength, roundNumber, calculateAreaPolygonMeter };
