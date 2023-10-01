import React, { useState, useEffect } from "react";

function TextLoadingAnimation() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots % 3) + 1);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const loadingDots = ".".repeat(dots);

  return (
    <h1 className="mt-10 w-[22rem] font-SuperBoys text-4xl text-blue-950 max-2xl:w-[15rem] max-2xl:text-2xl max-lg:w-[22rem] max-lg:text-4xl">
      Aguardando seleção{loadingDots}
    </h1>
  );
}

export default TextLoadingAnimation;
