import {
  faAddressCard,
  faHome,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-around items-center p-2 bg-gray-200 absolute z-10 w-full shadow-md top-0">
      <Link to="/">
        <div className="flex flex-col justify-items-center items-center">
          <FontAwesomeIcon icon={faHome} className=" text-black" />
          <span className=" text-xs text-black">Home</span>
        </div>{" "}
      </Link>
      {/*이거는 홈*/}
      <div className="flex flex-col items-center justify-items-center">
        <FontAwesomeIcon icon={faWrench} className="text-black" />
        <span className="text-xs text-black">My work</span>
      </div>{" "}
      {/*이거는 포트폴리오 정리*/}
      <div className="flex flex-col justify-items-center items-center">
        <FontAwesomeIcon icon={faAddressCard} className="text-black" />
        <span className="text-xs text-black">Contact</span>
      </div>{" "}
      {/*이거는 컨택트*/}
    </header>
  );
};
