import WorksInfo from "../../components/WorksInfo";
import { Info } from "../../type";
import cat from "../../img/moodChanger/cat.png"
import changeInfo from "../../img/moodChanger/changeInfo.png"
import create from "../../img/moodChanger/create.png"
import main from "../../img/moodChanger/main.png"
import postList from "../../img/moodChanger/postList.png"
import save from "../../img/moodChanger/save.png"
import signUp from "../../img/moodChanger/signUp.png"

const MoodChanger = () => {
  const info: Info = {
    title: "MoodChanger",
    year: 2022,
    info: ["https://github.com/MoodChanger/MoodChanger-front/tree/develop", "Vue.JS, Nuxt, Vuex, Vuetify, Python, Django"],
    content: ["동물사진과 일기장으로 마음이 차분해지는 웹사이트입니다."],
    implements: [
      "웹사이트 자체 회원가입, 로그인 기능이 있습니다.",
      "회원가입시 ID중복검사가 가능합니다.",
      "비밀번호 수정과 닉네임 수정이 가능합니다.",
      "이메일을 활용하여 비밀번호 찾기가 가능합니다.",
      "JWT의 Access token과 Refresh token을 활용하여 로그인을 유지합니다.",
      "Infinite Scroll을 활용하여 동물사진을 계속 볼 수 있습니다.",
      "좋아하는 동물 사진을 좋아요를 눌러 따로 볼 수 있습니다.",
      "CRUD기능을 활용하여 일기장을 생성, 조회, 수정, 삭제가 가능합니다."
    ],
    imgSrc: [main, signUp, changeInfo, cat, save, create, postList ],
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

export default MoodChanger;
