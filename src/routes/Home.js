import "../../src/App.css";
import React from "react";
import TittleRandomsFood from "../components/main/TittleRandomsFood";
import ContentsAnimation from "../components/UI/animations/ContentsAnimation";
import Burguer from "../components/main/Burguer";
import { Link } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

function Home() {
  return (
    <>
      <Header />
      <main className="grid h-screen grid-cols-2 grid-rows-1 justify-items-center max-md:grid-cols-1 max-md:grid-rows-2">
        <div className="col-start-1 row-start-1 flex flex-col content-center items-center justify-center max-md:row-start-2">
          <TittleRandomsFood />
          <ContentsAnimation classNames="flex flex-col col-start-1 row-start-1 items-center justify-center max-2xl:mr-14 max-md:mr-0">
            <p className="mt-10 font-Poppins text-[1.65rem] font-medium  text-blue-950 drop-shadow-smwhite max-2xl:text-[1.4rem] max-lg:text-[1.2rem] ">
              O que a gente vai pedir hoje ? <br />
              O app escolhe de forma divertida <br />
              um tipo de comida para você.
            </p>
            <div className="flex-row space-x-10 max-sm:pb-10">
              <button className="main__button--play">
                <Link to="/app">Play Me</Link>
              </button>
              <button className="main__button--about">
                <a
                  href="https://silvioneres.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Me
                </a>
              </button>
            </div>
          </ContentsAnimation>
        </div>
        <Burguer />
      </main>
      <Footer />
    </>
  );
}

export default Home;
