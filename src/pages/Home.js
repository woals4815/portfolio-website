import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSpring, animated } from "react-spring";
import { MyInfo } from "../components/MyInfo";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const props = useSpring({
    opacity: 1,
    delay: 700,
    reset: !isLoading,
    transform: "translateX(0px)",
    from: {
      opacity: 0,
      transform: "translateX(-250px)",
    },
  });
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return isLoading ? (
    <div className="flex h-full w-full justify-center items-center">
      <span>Loading...</span>
    </div>
  ) : (
    <>
      <animated.div
        style={props}
        className="max-w-full px-3 pt-20 h-screen flex-col justify-between bg-gray-100"
      >
        <Helmet>
          <title>Jayden's room</title>
        </Helmet>
        <div className=" bg-blue-100 p-3 rounded-sm flex justify-around shadow-xl mb-10">
          <img
            src="https://vicion-food.s3.ap-northeast-2.amazonaws.com/1617342019095IMG_0727.JPG"
            alt="MyPicture"
            className=" md:w-28 h-36 max-w-xs shadow-lg rounded-xl"
          />
          <div className="w-1/2 px-3 flex justify-center items-center">
            <span className=" md:text-4xl  font-mono font-thin">
              Hello! This is Jayden's room 🏠
            </span>
          </div>
        </div>
        <div className="flex justify-center py-4 animate-bounce">
          <span className=" text-xl md:text-2xl bg-blue-100 px-8 py-4 rounded-xl shadow-lg font-mono">
            Who am I?
          </span>
          <span className="absolute -bottom-20 text-4xl">👇</span>
        </div>
      </animated.div>
      <animated.div className="max-w-full px-3 h-screen flex-col justify-around bg-gray-100">
        <MyInfo />
      </animated.div>
    </>
  );
};
