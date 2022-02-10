import WorksInfo from "../../components/WorksInfo";
import { Info } from "../../type";
import main from "../../img/newSpring/main.png";
import submit from "../../img/newSpring/submit.png";
import kakao from "../../img/newSpring/kakao.jpg";
import matching from "../../img/newSpring/matching.png";

const NewSpring = () => {
  const info: Info = {
    title: "새봄",
    year: 2021,
    info: [
      "https://siiiido.github.io/RS-only-front/",
      "Vanila Javascript, Django, AWS, Python, Typescript",
    ],
    content: [
      "랜덤 선호도 질문을 통해 가장 취향과 가치관이 비슷한 사람끼리 매달 매칭을 진행하는 프로젝트 입니다.",
      "부산 전체 대학교에서 시행하여서 700명 이상의의 유저들을 직접 매칭했습니다.",
      "현재 AWS 만기로 사이트를 운영하지 않습니다.",
      "Typescript로 UI만 리펙토링 했습니다.",
    ],
    implements: [
      "카카오 소셜 로그인으로 로그인을 진행합니다.",
      "매칭 날 매칭된 유저한테는 상대방의 매칭 Kakao id를 보여줍니다.",
      "대학생을 위한 서비스로 학생증 인증을 합니다.",
      "매칭 상대가 같은 학교인지, 다른 학교인지 설정할 수 있습니다.",
      "10가지의 질문으로 선호도를 조사합니다.",
    ],
    imgSrc: [main, submit, matching, kakao],
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

export default NewSpring;
