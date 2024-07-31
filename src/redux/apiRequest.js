import axios from 'axios';


export const getFirePointDate = async data => {
  console.log(data);
  try {
    const api = `https://giamsatrunghanam.xuanmaijsc.vn/api/getHotSpotInfo?from=${data.dateStart}&to=${data.dateEnd}`;

    const res = await axios.get(api);
    (res) => res.json();
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
