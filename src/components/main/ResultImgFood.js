import BgBorderFood from "../UI/animations/BgBorderFood";
import React, { useContext } from "react";
import { AppContext } from "./AppObjectConfig";

function ResultImgFood() {
  const { srcFood, nameFood } = useContext(AppContext);

  return (
    <div className="flex w-[24rem] flex-col justify-center">
      <div className="flex items-center justify-center">
        <BgBorderFood>
          <div className="max-sm:w-68 max-sm:h-68 absolute mt-[-9rem] h-80 w-80 rounded-full border-6 border-red-400 max-2xl:h-56 max-2xl:w-56"></div>
        </BgBorderFood>
        <BgBorderFood>
          <div className="max-sm:w-68 max-sm:h-68 absolute ml-3 mt-[-9rem] h-80 w-80 rounded-full border-6 border-violet-500 max-2xl:h-56 max-2xl:w-56"></div>
        </BgBorderFood>
        <BgBorderFood>
          <div className="max-sm:w-68 max-sm:h-68 h-80 w-80 rounded-full border-6 border-pink-300 max-2xl:h-56 max-2xl:w-56"></div>
        </BgBorderFood>
        <img
          className="absolute w-52 drop-shadow-2xl max-2xl:mb-10 max-2xl:w-36"
          src={`${srcFood}`}
          alt="Imagem da comida"
        ></img>
      </div>
      <h1 className="mt-8 h-20 text-center font-SuperBoys text-6xl text-blue-950 max-2xl:text-4xl  max-sm:hidden">
        {nameFood}
      </h1>
    </div>
  );
}

export default ResultImgFood;
