import WorksInfo from "../../components/WorksInfo";
import { Info } from "../../type";
import main from "../../img/suyeong/main.jpg";
import whole from "../../img/suyeong/suyeong.jpg";
import win from "../../img/suyeong/win.jpg";

const SuyeongHackathon = () => {
  const info: Info = {
    title: "어서와 수영구는 처음이지",
    year: 2021,
    info: ["", "React.JS, React-Swiper, Styled-Components"],
    content: ["실시간 날씨를 기반으로 수영구의 관광지를 추천해줍니다."],
    implements: [
      "공공 데이터 API들을 모아서 관광지 정보를 제공합니다.",
      "자신이 원하는 주제의 관광지를 볼 수 있습니다.",
      "관광지를 정하면 위치와 주소 등 정보를 볼 수 있습니다.",
      "OpenWeather의 Weather API를 사용하여 실시간 수영구 날씨를 볼 수 있습니다.",
    ],
    imgSrc: [main, whole, win],
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

export default SuyeongHackathon;
