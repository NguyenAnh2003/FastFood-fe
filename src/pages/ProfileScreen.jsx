import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import LoadingComponent from '../components/loading/LoadingComponent';
import { Store } from '../store/Store';
import { Link, useNavigate } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
};

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
  const [{ loadingUpdate }, dispatch] = useReducer(
    reducer,
    {
      loadingUpdate: false,
    }
  );
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
      const { data } = await axios.put(
        '/api/user/profile',
        {
          name,
          email,
          address,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'UPDATE_SUCCESS' });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem(
        'userInfo',
        JSON.stringify(data)
      );
      alert('Updated');
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

  return loadingUpdate ? (
    <LoadingComponent />
  ) : (
    <div className="flex justify-center items-center container">
      <div class="w-[500px] mt-12">
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
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={updateHandler}
        >
          <div class="mb-4">
            {user.map((item, index) => (
              <React.Fragment>
                <label
                  class="block text-gray-700 font-lob text-xl font-bold mb-2 mt-2"
                  for="username"
                >
                  {item.title}
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <div class="flex items-center justify-center">
            <button class="profile-btn-3D" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
