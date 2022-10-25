import React from "react";
import { Link } from "react-router-dom";
import MailForm from "../MailForm";
import footerElements from "./FooterElements.js";

export default function Footer() {
  return (
    <div className="text-center text-black mt-10">
      <div className="xl:container px-6 pt-6 bg-[#ffeae3] pb-6">
        <div>
          <MailForm />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          {footerElements.linkElement.map((i, index) => (
            <div className="mb-6" key={index}>
              <h5 className="uppercase font-bold mb-2.5">{i.title}</h5>
              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-gray">
                    {i.link1}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray">
                    {i.link2}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray">
                    {i.link3}
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-gray">
                    {i.link4}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center p-4 bg-[#ff9ea2]">
        <span className="font-semibold">© 2021 Copyright: </span>
        Tailwind Elements
      </div>
    </div>
  );
}
