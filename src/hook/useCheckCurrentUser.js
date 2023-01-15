import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from '../store/Store';

const useCheckCurrentUser = () => {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
  }, [userInfo, navigate]);
};

export default useCheckCurrentUser;
