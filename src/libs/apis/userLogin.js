import { postFetch } from "../utils";

const loginFeature = (email, password) => {
  const res = postFetch('signin', { email, password });
  return res;
};

export default loginFeature;
