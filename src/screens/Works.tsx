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
import thumnailNewSpring from "../img/newSpring/thumnail.jpg";
import artround from "../img/artround/main.jpg";
import portfolioMain from "../img/portfolio/portfolioMain.png";
import moodChanger from "../img/moodChanger/main.png"

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

          <Section delay={0.3}>
              <Box w="100%" textAlign="center" onClick={handleScroll}>
                <NavLink to="/works/MoodChanger">
                  <LinkBox cursor="pointer">
                    <Image
                      src={moodChanger}
                      alt="MoodChanger"
                      borderRadius="12px"
                      style={{ minHeight: "17rem" }}
                    />
                    <LinkOverlay href="/works/MoodChanger">
                      <Text mt={2} fontSize={20}>
                      MoodChanger
                      </Text>
                    </LinkOverlay>
                    <Text fontSize={14}>
                      동물사진과 일기장으로 마음이 차분해지는 웹사이트입니다.
                    </Text>
                  </LinkBox>
                </NavLink>
              </Box>
            </Section>
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
                      src={portfolioMain}
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


  
          </SimpleGrid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Works;
