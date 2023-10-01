import BgBorderFood from "../UI/animations/BgBorderFood";
import React, { useContext} from "react";
import { AppContext } from "./AppObjectConfig";

function ResultImgFood() {
    
  const { srcFood, nameFood } = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center w-[24rem]">
      <div className="flex justify-center items-center">
        <BgBorderFood>
          <div className="absolute w-80 h-80 border-6 border-red-400 rounded-full mt-[-9rem] max-2xl:w-56 max-2xl:h-56 max-sm:w-68 max-sm:h-68"></div>
        </BgBorderFood>
        <BgBorderFood>
          <div className="absolute w-80 h-80 border-6 border-violet-500 rounded-full ml-3 mt-[-9rem] max-2xl:w-56 max-2xl:h-56 max-sm:w-68 max-sm:h-68"></div>
        </BgBorderFood>
        <BgBorderFood>
          <div className="w-80 h-80 border-6 border-pink-300 rounded-full max-2xl:w-56 max-2xl:h-56 max-sm:w-68 max-sm:h-68"></div>
        </BgBorderFood>
        <img className="absolute w-52 drop-shadow-2xl max-2xl:w-36 max-2xl:mb-10" src={srcFood} alt='Imagem da comida'></img>
      </div>
      <h1 className="font-SuperBoys text-6xl text-center text-blue-950 h-20 mt-8 max-2xl:text-4xl  max-sm:hidden">{nameFood}</h1>
    </div>
  );
}

export default ResultImgFood;