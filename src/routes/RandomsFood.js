import "../App.css";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../components/main/AppObjectConfig";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import AppRandomsFoodStage1 from "../components/main/AppRandomsFoodStage1";
import AppRandomsFoodStage2 from "../components/main/AppRandomsFoodStage2";
import AppRandomsFoodStage3 from "../components/main/AppRandomsFoodStage3";

function RandomsFood() {
  const {
    containerImg,
    BgAnimation,
    foods,
    step,
    isVisible,
    BackButton,
    nextButtonDisabled,
    backButtonDisabled,
    NextButton,
    Replay,
    foodNameBtn,
  } = useContext(AppContext);

  const [foodsLoaded, setFoodsLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = foods.map((food) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = food.srcFood;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    Promise.all([
      Promise.all(imagePromises),
      AppRandomsFoodStage1,
      AppRandomsFoodStage2,
      AppRandomsFoodStage3,
    ])
      .then(() => {
        setFoodsLoaded(true);
      })
      .catch(() => {
        console.error("Erro ao carregar as imagens");
      });
  }, []);

  const scrollToTop = () => {
    if (step.type === AppRandomsFoodStage3)
      setTimeout(() => {
        window.scrollTo({
          top: 0,
        });
      }, 100);
  };
  useEffect(() => {
    scrollToTop();
  }, [step.type === AppRandomsFoodStage3]);

  return (
    <>
      {foodsLoaded ? (
        <div>
          <Header />
          <main className="flex h-[calc(100vh-6rem)] w-full items-center justify-evenly max-lg:mt-20 max-lg:h-full max-lg:flex-col">
            <div className="">{containerImg}</div>
            <div className="relative max-lg:mt-28 max-sm:mt-20">
              <BgAnimation className="absolute left-[-2rem] top-[-2rem] h-[30vw] w-[40vw] rounded-3xl bg-red-400 drop-shadow-custom1 max-sm:left-[-1rem] max-sm:top-[-1rem] max-sm:h-[70vw] max-sm:w-[70vw]" />
              <div className="flex h-[46rem] w-[60rem] flex-col items-center justify-center rounded-3xl bg-red-300 px-20 drop-shadow-custom1 max-2xl:h-[36rem] max-2xl:w-[40rem] max-2xl:px-10 max-lg:h-[48rem] max-md:w-[32rem] max-sm:h-[46rem] max-sm:w-[21rem] max-sm:p-5">
                {step}
                <div className="mt-20 flex flex-row space-x-2 self-end">
                  {isVisible && (
                    <div className="h-[3rem] w-auto rounded-full bg-gradient-to-r from-pink-400 to-red-400 drop-shadow-custom1">
                      <button
                        className="app__button--back drop-shadow-xl"
                        onClick={BackButton}
                        disabled={backButtonDisabled}
                        style={{
                          cursor: backButtonDisabled
                            ? "not-allowed"
                            : "pointer",
                        }}
                      >
                        <span class="material-symbols-outlined">
                          chevron_left
                        </span>
                      </button>
                    </div>
                  )}
                  <div className="h-[3rem] w-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-400 drop-shadow-custom1">
                    <button
                      className="app__button--next material-symbols-outlined drop-shadow-xl"
                      onClick={() => {
                        NextButton();
                        Replay();
                        scrollToTop();
                      }}
                      disabled={nextButtonDisabled}
                      style={{
                        cursor: nextButtonDisabled ? "not-allowed" : "pointer",
                      }}
                    >
                      {foodNameBtn}
                      <span className="material-symbols-outlined  left-1 top-1"></span>
                    </button>
                  </div>
                </div>
              </div>
              <BgAnimation className="absolute bottom-[-2rem] right-[-2rem] z-[-1] h-[30vw] w-[40vw] rounded-3xl bg-violet-500 drop-shadow-custom1 max-sm:bottom-[-1rem] max-sm:right-[-1rem] max-sm:h-[70vw] max-sm:w-[70vw]" />
            </div>
          </main>
          <Footer />
        </div>
      ) : (
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="flex flex-row gap-2">
            <div className="h-6 w-6 animate-bounce rounded-full bg-violet-500"></div>
            <div className="h-6 w-6 animate-bounce rounded-full bg-violet-500 [animation-delay:-.3s]"></div>
            <div className="h-6 w-6 animate-bounce rounded-full bg-violet-500 [animation-delay:-.5s]"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default RandomsFood;
