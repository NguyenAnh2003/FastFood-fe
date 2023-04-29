import React, { useRef} from 'react';
import createContact from '../libs/apis/createContact';

export default function Contact() {
  const name = useRef('');
  const email = useRef('');
  const phone = useRef('');

  const user = [
    {
      ref: name,
      placeholder: 'Name',
      type: 'text',
    },
    {
      ref: email,
      placeholder: 'Email',
      type: 'email',
    },
    {
      ref: phone,
      placeholder: 'Phone Number',
      type: 'tel',
    },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    const object = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
    };
    console.log('from useRef', object);
    // call contact API
    const res = await createContact(
      name.current.value,
      email.current.value,
      phone.current.value
    );
    console.log(res);
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
              </div>
              <form
                class="p-6 flex flex-col justify-center"
                onSubmit={submitHandler}
              >
                {user.map((item) => (
                  <div class="flex flex-col">
                    <input
                      ref={item.ref}
                      type={item.type}
                      required
                      placeholder={item.placeholder}
                      class="w-100 mt-2 py-3 px-3 rounded bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-40 h-12 text-32 mt-6 btn-3D"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
