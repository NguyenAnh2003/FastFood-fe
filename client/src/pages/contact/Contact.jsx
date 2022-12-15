import React, { useState } from 'react';
import contactConst from './Constant';
import axios from 'axios';
import PopUpValidate from '../../components/popup/PopUpValidate';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notify, setNotify] = useState('');
  const [alert, setAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const props = {
    isOpen,
    setIsOpen,
    notify,
    alert,
  };

  const user = [
    {
      state: name,
      setState: setName,
      placeholder: 'Name',
      type: 'text',
    },
    {
      state: email,
      setState: setEmail,
      placeholder: 'Email',
      type: 'email',
    },
    {
      state: phone,
      setState: setPhone,
      placeholder: 'Phone Number',
      type: 'text',
    },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        '/api/user/contact',
        {
          name,
          email,
        }
      );
      if (data) {
        setAlert(false);
        setNotify('Please Check your email');
        setIsOpen(true);
      }
    } catch (error) {
      setAlert(true);
      setNotify('Have Some issue');
      setIsOpen(true);
      console.log(error);
    }
  };

  return (
    <div>
      <div class="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded">
                <h1 class="text-4xl sm:text-5xl text-[#f97316] dark:text-white font-lob font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>
                <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <div class="space-y-4">
                    {contactConst.map((item, index) => (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a key={index}>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          class="w-8 h-8 mb-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d={item.dPath}
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                  <div class="w-32 space-y-4 mb-6">
                    {contactConst.map((item, index) => (
                      <div
                        class="ml-5 font-semibold w-40"
                        key={index}
                      >
                        {item.infor}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <form
                class="p-6 flex flex-col justify-center"
                onSubmit={submitHandler}
              >
                {user.map((item) => (
                  <div class="flex flex-col">
                    <input
                      type={item.type}
                      required
                      name={item.state}
                      id={item.state}
                      value={item.state}
                      onChange={(e) =>
                        item.setState(e.target.value)
                      }
                      placeholder={item.placeholder}
                      class="w-100 mt-2 py-3 px-3 rounded bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                ))}

                <button type="submit" className="btn-3D">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <PopUpValidate {...props} />
    </div>
  );
}
