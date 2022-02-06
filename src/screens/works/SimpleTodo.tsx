import WorksInfo from "../../components/WorksInfo";

const SimpleTodo = () => {
  const info = {
    title: "테스트",
    year: 2020,
    info: ["Vanila Javascript, Django, Python"],
    content:
      "물방아 공자는 그들은 철환하였는가? 이상의 피고 작고 무한한 위하여서, 아름답고 용기가 때에, 것이다." +
      "보배를 앞이 예가 생의 옷을 천하를 사라지지 황금시대다. 역사를 생명을 원대하고, 열락의 못할 군영과 같지 인간이 약동하다. 것은 든 구할 구하지 얼음에 소금이라 것이다. 청춘을 이상이 방황하였으며, 두손을 교향악이다. 두기 끝까지 것은 광야에서 그들의 넣는 주며, 꽃이 무엇을 봄바람이다.",
    implements: [
      "카카오 소셜 로그인으로 회원가입, 로그인을 진행합니다.",
      "사용자 주변의 전시회, 박물관이 지도에 나타납니다. (GPS 동의 필요)",
      "전시회 혹은 박물관을 클릭하여 즐겨찾기에 등록, 공유 등이 가능합니다",
    ],
    imgSrc: ["./images/test.jpg", "./images/test.jpg", "./images/test.jpg"],
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

export default SimpleTodo;
