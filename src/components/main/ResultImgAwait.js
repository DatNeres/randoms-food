import InterrogationAnimation from "../UI/animations/InterrogationAnimation";
import InterrogationBgAnimation from "../UI/animations/InterrogationBgAnimation";
import TextLoadingAnimation from "../UI/animations/TextLoadingAnimation.js";

function ResultImgAwait() {
  return (
    <div className="flex flex-col items-center justify-center">
      <InterrogationBgAnimation
        className="w-72 drop-shadow-custom1 max-2xl:w-48 max-lg:w-72"
        src="\images\randomsFood\app\interrogacao-bg.png"
        alt="Aguardando seleção do usuário"
      />
      <InterrogationAnimation
        className="absolute mb-[8rem] w-24 drop-shadow-custom1 max-2xl:mb-[6.7rem] max-2xl:w-14 max-lg:mb-[8rem] max-lg:w-24"
        src="\images\randomsFood\app\interrogacao.png"
        alt="Aguardando seleção do usuário"
      />
      <TextLoadingAnimation />
    </div>
  );
}

export default ResultImgAwait;
