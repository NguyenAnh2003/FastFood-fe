import React from 'react';
import contactConst from './Constant';
export default function Contact() {
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
                      <a>
                        <svg
                          key={index}
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
                      <div class="ml-5 font-semibold w-40">
                        {item.infor}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <form class="p-6 flex flex-col justify-center">
                <div class="flex flex-col">
                  <label for="name" class="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Name"
                    class="w-100 mt-2 py-3 px-3 rounded bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>

                <div class="flex flex-col mt-2">
                  <label for="email" class="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    class="w-100 mt-2 py-3 px-3 rounded bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>

                <div class="flex flex-col mt-2">
                  <label for="tel" class="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Phone number"
                    class="w-100 mt-2 py-3 px-3 rounded bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  ></input>
                </div>

                <button
                  type="submit"
                  class="md:w-32 bg-[#f97316] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded mt-3 hover:bg-[#475569] transition ease-in-out duration-300"
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
