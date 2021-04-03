import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

export const MyInfo = () => {
  return (
    <div>
      <div>
        <span>graduated from Sogang Univ.</span>
      </div>
      <div className="flex justify-around  h-full items-center">
        <div className="w-full flex justify-center items-center">
          <span className="text-xl px-7 bg-white py-4 rounded-xl shadow-xl font-serif">
            And I can do
          </span>
        </div>
        <div className="flex-col w-full justify-around">
          <ScrollAnimation animateIn="bounceIn">
            <div className="flex justify-center mb-4 lg:justify-around">
              <img
                src="https://vicion-food.s3.amazonaws.com/1617431481183html.png"
                alt="htmlImage"
                className="w-24 h-24 rounded-xl bg-white shadow-xl  md:mr-4"
              />
              <img
                src="https://vicion-food.s3.amazonaws.com/1617431638794nodejs.png"
                alt="nodejs"
                className="w-24 h-24 rounded-xl bg-white shadow-xl md:mr-4"
              />
              <img
                src="https://vicion-food.s3.amazonaws.com/1617431690562typescript.png"
                alt="taypescript"
                className="w-24 h-24 rounded-xl bg-white shadow-xl"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceIn">
            <div className="flex justify-center mb-4 lg:justify-around">
              <img
                src="https://vicion-food.s3.amazonaws.com/1617431747629postreSQL.png"
                alt="postgresql"
                className="w-24 h-24 rounded-xl bg-white shadow-xl  md:mr-4"
              />
              <img
                src="https://vicion-food.s3.amazonaws.com/1617431814475react.jpeg"
                alt="react"
                className="w-24 h-24 rounded-xl bg-white shadow-xl  md:mr-4"
              />
              <img
                src="https://vicion-food.s3.amazonaws.com/1617431892340python.png"
                alt="python"
                className="w-24 h-24 rounded-xl bg-white shadow-xl"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceIn">
            <div className="flex justify-center">
              <img
                src="https://vicion-food.s3.amazonaws.com/1617432055439graphql.png"
                alt="graphql"
                className="w-24 h-24 rounded-xl bg-white shadow-xl"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};
