import React, { useState } from "react";

function AppRandomsFoodStage2({ selectOptionTwo, setSelectOptionTwo }) {
  const [scale1, setScale1] = useState("");
  const [scale2, setScale2] = useState("");
  const [scale3, setScale3] = useState("");

  const changeScale1 = () => {
    setScale1("scale-110");
    setScale2("");
    setScale3("");
    setSelectOptionTwo("Almoço/Jantar");
  };

  const changeScale2 = () => {
    setScale1("");
    setScale2("scale-110");
    setScale3("");
    setSelectOptionTwo("Almoço/Jantar");
  };

  const changeScale3 = () => {
    setScale1("");
    setScale2("");
    setScale3("scale-110");
    setSelectOptionTwo("Lanche");
  };
  return (
    <div className="text-start">
      <div className="space-y-5">
        <h1 className="font-Righteous text-4xl text-blue-950 max-2xl:text-3xl">
          SELECIONE UMA OPÇÃO :
        </h1>
        <p className="font-Poppins text-3xl font-light text-white max-2xl:text-2xl">
          Escolha opções entre comidas para Almoço, Jantar ou lanches.
        </p>
      </div>
      <div className="mt-16 flex flex-wrap items-center justify-evenly gap-y-4 max-2xl:mt-6 max-2xl:justify-between">
        <img
          className={`w-[14rem] ${scale1} max-2xl:w-[11rem] max-sm:w-[8rem]`}
          src="images\randomsFood\app\option_two_almoco.png"
          alt="Opção Vegetariana"
          onClick={changeScale1}
          select={selectOptionTwo}
        ></img>
        <img
          className={`w-[14rem] ${scale2} max-2xl:w-[11rem] max-sm:w-[8rem]`}
          src="images\randomsFood\app\option_two_jantar.png"
          alt="Opção Carnívora"
          onClick={changeScale2}
          select={selectOptionTwo}
        ></img>
        <img
          className={`w-[14rem] ${scale3} max-2xl:w-[11rem] max-sm:w-[8rem]`}
          src="images\randomsFood\app\option_two_lanche.png"
          alt="Opção Vegetariana"
          onClick={changeScale3}
          select={selectOptionTwo}
        ></img>
      </div>
    </div>
  );
}

export default AppRandomsFoodStage2;
