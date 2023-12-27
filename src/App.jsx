import Login from "./components/Login";
import Register from "./components/Register";
import ShopCategory from "./components/ShopCategory";
import ShopMain from "./components/ShopMain";
import HomeKit from "./components/data/HomeKit";
import ShopItem from "./components/user/ShopItem";

export default function App() {
  return (
    //<h1 className="text-3xl font-bold underline">Red Kingdom</h1>
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ShopMain /> */}
      {/* <ShopCategory title='Home Kit' itemList={HomeKit}/> */}
      <ShopItem title="Home Kit" item={HomeKit[0]} />
    </div>
  );
}
