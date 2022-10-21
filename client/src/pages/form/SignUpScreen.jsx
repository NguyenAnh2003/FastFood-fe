import React from 'react'
import { Link } from 'react-router-dom';
export default function SignUpScreen() {
  return (
    <div>
       <div className="text-center mt-24">
        <h2 className="text-24 font-bold">
          Get yourself an account now for
         <span className="text-primary-color ml-1">free!</span>
        </h2>
        <span className="text-sm text-14">Already got one?    
        <Link to={'/signin'} href="#" className="text-primary-color font-bold ml-1">
            Sign in
        </Link>
        </span>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <input placeholder='Email' className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none" type='text' required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input placeholder='Password' className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none" type='password' required />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <input placeholder='Confirm' className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded py-3 px-3 leading-tight focus:outline-none" type='password' required />
            </div>
            <div className="w-full flex items-center justify-end px-3 mb-3">
              <div className="w-1/2 text-right">
                <Link to={'/settings'} href="#" className="text-primary-color text-sm tracking-tight">Forgot password?</Link>
              </div>
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button className="appearance-none block w-full bg-primary-color text-white font-bold border border-gray-200 rounded py-3 px-3 leading-tight  focus:outline-none focus:bg-white focus:border-gray-500">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
