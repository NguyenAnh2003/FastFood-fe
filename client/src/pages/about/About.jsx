/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import aboutConst from './Constant';

export default function About() {
  return (
    <div>
      <div class="py-20 bg-gray-50">
        <div class="container mx-auto px-6 md:px-12 xl:px-32">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold font-lob md:text-6xl">
              Los Pollos Hermanos
            </h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto md:text-3xl font-playf">
              Founded in 2019, Los Pollos Hermanos has
              always be a part of one of Vietnamese
              best-known fast food chains
            </p>
          </div>
          <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
              <img
                class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="/assets/profile/p2.jpeg"
                alt="Huy"
                loading="lazy"
                width="640"
                height="805"
              ></img>
              <div>
                <h4 class="text-2xl">Huy Le</h4>
                <span class="block text-sm text-gray-500">
                  CEO-Founder
                </span>
                <div class="mt-2 mb-5 space-x-2">
                  {aboutConst.map((item, index) => (
                    <a
                      class="hover:text-primary-color"
                      aria-label={item.ariaLabel}
                      href={item.href}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d={item.dPath}
                        ></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div class="space-y-4 text-center">
              <img
                class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src="/assets/logo/Los_Pollos_Hermanos_logo.png"
                alt="Logo"
                loading="lazy"
                width="1000"
                height="667"
              ></img>
            </div>
            <div class="space-y-4 text-center">
              <img
                class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="/assets/profile/p1.jpeg"
                alt="NA"
                loading="lazy"
                width="1000"
                height="667"
              ></img>
              <div>
                <h4 class="text-2xl">Nguyen Anh Tran </h4>
                <span class="block text-sm text-gray-500">
                  Project chief
                </span>
                <div class="mt-2 mb-5 space-x-2">
                  {aboutConst.map((item, index) => (
                    <a
                      class="hover:text-primary-color"
                      aria-label={item.ariaLabel}
                      href={item.href}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-block"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d={item.dPath}
                        ></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
