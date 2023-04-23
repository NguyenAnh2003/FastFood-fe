import { postFetch } from "../utils";

const loginFeature = (email, password) => {
  const res = postFetch('user/signin', { email, password });
  return res;
};

export default loginFeature;
