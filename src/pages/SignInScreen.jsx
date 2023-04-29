import React, {
  useContext,
  useEffect,
  useRef,
} from 'react';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Store } from '../store/Store';
import loginFeature from '../libs/apis/userLogin';
import { USER_SIGNIN } from '../store/Constanst';

export default function SignInScreen() {
  // const cookies = new
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get(
    'redirect'
  );
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const { state, dispatch: ctxDispatch } =
    useContext(Store);
  const email = useRef('');
  const password = useRef('');

  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await loginFeature(
        email.current.value,
        password.current.value
      );
      ctxDispatch({ type: USER_SIGNIN, payload: data });
      localStorage.setItem(
        'userInfo',
        JSON.stringify(data)
      );
      navigate(redirect || '/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <div>
      <div className="text-center mt-24">
        <h2 className="text-20 font-lob text-5xl">
          Sign in into your account
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
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-xl bg-white rounded shadow-md p-6"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <input
                ref={email}
                placeholder="Email"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none"
                type="email"
                required
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                ref={password}
                placeholder="Password"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none"
                type="password"
              />
            </div>
            <div className="w-full flex items-center justify-between px-3 mb-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="mr-1 bg-white"
                />
                <span className="text-xl text-gray-700 font-lob">
                  Remember Me
                </span>
              </div>
              <div className="w-1/2 text-right">
                <Link
                  to={'/settings'}
                  href="#"
                  className="text-primary-color font-lob font-light text-xl tracking-tight"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="btn-3D w-full h-10"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
