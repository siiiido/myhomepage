import WorksInfo from "../../components/WorksInfo";
import { Info } from "../../type";
import test1 from "../../img/test.jpg";
import test2 from "../../img/test.jpg";
import test3 from "../../img/test.jpg";
import artround from "../../img/artround/artround.jpg";
import map from "../../img/artround/artroundmap.jpg";
import main from "../../img/artround/main.jpg";

const ArtRound = () => {
  const info: Info = {
    title: "Artround",
    year: 2021,
    info: [
      "현재 마무리 단계에서 개발중입니다.",
      "React.JS, React-Redux, React-Router, Styled-Components, React-Swiper, Python, Django",
    ],
    content: [
      "전시회, 박물관들을 지도 형식으로 띄워 사용자 주변의 가까운 전시회들을 한눈에 보여줍니다.",
    ],
    implements: [
      "카카오 소셜 로그인으로 회원가입, 로그인을 진행합니다.",
      "사용자 주변의 전시회, 박물관이 지도에 나타납니다. (GPS 동의 필요)",
      "전시회 혹은 박물관을 클릭하여 즐겨찾기에 등록, 공유 등이 가능합니다",
      "전시회에 대해 후기를 등록할 수 있고 다른 사람의 후기를 볼 수 있습니다.",
    ],
    imgSrc: [main, artround, map],
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

export default ArtRound;
