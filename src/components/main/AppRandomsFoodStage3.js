import { AppContext } from "./AppObjectConfig";
import { useContext } from "react";

function AppRandomsFoodStage3() {
  const { nameFood, descriptionFood, kcalFood, flagFood } =
    useContext(AppContext);

  return (
    <div>
      <div className="space-y-10 max-2xl:space-y-8 max-sm:space-y-5">
        <div className="flex w-[30rem] items-center gap-x-4 max-sm:h-[7rem] max-sm:w-[18rem]">
          <h1 className="font-Righteous text-4xl text-blue-950">{`${nameFood}`}</h1>
          <img src={`${flagFood}`} alt="Bandeira do país" />
        </div>
        <p className="h-60 font-Poppins text-3xl font-light text-white max-2xl:h-52 max-2xl:text-2xl max-sm:h-[20rem]">
          {descriptionFood}
        </p>
        <div className="flex items-center space-x-3 font-SuperBoys text-3xl text-blue-950">
          <img
            src="images\randomsfood\app\icon\caloria.png"
            alt="Símbolo da kcal"
          />
          <p>{kcalFood}</p>
        </div>
      </div>
    </div>
  );
}

export default AppRandomsFoodStage3;
