import axios from 'axios';

export const getProducts = async () => {
  try {
    const res = await axios.get('/')
    if(res.data.success) {
      
    }
  } catch (error) {
    alert(error.message)  
  }
};
