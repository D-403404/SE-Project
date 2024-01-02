import React from "react";
import Navbar from "../Navbar";
import Breadcrumb from "../Breadcrumb";
import ShirtImg from "/src/assets/shirt_placeholder.png";
import PropTypes from "prop-types";
import "/src/index.css";

export default function ShopItem({ title, item }) {
  const historyNav = ["Main", title, "Details"];
  const [chosenSize, setSize] = React.useState(item.size[1]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Successfully added to cart!\n" +
        "Size: " +
        chosenSize +
        "\n" +
        "Price: $" +
        item.price
    );
  };
  return (
    <div className="">
      <Navbar />
      <div className="h-[60.09px]"></div>
      <Breadcrumb history={historyNav} />
      <div className="flex justify-between items-center h-[24vw] max-h-[315px] pl-[10vw] pr-[10vw] mt-[2vw]">
        <div className="flex justify-center items-center aspect-square h-full">
          <img src={ShirtImg} alt="Shirt Image" />
        </div>

        <form
          className="flex flex-col justify-around shadow-xl h-full /border-4"
          onSubmit={handleSubmit}
        >
          <div className="text-[2.5vw] font-bold">CHOOSE YOUR SIZE</div>
          <select
            className="aspect-[8/1] w-[38vw] ml-[3vw] mr-[3vw] border-4 border-red-600 rounded-3xl text-[2vw] font-bold"
            value={chosenSize}
            onChange={(e) => {
              setSize(e.target.value);
              console.log(e.target.value);
            }}
          >
            {item.size.map((itemSize) => (
              <option key={itemSize} value={itemSize}>
                {itemSize}
              </option>
            ))}
          </select>
          <div className="flex flex-col items-center">
            <button
              className="w-[38vw] border text-white bg-primary text-[2vw] font-black p-3 rounded-lg hover:bg-red-700"
              type="submit"
            >
              ADD TO CART ${item.price}
            </button>
          </div>
        </form>
      </div>
      <div className="p-[3vw]">
        <div className="flex flex-col justify-center items-center text-4xl font-bold">
          DESCRIPTION
          <div className="aspect-[12/1] h-[21px] bg-primary"></div>
        </div>
        <div className="text-justify text-xl mt-[2vw]">
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            commodo lectus. In tempor metus sem. Nulla facilisi. Praesent a
            libero leo. Donec sed pharetra augue, non cursus augue. Phasellus
            non nunc volutpat, viverra urna eget, hendrerit lacus. Proin sit
            amet facilisis ipsum. Etiam aliquam accumsan ligula, egestas mollis
            nibh laoreet auctor.
          </p>
          <p>
            Nam accumsan nibh nec commodo sagittis. Curabitur at neque aliquam,
            sodales risus ut, ornare urna. Phasellus ac ligula mollis, maximus
            erat vel, pretium ante. Donec iaculis tincidunt leo, in ullamcorper
            augue pulvinar in. Maecenas blandit scelerisque sapien. Proin
            ultricies ligula odio, sit amet convallis tellus hendrerit non.
            Maecenas commodo, arcu quis euismod pharetra, arcu sem egestas enim,
            nec euismod purus dolor vel nibh. Proin nibh erat, aliquet a ligula
            in, consectetur finibus lectus. Vestibulum a varius nisl.
          </p>
          <ul className="list-disc ml-[30px]">
            <li>cnjfnjksfnj njcn jaksdn jnkdc</li>
            <li>s cjks jnkjnd a kjncaksdc kja dc</li>
          </ul>
          <p>
            cnjsndc cdjnajksndc jnsckjn a kjdnckjand kjcnasjknck kjncjkdnaksj
            ckjnajkdnc
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: item.article }} />
        </div>
      </div>
    </div>
  );
}

ShopItem.propTypes = {
  title: PropTypes.string,
  item: PropTypes.object,
};
