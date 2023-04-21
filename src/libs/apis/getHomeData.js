import getFetch from '../utils/getFetch';


export const getHomeData = () => {
  const res = getFetch('combine/home');
  return res;
};

