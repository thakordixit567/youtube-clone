import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./Leftnavmenuitem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextAPI";

const Leftnav = () => {
  const {selectCatogoies, setsetselectCatogoies, mobileMenu } =
    useContext(Context);

    const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setsetselectCatogoies(name);
      case "home":
        return setsetselectCatogoies(name);
      case "menu":
        return false;

      default:
        break;
    }
  };
  return (
    <div
      className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10
       translate-x-[-240px] md:translate-x-0 transition-all"
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectCatogoies === item.name ? "bg-white/[0.15]" : ""
                }`}
              />

              {item.divider && <hr className="my-5 border-white/[0.5]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.5]" />
        <div className="text-white/[0.5] text-[12px]">
          Create By: Dixit Code
        </div>
      </div>
    </div>
  );
};

export default Leftnav;
