import React from 'react'
import { Link } from 'react-router-dom'
import MailForm from '../mail/MailForm'
import footerElements from './FooterElements.tsx'

export default function Footer() {
  return (
    <div className='text-center text-black'>
      <div className="xl:container px-6 pt-6 bg-[#ffeae3] pb-6">
        <div className="flex justify-center mb-6">
          {footerElements.socialElemnt.map((i, index) => (
            <a href={i.href} key={index} type="button" className={i.className}>
              <svg aria-hidden={i.ariaHidden}
                focusable={i.focusable}
                data-prefix={i.dataPrefix}
                data-icon={i.dataIcon}
                className={i.classNameSVG}
                role={i.role}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={i.viewBox}
              >
                <path
                  fill={i.fill}
                  d={i.d}
                ></path>
              </svg>
            </a>
          ))}
        </div>

        <div>
          <MailForm/>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {footerElements.linkElement.map((i, index) => (
            <div className="mb-6" key={index}>
              <h5 className="uppercase font-bold mb-2.5">{i.title}</h5>
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-gray">{i.link1}</a>
                </li>
                <li>
                  <a href="#!" className="text-gray">{i.link2}</a>
                </li>
                <li>
                  <a href="#!" className="text-gray">{i.link3}</a>
                </li>
                <li>
                  <a href="#!" className="text-gray">{i.link4}</a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center p-4 bg-[#ff9ea2]">
        <span className='font-semibold'>© 2021 Copyright:  </span>
        Tailwind Elements
      </div>
    </div>
  )
}
