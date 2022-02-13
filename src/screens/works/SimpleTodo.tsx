import WorksInfo from "../../components/WorksInfo";
import { Info } from "../../type";
import todo from "../../img/simpleTodo/todo.jpg";
import dark from "../../img/simpleTodo/dark.jpg";
import main from "../../img/simpleTodo/main.jpg";
import focus from "../../img/simpleTodo/focus.jpg";

const SimpleTodo = () => {
  const info: Info = {
    title: "Simple Todo",
    year: 2022,
    info: [
      "https://siiiido.github.io/simple-todo/",
      "React with TypeScript, React-Router, Redux, Styled-Components, Framer-Motion",
    ],
    content: ["할 일을 메모할 수 있는 Todo 웹 어플리케이션 입니다."],
    implements: [
      "할 일을 메모할 수 있습니다.",
      "할 일은 로컬스토리지에 저장되어 나가도 그대로 유지됩니다.",
      "할 일을 하나씩 볼 수 있는 Focus 모드가 있습니다.",
      "다크 모드를 구현하여 UI를 변경할 수 있습니다.",
      "리덕스를 사용하여 상태를 관리했습니다.",
    ],
    imgSrc: [todo, main, dark, focus],
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
