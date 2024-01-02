import React from "react";
import Navbar from "./Navbar";
import bgImg from "../assets/background_title.png";
import PropTypes from "prop-types";
import Breadcrumb from "./Breadcrumb";

export default function ShopCategory({ title, itemList }) {
  const historyNav = ["Main", title];
  return (
    <div className="/h-[1537px] /w-[1280px] overflow-hidden">
      <Navbar />
      <div className="h-[60.09px]"></div>
      <div className="/h-[20vh] w-full /overflow-hidden relative">
        <img src={bgImg} className="h-full w-full" alt="Shop Background" />
        <div className="flex flex-col items-end absolute bottom-0 /left-[22px] pl-[22px] text-[5vw] text-white font-black z-10 /drop-shadow-2xl bg-black bg-opacity-70">
          {title.toUpperCase()}
          {/* HOME KIT */}
          <div className="aspect-[25/1] w-[28vw] bg-primary"></div>
        </div>
      </div>
      <Breadcrumb history={historyNav} />
      {/* <div className="flex /justify-center /w-[100vw] /ml-[2vw] /mr-[2vw]"> */}
      <div className="flex flex-wrap justify-center w-[100vw] /w-[90vw] /pt-[3vw] /ml-[5vw] /mr-[5vw] /w-fit overflow-hidden relative">
        <div className="flex flex-wrap w-[96vw] /justify-center ml-[-5vw] mr-[-5vw]">
          {itemList.map((item) => (
            <div className="wrapper" key={item.id}>
              <div className="content">
                <button className="flex /aspect-[4/5] /h-[17.5vw] w-[14vw] mt-[5vw] mb-[5vw] ml-[5vw] mr-[5vw] shadow hover:shadow-xl transform hover:scale-110 active:mt-[6vw] active:mb-[5vw] active:shadow">
                  <img src={item.image} alt="itemImage" />
                  <div className="flex flex-col justify-between items-start h-[22%] w-full pl-[10px] pr-[10px] absolute bottom-0 bg-black bg-opacity-20 active:mt-[5px]">
                    <div className="text-[1.4vw] font-bold text-white group-hover">
                      {item.name}
                    </div>
                    <div className="text-[1.1vw] text-white">${item.price}</div>
                  </div>
                </button>
              </div>
              <div className="divisor"></div>
            </div>
          ))}
        </div>
        <div className="h-[100vw] w-[7vw] absolute top-0 /bottom-0 left-0 bg-white z-30"></div>
        <div className="h-[100vw] w-[7vw] absolute top-0 right-0 bg-white z-30"></div>
        <div className="test"></div>
      </div>
      {/* </div> */}
    </div>
  );
}

ShopCategory.propTypes = {
  title: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
};
