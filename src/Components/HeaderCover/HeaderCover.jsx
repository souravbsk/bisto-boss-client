import React from "react";

const HeaderCover = ({ title, pera, img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="hero bg-[url(img)]  "
    >
      <div className="container">
        <div className=" py-28 mb-28 mt-48 bg-[#151515c1]">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-medium uppercase">{title}</h1>
              <p className="mb-5">{pera}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCover;
