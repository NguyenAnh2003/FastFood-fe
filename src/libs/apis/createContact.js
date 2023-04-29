import { postFetch } from '../utils';

const createContact = (name, email, phone) => {
  const res = postFetch('user/contact', {
    name,
    email,
    phone,
  });
  return res;
};

export default createContact;
