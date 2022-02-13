import WorksInfo from "../../components/WorksInfo";
import { Info } from "../../type";

import fun from "../../img/capstone/fun.jpg";

const Capstone = () => {
  const info: Info = {
    title: "모션기반 PPT 제어",
    year: 2021,
    info: ["https://www.youtube.com/watch?v=T6w6k1_jkFg", "Python, MediaPipe"],
    content: [
      "키보드 없이 손 모양을 인식하여 PPT를 제어합니다.",
      "부경대학교 S/W경진대회에서 대상을 받았습니다.",
    ],
    implements: [
      "Mediapipe를 사용하여 모션의 좌표를 얻어 데이터 셋을 만들었습니다.",
      "신경망 구조인 LSTM을 사용하여 데이터를 학습시켰습니다.",
      "Win32 API를 사용하여 윈도우에서 PPT를 제어했습니다.",
      "Python PYQT5를 사용하여 GUI를 만들었습니다.",
    ],
    imgSrc: [fun],
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

export default Capstone;
