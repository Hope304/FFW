
import proj from 'proj4';

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