import { useState } from "react";
import Link from "./Link/Link";
import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { FaShopify } from "react-icons/fa";
const NavBer = () => {
  const [icons, setIcons] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];
  return (
    <div className=" bg-orange-500 relative">
      <nav className="w-11/12 relative mx-auto py-4 text-white px-3 flex flex-row-reverse justify-between items-center">
        <div onClick={() => setIcons(!icons)} className={`md:hidden`}>
          {icons ? (
            <GrClose className="text-2xl text-black" />
          ) : (
            <FiAlignJustify className="text-2xl text-black" />
          )}
        </div>
        <div className="block text-30 md:hidden">
          <ul
            className={`w-[45%] text-xl text-right pr-8 duration-1000 absolute ${
              icons ? "left-[59.5%] " : "-left-80"
            } top-[100%]  bg-black pl-5  shadow-xl z-10`}
          >
            {icons
              ? routes.map((route) => (
                  <Link key={route.id} route={route}></Link>
                ))
              : ""}
          </ul>
        </div>
        <ul className="hidden md:flex gap-4 text-2xl">
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
        <FaShopify className="text-3xl" />
      </nav>
    </div>
  );
};

export default NavBer;
