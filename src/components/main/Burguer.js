import BurguerAnimations from "../UI/animations/BurguerAnimations";
export default function Burguer() {
  return (
    <div className="col-start-2 row-start-1 flex flex-col items-center justify-center max-2xl:mr-32 max-lg:mr-28 max-md:col-start-1 max-md:row-start-1 max-md:mr-0">
      <BurguerAnimations
        className="absolute z-50 col-span-2 mt-[-30rem] w-[26rem] drop-shadow-xl max-2xl:mt-[-20rem] max-2xl:w-[18rem] max-lg:mt-[-14rem] max-lg:w-[12rem]"
        src="images/randomsFood/pao_cima.png"
        alt="Pão do hamburguer"
      />
      <BurguerAnimations
        className="absolute z-40 col-span-2 mt-[-.5rem] w-[26rem] drop-shadow-xl max-2xl:w-[18rem] max-lg:w-[12rem]"
        src="images/randomsFood/queijo.png"
        alt="Queijo do hamburguer"
      />
      <BurguerAnimations
        className="absolute z-30 col-span-2 mr-14 mt-[20rem] w-[22rem] drop-shadow-2xl max-2xl:mt-[16rem] max-2xl:w-[14rem] max-lg:mt-[10rem] max-lg:w-[8rem]"
        src="images/randomsFood/carne.png"
        alt="Carne do hamburguer"
      />
      <BurguerAnimations
        className="absolute z-30 col-span-2 mt-[36rem] w-[26rem] drop-shadow-2xl max-2xl:mt-[28rem] max-2xl:w-[18rem] max-lg:mt-[18rem] max-lg:w-[12rem]"
        src="images/randomsFood/pao_baixo.png"
        alt="Pão do hamburguer"
      />
      <BurguerAnimations
        className="absolute z-30 col-span-2 ml-[24rem] mt-[-13rem] w-[12rem] drop-shadow-sm max-2xl:ml-[20rem] max-2xl:mt-[-8rem] max-2xl:w-[6rem] max-lg:ml-[16rem] max-lg:mt-[-10rem] max-lg:w-[4rem]"
        src="images/randomsFood/cebola.png"
        alt="Cebola do hamburguer"
        rotateValue="0"
      />
      <BurguerAnimations
        className="absolute z-30 col-span-2 ml-[-26rem] mt-[-16rem] w-[12rem] rotate-[40deg] drop-shadow-sm max-2xl:ml-[-20rem] max-2xl:mt-[-10rem] max-2xl:w-[10rem] max-lg:ml-[-16rem] max-lg:mt-[-10rem] max-lg:w-[4rem]"
        src="images/randomsFood/cebola.png"
        rotateValue="40deg"
        alt="Cebola do hamburguer"
      />
      <BurguerAnimations
        className="absolute z-20 col-span-2 ml-[8rem] mt-[-6rem] w-[12rem] drop-shadow-sm max-2xl:w-[8rem] max-lg:mt-[-3rem] max-lg:w-[6rem]"
        src="images/randomsFood/tomate.png"
        rotateValue="12deg"
        alt="Tomate do hamburguer"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 ml-[-24rem] mt-[1rem] w-[14rem] drop-shadow-sm max-2xl:ml-[-20rem] max-2xl:w-[10rem] max-lg:ml-[-14rem] max-lg:w-[7rem]"
        src="images/randomsFood/tomate.png"
        alt="Tomate do hamburguer"
        rotateValue="-40deg"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 mr-[36rem] mt-[30rem] w-[2rem] drop-shadow-sm max-2xl:mr-[24rem] max-2xl:mt-[24rem] max-lg:mr-[20rem] max-lg:mt-[20rem]"
        src="images/randomsFood/respingo_queijo.png"
        alt="Respingo de queijo"
        rotateValue="60deg"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 ml-[36rem] mt-[6rem] w-[4rem] drop-shadow-sm max-2xl:ml-[30rem] max-2xl:w-[3rem] max-lg:ml-[20rem] max-lg:w-[2rem]"
        src="images/randomsFood/respingo_queijo.png"
        rotateValue="60deg"
        alt="Respingo de queijo"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 mb-[12rem] ml-[8rem] w-[1.5rem] drop-shadow-sm2 max-2xl:mb-[5rem] max-2xl:ml-[4rem] max-2xl:w-[1rem]"
        src="images/randomsFood/respingo_queijo.png"
        rotateValue="60deg"
        alt="Respingo de queijo"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 mb-[14rem] ml-[1rem] w-[2rem] drop-shadow-sm2 max-2xl:mb-[2rem] max-2xl:w-[1rem]"
        src="images/randomsFood/respingo_queijo.png"
        alt="Respingo de queijo"
        rotateValue="-10deg"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 mb-[44rem] ml-[38rem] w-[3rem] drop-shadow-sm2 max-2xl:mb-[32rem] max-2xl:ml-[32rem] max-lg:mb-[18rem] max-lg:ml-[18rem] max-lg:w-[3rem]"
        src="images/randomsFood/destaque.png"
        alt="Destaque superior direito"
        rotateValue="75deg"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 mb-[48rem] mr-[30rem] w-[3rem] drop-shadow-sm2 max-2xl:mb-[32rem] max-lg:mb-[18rem] max-lg:mr-[20rem] max-lg:w-[3rem]"
        src="images/randomsFood/destaque.png"
        alt="Destaque superior esquerdo"
        rotateValue="-45deg"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 mr-[30rem] mt-[46rem] w-[3rem] drop-shadow-sm2 max-2xl:mt-[40rem] max-lg:mr-[14rem] max-lg:mt-[24rem] max-lg:w-[3rem] "
        src="images/randomsFood/destaque.png"
        alt="Destaque inferior esquerdo"
        rotateValue="-120deg"
      />
      <BurguerAnimations
        className="absolute z-50 col-span-2 ml-[34rem] mt-[32rem] w-[3.5rem] drop-shadow-sm2 max-lg:ml-[20rem] max-lg:mt-[22rem] max-lg:w-[3rem]"
        src="images/randomsFood/destaque.png"
        alt="Destaque inferior direito"
        rotateValue="110deg"
      />
    </div>
  );
}
