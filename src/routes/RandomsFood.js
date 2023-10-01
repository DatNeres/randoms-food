import "../App.css";
import React, { useContext } from "react";
import { AppContext } from "../components/main/AppObjectConfig";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

function RandomsFood() {
  const {
    containerImg,
    BgAnimation,
    step,
    isVisible,
    BackButton,
    nextButtonDisabled,
    backButtonDisabled,
    NextButton,
    Replay,
    foodNameBtn,
  } = useContext(AppContext);

  return (
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
                      cursor: backButtonDisabled ? "not-allowed" : "pointer",
                    }}
                  >
                    <span class="material-symbols-outlined">chevron_left</span>
                  </button>
                </div>
              )}
              <div className="h-[3rem] w-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-400 drop-shadow-custom1">
                <button
                  className="app__button--next material-symbols-outlined drop-shadow-xl"
                  onClick={() => {
                    NextButton();
                    Replay();
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
  );
}

export default RandomsFood;
