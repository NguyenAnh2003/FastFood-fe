import React from "react";

const footerElements = {
  linkElement: [
    {
      title: "Thông Tin",
      link1: "Tin tức",
      link2: "Khuyến mãi",
      link3: "Tuyển dụng",
      link4: "Nhượng quyền",
    },
    {
      title: "Hỗ Trợ",
      link1: "Điều khoản sử dụng",
      link2: "Chính sách bảo mật",
      link3: "Chính sách giao hàng",
      link4: "Chăm sóc khách hàng",
    },
    {
      title: "Địa Chỉ",
      link1: "112 Phan Đăng Lưu, Quân Hải Châu, Đà Nẵng",
      link2: "(028) 39309168",
      link3: "expfeedback@exmaple.com.vn",
      link4: "0303883266",
    },
  ],
};

export default function Footer() {
  return (
    <div className="text-center text-black mt-10">
      <div className="xl:container px-6 pt-6 bg-[#ffeae3] pb-6">
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
