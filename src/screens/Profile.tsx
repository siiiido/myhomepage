import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Section from "../components/Section";
import { AboutBox } from "./Main";
import styled from "@emotion/styled";

const Works = () => {
  const handleScroll = () => window.scrollTo(0, 0);

  return (
    <Layout>
      <Box>
        <Container>
          <Heading pt={20} pb={3}>
            Profile
          </Heading>

          <SimpleGrid spacing="10px">
            <Section delay={0.3}>
              <Box mt={2} w="100%" onClick={handleScroll}>
                <Text mb={3}>
                  {" "}
                  안녕하세요. 끊임없이 도전하는 개발자 송상한입니다.
                </Text>
                <Text mb={3}>
                  대표적인 프로젝트로는 취향과 가치관이 비슷한 대학생끼리 매달
                  매칭하는 새봄, 주변의 전시회와 박물관을 보여주는 ArtRound,
                  동물사진과 일기장으로 스트레스를 해소시키는 MoodChanger가
                  있습니다. 새봄은 직접 운영을 하여 500명 이상의 대학생들을
                  매칭하였고, ArtRound는 학교에서 주체하는 Running Circle이라는
                  활동에서 우수상을 받은 경험이 있습니다. 그 외에 수영구 해커톤,
                  부경대학교 해커톤을 나간 경험이 있습니다.
                </Text>

                <Text>
                  또한 Javascript에 큰 열정이 있어 React와 Vue로 프로젝트를
                  하였고 풀스택 개발자가 되고싶어 Node.js도 공부를 할 것입니다.
                  그리고 개발자는 영어가 중요하다고 생각하여 영어 공부를 하여
                  OPIC 시험에서 IH등급을 받았고 일상회화가 가능한 수준입니다.
                </Text>
              </Box>
            </Section>

            <Section>
              <Box mt={3} w="100%" onClick={handleScroll}>
                <Text fontSize="2xl" mt={2} as="b">
                  송상한
                </Text>
                <AboutBox>
                  <Me>전공과목</Me>
                  IT융합응용공학과 졸업
                </AboutBox>
                <AboutBox>
                  <Me>출생년월</Me>
                  1997.02 (26세)
                </AboutBox>
                <AboutBox>
                  <Me>거주지</Me>
                  부산시 연제구 안연로
                </AboutBox>
                <AboutBox>
                  <Me>연락처</Me>
                  010-7102-8746
                </AboutBox>
                <AboutBox>
                  <Me>이메일</Me>
                  discegaudere24.7@gmail.com
                </AboutBox>
                <AboutBox>
                  <Me>자격증</Me>
                  정보처리기사 1급, OPIc IH
                </AboutBox>
              </Box>
            </Section>

            {/* <Section>
              <Box w="100%" textAlign="center" onClick={handleScroll}></Box>
            </Section>

            <Section delay={0.1}>
              <Box w="100%" textAlign="center" onClick={handleScroll}></Box>
            </Section> */}
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Works;

const Me = styled.span`
  display: inline-block;
  font-weight: bold;
  margin-right: 0.5rem;
  margin-left: 1rem;
`;
