import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import LoadingComponent from '../components/loading/LoadingComponent';
import { Store, reducer } from '../store/Store';
import { Link, useNavigate } from 'react-router-dom';
import updateFeature from '../libs/apis/userUpdate';

export default function ProfileScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } =
    useContext(Store);
  const { userInfo } = state;
  const [name, setName] = useState(
    userInfo && userInfo.name
  );
  const [email, setEmail] = useState(
    userInfo && userInfo.email
  );
  const [address, setAddress] = useState(
    userInfo && userInfo.address
  );
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const user = [
    {
      title: 'Name',
      state: name,
      onchange: setName,
    },
    {
      title: 'Email',
      state: email,
      onchange: setEmail,
    },
    {
      title: 'Address',
      state: address,
      onchange: setAddress,
    },
  ];

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await updateFeature(
        name,
        email,
        address
      );
      // dispatch({ type: 'UPDATE_SUCCESS' });
      // ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      // localStorage.setItem(
      //   'userInfo',
      //   JSON.stringify(data)
      // );
      console.log(data ? ('YEAH', data) : 'LEAVE');
    } catch (error) {
      dispatch({ type: 'UPDATE_FAIL' });
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
  }, [userInfo]);

  return (
    <div className="flex justify-center items-center container">
      <div className="w-[500px] mt-12">
        <div className="text-center mt-2 mb-5">
          <h2 className="font-lob text-4xl">
            Update your personal details!
          </h2>
          <span className="text-2xl font-lob">
            or
            <span> </span>
            <Link
              to={'/signup'}
              href="#"
              className="text-primary-color font-lob font-bold text-2xl ml-1"
            >
              register a new account
            </Link>
          </span>
        </div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={updateHandler}
        >
          <div className="mb-4">
            {user.map((item, index) => (
              <React.Fragment key={index}>
                <label
                  className="block text-gray-700 font-lob text-xl font-bold mb-2 mt-2"
                  htmlFor="username"
                >
                  {item.title}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder={item.state}
                  value={item.state}
                  onChange={(e) =>
                    item.onchange(e.target.value)
                  }
                />
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="btn-3D w-[200px] h-10 text-2xl"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
