import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  LinkBox,
  Image,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Section from "../components/Section";
import worksTestImg from "../img/test.jpg";
import thumnailNewSpring from "../img/newSpring/thumnail.jpg";
import todo from "../img/simpleTodo/todo.jpg";
import capstone from "../img/capstone/main.jpg";
import artround from "../img/artround/main.jpg";
import suyeong from "../img/suyeong/main.jpg";

const Works = () => {
  const handleScroll = () => window.scrollTo(0, 0);

  return (
    <Layout>
      <Box>
        <Container>
          <Heading pt={20} pb={3}>
            Works
          </Heading>

          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="10px">
            <Section>
              <Box w="100%" textAlign="center" onClick={handleScroll}>
                <NavLink to="/works/newspring">
                  <LinkBox cursor="pointer">
                    <Image
                      src={thumnailNewSpring}
                      alt="새봄"
                      borderRadius="12px"
                    />
                    <LinkOverlay href="/works/newspring">
                      <Text mt={2} fontSize={20}>
                        새봄
                      </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>
                      랜덤 선호도 질문으로 가장 어울리는 이성을 매칭해줍니다.
                    </Text>
                  </LinkBox>
                </NavLink>
              </Box>
            </Section>

            <Section>
              <Box w="100%" textAlign="center" onClick={handleScroll}>
                <NavLink to="/works/artround">
                  <LinkBox cursor="pointer">
                    <Image
                      src={artround}
                      alt="artround"
                      borderRadius="12px"
                      style={{ minHeight: "17rem" }}
                    />
                    <LinkOverlay href="/works/artround">
                      <Text mt={2} fontSize={20}>
                        Artround
                      </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>
                      주변 전시회, 박물관을 소개해주는 웹 어플리케이션입니다.
                    </Text>
                  </LinkBox>
                </NavLink>
              </Box>
            </Section>

            <Section delay={0.1}>
              <Box w="100%" textAlign="center" onClick={handleScroll}>
                <NavLink to="/works/portfolio">
                  <LinkBox cursor="pointer">
                    <Image
                      src={worksTestImg}
                      alt="포트폴리오"
                      borderRadius="12px"
                      style={{ minHeight: "17rem" }}
                    />
                    <LinkOverlay href="/works/portfolio">
                      <Text mt={2} fontSize={20}>
                        포트폴리오
                      </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>포트폴리오 웹사이트입니다.</Text>
                  </LinkBox>
                </NavLink>
              </Box>
            </Section>

            <Section delay={0.2}>
              <Box w="100%" textAlign="center" onClick={handleScroll}>
                <NavLink to="/works/simpletodo">
                  <LinkBox cursor="pointer">
                    <Image
                      src={todo}
                      alt="SimpleTodo"
                      borderRadius="12px"
                      style={{ minHeight: "17rem" }}
                    />
                    <LinkOverlay href="/works/simpletodo">
                      <Text mt={2} fontSize={20}>
                        SimpleTodo
                      </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>Todo 웹 어플리케이션입니다.</Text>
                  </LinkBox>
                </NavLink>
              </Box>
            </Section>

            <Section delay={0.3}>
              <Box w="100%" textAlign="center" onClick={handleScroll}>
                <NavLink to="/works/suyeonghackathon">
                  <LinkBox cursor="pointer">
                    <Image
                      src={suyeong}
                      alt="수영구 해커톤"
                      borderRadius="12px"
                      style={{ minHeight: "17rem" }}
                    />
                    <LinkOverlay href="/works/suyeonghackathon">
                      <Text mt={2} fontSize={20}>
                        어서와 수영구는 처음이지
                      </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>
                      실시간 날씨를 기반으로 수영구의 관광지를 추천해줍니다.
                    </Text>
                  </LinkBox>
                </NavLink>
              </Box>
            </Section>

            <Section delay={0.4}>
              <Box w="100%" textAlign="center" onClick={handleScroll}>
                <NavLink to="/works/capstone">
                  <LinkBox cursor="pointer">
                    <Image
                      src={capstone}
                      alt="캡스톤디자인"
                      borderRadius="12px"
                      style={{ minHeight: "17rem" }}
                    />
                    <LinkOverlay href="/works/capstone">
                      <Text mt={2} fontSize={20}>
                        모션기반 PPT 제어
                      </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>
                      모션기반 PPT 제어라는 주제로 S/W경진대회를 나갔습니다.
                    </Text>
                  </LinkBox>
                </NavLink>
              </Box>
            </Section>
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Works;
