import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('dasd');
    }
    try {
      const { data } = await axios.post(
        '/api/user/signup',
        {
          name,
          email,
          password,
          address
        }
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data))
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-center mt-24">
        <h2 className="text-24 font-bold">
          Get yourself an account now for
          <span className="text-primary-color ml-1">
            free!
          </span>
        </h2>
        <span className="text-sm text-14">
          Already got one?
          <Link
            to={'/signin'}
            href="#"
            className="text-primary-color font-bold ml-1"
          >
            Sign in
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
                placeholder="Name"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                placeholder="Address"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                placeholder="Email"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                placeholder="Password"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none"
                type="password"
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                value={password}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input
                placeholder="Confirm"
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none"
                type="password"
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                value={confirmPassword}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                type="submit"
                className="appearance-none block w-full bg-primary-color text-white font-bold border border-gray-200 rounded py-3 px-3 leading-tight  focus:outline-none focus:border-gray-500"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
