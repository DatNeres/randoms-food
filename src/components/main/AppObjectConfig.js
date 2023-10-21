import React, { useState, useEffect } from "react";
import AppRandomsFoodStage1 from "./AppRandomsFoodStage1.js";
import AppRandomsFoodStage2 from "./AppRandomsFoodStage2.js";
import AppRandomsFoodStage3 from "./AppRandomsFoodStage3.js";
import BgAnimation from "../UI/animations/BgAnimation.js";
import ResultImgAwait from "./ResultImgAwait.js";
import ResultImgFood from "./ResultImgFood.js";
import { createContext } from "react";

export const AppContext = createContext("");
function AppObjectConfig({ children }) {
  function Food(name, ocasion, description, kcal, option, srcCountry, srcFood) {
    this.name = name;
    this.ocasion = ocasion;
    this.description = description;
    this.kcal = kcal;
    this.option = option;
    this.srcCountry = srcCountry;
    this.srcFood = srcFood;
  }

  const food1 = new Food(
    "Almoço Tradicional Brasileiro",
    "Almoço/Jantar",
    "Este prato consiste em arroz branco, feijão preto, carne grelhada (que para vegetarianos pode ser substituída) e uma salada fresca com alface, tomate e cebola, regada com um molho delicioso.",
    800,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/brasil.png",
    "images/randomsFood/app/food/arroz-feijao.png",
  );

  const food2 = new Food(
    "Arroz Chinês",
    "Almoço/Jantar",
    "Um prato de arroz Oriental autêntico, preparado com grãos de arroz cozidos no vapor, vegetais crocantes, pedaços de frango e camarão, tudo temperado com molho de soja e gengibre.",
    500,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/china.png",
    "images/randomsFood/app/food/arroz-oriental.png",
  );

  const food3 = new Food(
    "Dim Sum",
    "Lanche",
    "Dim Sum é uma tradição chinesa de pequenos pratos servidos como lanche. Inclui uma variedade de deliciosos bolinhos recheados, rolinhos primavera e dumplings cozidos a vapor.",
    350,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/china.png",
    "images/randomsFood/app/food/bolinho-arroz.png",
  );

  const food4 = new Food(
    "Bolo de Morango",
    "Lanche",
    "Um bolo de morango tentador, com camadas macias de bolo de baunilha recheadas com creme de morango fresco e cobertas com chantilly e morangos inteiros.",
    400,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/bolo.png",
  );

  const food5 = new Food(
    "Bolo de Chocolate",
    "Lanche",
    "Um bolo de chocolate indulgente e decadente, com várias camadas de bolo de chocolate rico e um recheio de ganache de chocolate escuro. A cobertura é feita com raspas de chocolate e framboesas frescas.",
    450,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/bolo-chocolate.png",
  );
  const food6 = new Food(
    "Brigadeiro",
    "Lanche",
    "Um doce Brasieiro popular feito de leite condensado, chocolate em pó e manteiga, geralmente coberto com granulado de chocolate.",
    80,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/brasil.png",
    "images/randomsFood/app/food/brigadeiro.png",
  );

  const food7 = new Food(
    "Cookie",
    "Lanche",
    "Um biscoito macio e delicioso, geralmente feito com pedaços de chocolate.",
    150,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/cookie.png",
  );

  const food8 = new Food(
    "Croissant",
    "Lanche",
    "Um clássico pão folhado francês, perfeito para acompanhar café ou chá.",
    230,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/franca.png",
    "images/randomsFood/app/food/croassaint.png",
  );

  const food9 = new Food(
    "Curry",
    "Almoço/Jantar",
    "Um prato Indiano aromático e picante, geralmente feito com carne, legumes e uma mistura de especiarias.",
    400,
    "Carnívoro",
    "images/randomsFood/app/flags/india.png",
    "images/randomsFood/app/food/curry.png",
  );

  const food10 = new Food(
    "Espetinho Brasileiro",
    "Almoço/Jantar",
    "Um prato Brasileiro tradicional, com pedaços de carne ou frango grelhados no espeto, servidos com farofa e vinagrete.",
    350,
    "Carnívoro",
    "images/randomsFood/app/flags/brasil.png",
    "images/randomsFood/app/food/espetinho.png",
  );

  const food11 = new Food(
    "Frango com Fritas",
    "Almoço/Jantar",
    "Um prato clássico com pedaços de frango frito e batatas fritas crocantes.",
    600,
    "Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/frango-fritas.png",
  );

  const food12 = new Food(
    "Balde de Frango Frito",
    "Almoço/Jantar",
    "Um balde de frango frito crocante e saboroso, perfeito para compartilhar.",
    900,
    "Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/frango-frito.png",
  );

  const food13 = new Food(
    "Gelatina",
    "Lanche",
    "Uma sobremesa refrescante e colorida feita de gelatina aromatizada.",
    60,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/gelatina.png",
  );

  const food14 = new Food(
    "Hamburguer",
    "Lanche",
    "Original de Hamburgo na Alemanha, o hambúrguer é uma ótima sugestão para qualquer ocasião. Suculento e saboroso, pode ser mais saudável ou uma opção monstruosa cheia de recheio. Há opções vegetarianas disponíveis por exemplo hamburguer de soja.",
    500,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/alemanha.png",
    "images/randomsFood/app/food/hamburguer.png",
  );
  const food15 = new Food(
    "Hot Dog",
    "Lanche",
    "Um lanche rápido e delicioso composto por uma salsicha cozida no vapor ou grelhada, servida em um pãozinho macio e geralmente acompanhada de molho de mostarda, ketchup, cebola picada e outros condimentos.",
    350,
    "Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/hotdog.png",
  );

  const food16 = new Food(
    "Carne Grelhada",
    "Almoço/Jantar",
    "Uma suculenta carne grelhada, muitas vezes temperada com uma marinada especial e grelhada até ficar dourada por fora e macia por dentro.",
    450,
    "Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/janta.png",
  );

  const food17 = new Food(
    "Sopa Coreana",
    "Almoço/Jantar",
    'Uma sopa coreana picante e reconfortante conhecida como "Kimchi Jjigae", feita com kimchi fermentado, tofu e carne, geralmente servida com arroz.',
    300,
    "Carnívoro",
    "images/randomsFood/app/flags/coreia-do-sul.png",
    "images/randomsFood/app/food/korean-sopa.png",
  );

  const food18 = new Food(
    "Lamen",
    "Almoço/Jantar",
    "Um prato japonês popular consistindo de macarrão cozido em um caldo saboroso, geralmente acompanhado de carne, ovos cozidos, algas nori e cebolinha.",
    400,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/japao.png",
    "images/randomsFood/app/food/lamen.png",
  );

  const food19 = new Food(
    "Macarronada",
    "Almoço/Jantar",
    "Um prato Italiano clássico de macarrão, geralmente servido com molho de tomate, carne moída (pode ser substituído ou removida para opções vegetarianas), queijo parmesão ralado e ervas frescas.",
    550,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/italia.png",
    "images/randomsFood/app/food/macarronada.png",
  );

  const food20 = new Food(
    "Nachos",
    "Lanche",
    "Um prato de origem mexicana que consiste em tortilhas de milho crocantes cobertas com queijo derretido, guacamole, feijão, pimenta e outros acompanhamentos.",
    450,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/mexico.png",
    "images/randomsFood/app/food/nacho.png",
  );

  const food21 = new Food(
    "Panqueca",
    "Lanche",
    "Uma panqueca macia e fofa, muitas vezes servida no café da manhã. Pode ser recheada com uma variedade de ingredientes, como chocolate, frutas ou queijo.",
    250,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/panqueca.png",
  );

  const food22 = new Food(
    "Pão Recheado",
    "Lanche",
    "Um pãozinho fresco recheado com uma variedade de ingredientes deliciosos, como queijo derretido, presunto, frango desfiado, cogumelos e vegetais, dependendo da preferência.",
    350,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/pao-recheado.png",
  );
  const food23 = new Food(
    "Picolé",
    "Lanche",
    "Um doce congelado em palito, geralmente feito com suco de frutas, leite condensado ou chocolate. Perfeito para se refrescar em dias quentes.",
    100,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/picole.png",
  );

  const food24 = new Food(
    "Pipoca",
    "Lanche",
    "Um lanche popular feito de grãos de milho estourados, geralmente temperado com sal, manteiga ou outros condimentos.",
    150,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/pipoca.png",
  );

  const food25 = new Food(
    "Pizza",
    "Almoço/Jantar",
    "Uma deliciosa massa de pizza coberta com molho de tomate, queijo e uma variedade de ingredientes, como pepperoni, cogumelos, pimentões e azeitonas.",
    300,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/italia.png",
    "images/randomsFood/app/food/pizza.png",
  );

  const food26 = new Food(
    "Pudim",
    "Lanche",
    "Uma sobremesa cremosa e doce feita de leite, açúcar e essência de baunilha, geralmente servida com uma calda de caramelo.",
    250,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/pudim.png",
  );

  const food27 = new Food(
    "Cuscuz Nordestino",
    "Lanche",
    "Um prato tradicional da culinária do Nordeste do Brasil. Feito a partir de flocos de milho, geralmente preparados com água e sal, além de ir acompanhado de carne de sol, queijo coalho, ou mesmo com manteiga e café",
    400,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/brasil.png",
    "images/randomsFood/app/food/cuscuz.png",
  );

  const food28 = new Food(
    "Rosquinha",
    "Lanche",
    "Um pequeno pão doce em formato de anel, muitas vezes coberto com glacê ou açúcar. Ótimo para acompanhar uma xícara de café.",
    180,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/rosquinha.png",
  );

  const food29 = new Food(
    "Salada",
    "Almoço/Jantar",
    "Uma salada fresca e saudável feita com uma variedade de vegetais, folhas verdes, queijo, croutons e molho de sua escolha.",
    150,
    "Vegetariano",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/salada.png",
  );

  const food30 = new Food(
    "Sanduíche",
    "Lanche",
    "Um lanche versátil feito com pão, recheado com uma variedade de ingredientes, como carne, queijo, vegetais e condimentos.",
    350,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/sanduiche.png",
  );

  const food31 = new Food(
    "Sanduíche de Queijo",
    "Lanche",
    "Um sanduíche simples e delicioso feito com queijo derretido entre duas fatias de pão. Pode ser servido com condimentos ou vegetais adicionais.",
    300,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/sanduiche-queijo.png",
  );

  const food32 = new Food(
    "Sanduíche Vegetariano",
    "Lanche",
    "Um sanduíche saudável e saboroso feito com uma variedade de vegetais frescos, queijo, abacate e molhos vegetarianos, perfeito para quem prefere uma opção sem carne.",
    280,
    "Vegetariano",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/sanduiche-vegetariano.png",
  );
  const food33 = new Food(
    "Shawarma",
    "Lanche",
    "Um lanche tradicional do Oriente Médio, preparado com finas fatias de carne (como frango, carneiro ou carne bovina), servido em pão sírio e geralmente acompanhado de vegetais frescos e molhos, como tahine ou iogurte.",
    400,
    "Carnívoro",
    "images/randomsFood/app/flags/turquia.png",
    "images/randomsFood/app/food/shawarman.png",
  );

  const food34 = new Food(
    "Sopa",
    "Almoço/Jantar",
    "Um prato quente e reconfortante, geralmente feito cozinhando ingredientes como carne, vegetais e macarrão em um caldo saboroso.",
    250,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/sopa.png",
  );

  const food35 = new Food(
    "Soba de Ovos",
    "Almoço/Jantar",
    "Um prato japonês que consiste em macarrão de soba feito de trigo sarraceno e ovos, geralmente servido com um molho de soja e coberto com ingredientes como cebolinha e nori.",
    350,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/japao.png",
    "images/randomsFood/app/food/sopa-ovos.png",
  );

  const food36 = new Food(
    "Sorvete",
    "Lanche",
    "Uma sobremesa gelada e cremosa, disponível em uma variedade de sabores, incluindo baunilha, chocolate, morango e muitos outros.",
    200,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/sorvete.png",
  );

  const food37 = new Food(
    "Sushi",
    "Almoço/Jantar",
    "Um prato japonês que consiste em arroz temperado com vinagre, combinado com ingredientes como peixe cru, legumes ou frutos do mar, geralmente servido com wasabi e molho de soja.",
    300,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/japao.png",
    "images/randomsFood/app/food/sushi.png",
  );

  const food38 = new Food(
    "Taco",
    "Lanche",
    "Um prato mexicano popular, feito com uma tortilla de milho ou farinha, recheada com carne (como carne moída, frango ou carne de porco), alface, queijo, tomate e molhos variados.",
    350,
    "Carnívoro",
    "images/randomsFood/app/flags/mexico.png",
    "images/randomsFood/app/food/taco.png",
  );

  const food39 = new Food(
    "Taco Vegetariano",
    "Lanche",
    "Uma versão vegetariana do taco, com uma tortilla recheada de ingredientes como feijão, cogumelos, pimentão, alface, queijo e molhos saborosos.",
    280,
    "Vegetariano",
    "images/randomsFood/app/flags/mexico.png",
    "images/randomsFood/app/food/taco-vegetariano.png",
  );

  const food40 = new Food(
    "Torta Salgada",
    "Almoço/Jantar",
    "Uma torta de massa salgada recheada com uma variedade de ingredientes, como frango, carne, (que podem ser retirados ou trocado para opções vegetarianas) vegetais, queijo e ovos. Pode ser servida quente ou fria.",
    400,
    "Vegatariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/torta.png",
  );

  const food41 = new Food(
    "Torta Doce",
    "Lanche",
    "Uma torta doce de sobremesa, muitas vezes feita com recheios como frutas frescas, creme ou chocolate, e uma crosta de massa doce.",
    350,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/global.png",
    "images/randomsFood/app/food/torta-doce.png",
  );

  const food42 = new Food(
    "Wagashi",
    "Lanche",
    "Doces tradicionais japoneses, frequentemente feitos à mão e com sabor suave e delicado. Podem ser feitos de ingredientes como arroz glutinoso, feijão azuki e matcha.",
    120,
    "Vegetariano/Carnívoro",
    "images/randomsFood/app/flags/japao.png",
    "images/randomsFood/app/food/wagashi.png",
  );

  const food43 = new Food(
    "Yakissoba",
    "Almoço/Jantar",
    "Um prato japonês de macarrão frito com legumes, carne ou frutos do mar, e temperado com molho de soja e outros condimentos.",
    450,
    "Carnívoro",
    "images/randomsFood/app/flags/japao.png",
    "images/randomsFood/app/food/yakissoba.png",
  );

  const food44 = new Food(
    "Yakissoba Vegetariano",
    "Almoço/Jantar",
    "Uma versão vegetariana do yakissoba, com macarrão frito, legumes frescos, tofu e temperos saborosos.",
    350,
    "Vegetariano",
    "images/randomsFood/app/flags/japao.png",
    "images/randomsFood/app/food/yakissoba-vegetariano.png",
  );

  const foods = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
    food9,
    food10,
    food11,
    food12,
    food13,
    food14,
    food15,
    food16,
    food17,
    food18,
    food19,
    food20,
    food21,
    food22,
    food23,
    food24,
    food25,
    food26,
    food27,
    food28,
    food29,
    food30,
    food31,
    food32,
    food33,
    food34,
    food35,
    food36,
    food37,
    food38,
    food39,
    food40,
    food41,
    food42,
    food43,
    food44,
  ];

  const [selectedFoods, setSelectedFoods] = useState([]);

  const [selectOptionOne, setSelectOptionOne] = useState("");
  const [selectOptionTwo, setSelectOptionTwo] = useState("");

  const [nameFood, setNameFood] = useState("");
  const [nameResult, setNameResult] = useState("");
  const [descriptionFood, setDescriptionFood] = useState("");
  const [kcalFood, setKcalFood] = useState("");
  const [flagFood, setFlagFood] = useState("");
  const [srcFood, setSrcFood] = useState();

  const [containerImg, setContainerImg] = useState(ResultImgAwait);
  const [foodNameBtn, SetFoodNameBtn] = useState("Próximo");
  const [step, setStep] = useState(
    <AppRandomsFoodStage1
      selectOptionOne={selectOptionOne}
      setSelectOptionOne={setSelectOptionOne}
    />,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [backButtonDisabled, setBackButtonDisabled] = useState(true);

  useEffect(() => {
    if (selectOptionOne !== "" || selectOptionTwo !== "")
      setNextButtonDisabled(false);
  }, [selectOptionOne, selectOptionTwo]);

  function NextButton() {
    if (step.type === AppRandomsFoodStage1) {
      setNextButtonDisabled(true);
      setStep(
        <AppRandomsFoodStage2
          selectOptionTwo={selectOptionTwo}
          setSelectOptionTwo={setSelectOptionTwo}
        />,
      );
    }
    if (step.type === AppRandomsFoodStage2) {
      setIsVisible(true);
      setStep(<AppRandomsFoodStage3 />);
      setContainerImg(<ResultImgFood srcFood={srcFood} />);

      const newSelectedFoods = foods.filter(
        (selected) =>
          (selected.option === selectOptionOne ||
            selected.option === "Vegetariano/Carnívoro") &&
          selected.ocasion === selectOptionTwo,
      );
      setSelectedFoods(newSelectedFoods);
    }
  }

  function RandomsFoodPlay() {
    const audio = document.querySelector("audio");
    audio.play();

    const totalTime = 6000;
    const interval = 200;
    let currentTime = 0;

    const randomSelection = () => {
      if (currentTime < totalTime) {
        const randomIndex = Math.floor(Math.random() * selectedFoods.length);
        const randomFood = selectedFoods[randomIndex];

        setNameFood(randomFood.name);
        setNameResult(randomFood.name);
        setDescriptionFood(randomFood.description);
        setKcalFood(randomFood.kcal);
        setFlagFood(randomFood.srcCountry);
        setSrcFood(randomFood.srcFood);

        currentTime += interval;
        setTimeout(randomSelection, interval);
      }
    };
    randomSelection();
  }

  useEffect(() => {
    if (step.type === AppRandomsFoodStage3) {
      RandomsFoodPlay();
      setNextButtonDisabled(true);
      SetFoodNameBtn("⏳");
      setTimeout(() => {
        setNextButtonDisabled(false);
        setBackButtonDisabled(false);
        SetFoodNameBtn("Replay");
      }, 7000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFoods]);

  function Replay() {
    if (step.type === AppRandomsFoodStage3) {
      RandomsFoodPlay();
      setNextButtonDisabled(true);
      setBackButtonDisabled(true);
      SetFoodNameBtn("⏳");
      setTimeout(() => {
        setNextButtonDisabled(false);
        setBackButtonDisabled(false);
        SetFoodNameBtn("Replay");
      }, 7000);
    }
  }
  function BackButton() {
    setStep(
      <AppRandomsFoodStage1
        selectOptionOne={selectOptionOne}
        setSelectOptionOne={setSelectOptionOne}
      />,
    );
    setSelectOptionOne("");
    setSelectOptionTwo("");
    setIsVisible(false);
    SetFoodNameBtn("Próximo");
    setNextButtonDisabled(true);
    setContainerImg(ResultImgAwait);
  }

  const contextValue = {
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
    nameFood,
    nameResult,
    descriptionFood,
    kcalFood,
    flagFood,
    srcFood,
    foods,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppObjectConfig;
