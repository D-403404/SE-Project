import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import HomeKit from "./data/HomeKit";
import AwayKit from "./data/AwayKit";
import ThirdKit from "./data/ThirdKit";

export default function ShopMain() {
  return (
    <div className="h-[1537px] /w-[1280px]">
      <Navbar />
      <div className="h-[60.09px]"></div>
      <KitSlider title="HOME KIT" itemList={HomeKit} />
      <KitSlider title="AWAY KIT" itemList={AwayKit} />
      <KitSlider title="THIRD KIT" itemList={ThirdKit} />
    </div>
  );
}

function KitSlider({ title, itemList }) {
  return (
    <div className="flex flex-col /flex-wrap content-center justify-center mt-[50px]">
      <div className="text-[64px] font-black ml-[22px]">
        {title}
        <div className="h-[12px] w-[383px] bg-primary"></div>
      </div>
      <div className="h-[340px] overflow-auto">
        <div className="min-w-[1349px] h-full flex /flex-wrap justify-around items-center /mt-[50px]">
          {itemList.slice(0, 3).map((item) => (
            <button
              key={item.id}
              className="h-[240px] w-[192.51px] shadow hover:shadow-xl transform hover:scale-110 active:mt-[5px] active:shadow"
            >
              <img src={item.image} alt="itemImage" />
              <div className="flex flex-col justify-between items-start h-[52.03px] w-full pl-[10px] pr-[10px] absolute bottom-0 bg-black bg-opacity-20 active:mt-[5px]">
                <div className="text-[18px] font-bold text-white group-hover">
                  {item.name}
                </div>
                <div className="text-[15px] text-white">${item.price}</div>
              </div>
            </button>
          ))}
          {itemList.slice(3, 4).map((item) => (
            <button
              key={item.id}
              className="h-[240px] w-[192.51px] shadow hover:shadow-xl transform hover:scale-110 active:mt-[5px] active:shadow"
            >
              <img src={item.image} alt="itemImage"></img>
              <div className="flex flex-col justify-between items-start h-[52.03px] w-full pl-[10px] pr-[10px] absolute bottom-0 bg-black bg-opacity-20 active:mt-[5px]">
                <div className="text-[18px] font-bold text-white group-hover">
                  {item.name}
                </div>
                <div className="text-[15px] text-white">${item.price}</div>
              </div>
              <div className="flex justify-center items-center h-[240px] w-[192.51px] text-[20px] font-bold text-white absolute right-0 top-0 bg-black bg-opacity-40">
                SEE ALL {">>"}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

KitSlider.propTypes = {
  title: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
};
