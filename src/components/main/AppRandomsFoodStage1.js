import { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppObjectConfig";

function AppRandomsFoodStage1({ selectOptionOne, setSelectOptionOne }) {
  const [foodsLoaded, setFoodsLoaded] = useState(false);
  const { foods } = useContext(AppContext);

  useEffect(() => {
    const imagePromises = foods.map((food) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = food.srcFood;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    Promise.all(imagePromises)
      .then(() => {
        setFoodsLoaded(true);
      })
      .catch(() => {
        console.error("Erro ao carregar imagens");
      });
  }, []);

  const [scale1, setScale1] = useState("");
  const [scale2, setScale2] = useState("");

  const changeScale1 = () => {
    setScale1("scale-110");
    setScale2("");

    setSelectOptionOne("Vegetariano");
  };

  const changeScale2 = () => {
    setScale1("");
    setScale2("scale-110");

    setSelectOptionOne("Carnívoro");
  };

  return (
    <>
      {foodsLoaded ? (
        <div className="text-start">
          <div className="space-y-5 max-sm:space-y-16">
            <h1 className="font-Righteous text-4xl text-blue-950 max-2xl:text-3xl">
              SELECIONE UMA OPÇÃO :
            </h1>
            <p className="font-Poppins text-3xl font-light text-white max-2xl:text-2xl">
              Escolha opções entre pratos com ou sem carnes de origem animal.
            </p>
          </div>
          <div className="mt-16 flex items-center justify-evenly max-2xl:mt-6">
            <img
              className={`w-[14rem] ${scale1} max-2xl:w-[12rem] max-sm:w-[8rem]`}
              src="images/randomsFood/app/option_one_vegetariano.png"
              alt="Opção Vegetariana"
              onClick={changeScale1}
              select={selectOptionOne}
            ></img>
            <img
              className={`w-[14rem] ${scale2} max-2xl:w-[12rem] max-sm:w-[8rem]`}
              src="images/randomsFood/app/option_one_carnivoro.png"
              alt="Opção Carnívora"
              onClick={changeScale2}
              select={selectOptionOne}
            ></img>
          </div>
        </div>
      ) : (
        <div>
          <div className="max-lg:py-49 flex flex-row gap-2 py-60 max-2xl:py-44 max-lg:py-56">
            <div className="h-6 w-6 animate-bounce rounded-full bg-violet-500"></div>
            <div className="h-6 w-6 animate-bounce rounded-full bg-violet-500 [animation-delay:-.3s]"></div>
            <div className="h-6 w-6 animate-bounce rounded-full bg-violet-500 [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppRandomsFoodStage1;
