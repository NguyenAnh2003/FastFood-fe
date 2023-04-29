import React, { useEffect, useRef, useState } from 'react';

const contactConst = [
  {
    infor: 'Son Tra distinct, Da Nang city, Vietnam',
    dPath:
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    infor: '+84 905728059',
    dPath:
      'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    infor: 'huylnq.21it@vku.udn.vn',
    dPath:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
];

export default function FormTest() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notify, setNotify] = useState('');
  const [alert, setAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const name2 = useRef('');

  useEffect(() => {
    name2.current.focus();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(name2.current.value);
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
                <input ref={name2} />
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
