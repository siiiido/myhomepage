import WorksInfo from "../../components/WorksInfo";
import { Info } from "../../type";
import portfolioMain from "../../img/portfolio/portfolioMain.png";
import portfolioWorks from "../../img/portfolio/portfolioWorks.png";
import portfolioContent from "../../img/portfolio/portfolioContent.png";

const Portfolio = () => {
  const info: Info = {
    title: "Portfolio",
    year: 2022,
    info: [
      "https://siiiido.github.io/myhomepage/",
      "React with TypeScript, React-Router, React-Swiper, Chakra UI, Emotion, Framer-Motion",
    ],
    content: ["포토폴리오 웹사이트 입니다."],
    implements: [
      "Chakra UI와 Framer Motion을 사용했습니다.",
      "토글 버튼으로 다크모드를 구현했습니다.",
    ],
    imgSrc: [portfolioMain,portfolioWorks, portfolioContent  ],
  };

  return (
    <WorksInfo
      title={info.title}
      year={info.year}
      content={info.content}
      info={info.info}
      implements={info.implements}
      imgSrc={info.imgSrc}
    />
  );
};

export default Portfolio;
