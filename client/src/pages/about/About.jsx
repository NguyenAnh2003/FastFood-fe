/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import aboutConst from './Constant';

export default function About() {
  return (
    <div>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold font-lob md:text-6xl">
              Los Pollos Hermanos
            </h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto md:text-3xl font-playf">
              Founded in 2019, Los Pollos Hermanos has
              always be a part of one of Vietnamese
              best-known fast food chains
            </p>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
              src="/assets/logo/Los_Pollos_Hermanos_logo.png"
              alt="Logo"
              loading="lazy"
              width="1000"
              height="667"
            ></img>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-2 mt-10">
            {aboutConst.map((item, index) => (
              <div
                className="space-y-4 text-center"
                key={index}
              >
                <img
                  className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src={item.information.image}
                  alt={item.information.name}
                  loading="lazy"
                  width="640"
                  height="805"
                ></img>
                <div>
                  <h4 className="text-2xl">
                    {item.information.name}
                  </h4>
                  <span className="block text-sm text-gray-500">
                    {item.information.role}
                  </span>
                  <div className="mt-2 mb-5 space-x-2">
                    {item.contactLink.map((item, index) => (
                      <a
                        key={index}
                        className="hover:text-primary-color"
                        aria-label={item.ariaLabel}
                        href={item.href}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block"
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
