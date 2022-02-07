import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Link,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import Section from "../components/Section";
import { IoLogoGithub } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const Main = () => {
  return (
    <Box h="100vh">
      <Container maxW="container.md" pt={14}>
        <Box display="flex" justifyContent="space-between" pt={10}>
          <Box
            w="90%"
            borderRadius="lg"
            mt={10}
            mb={6}
            p={5}
            textAlign="center"
            bg={useColorModeValue("#EDF2F7", "whiteAlpha.200")}
          >
            한줄로 소개하기
          </Box>

          <Box mt={7} ml={3} textAlign="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="./images/profile.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" mt={5} mb={2}>
            소개
          </Heading>
          <Paragraph>
            한글입술으로 테스트.넣는 뭇 가슴에 것이다. 사는가 우리는 살 풀이
            찾아 듣는다. 같이, 청춘은 넣는 속잎나고, 따뜻한 봄바람을 충분히
            모래뿐일 것이다. 불어 인생에 보이는 간에 희망의 인류의 것이다.
            열락의 착목한는 어디 맺어, 하였으며, 황금시대다. 기술스택, 영어,
            취미 등등 적기.
          </Paragraph>

          <Box textAlign="center" my={4}>
            <NavLink to="/works">
              <Button colorScheme="blue">My portfolio </Button>
            </NavLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" pb={2}>
            경력
          </Heading>
          <Box pl="3.4rem">
            <Year>2016</Year> 부경대학교 IT융합응용공학과 입학
          </Box>
          <Box pl="3.4rem">
            <Year>2021</Year> 캡디
          </Box>
          <Box pl="3.4rem">
            <Year>2021</Year> 수영구 해커톤
          </Box>
          <Box pl="3.4rem">
            <Year>2021</Year> 정보처리기사
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3">Contact</Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/siiiido">
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  ml={9}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={SiGmail} />}
                  ml={9}
                  onClick={() =>
                    (window.location.href = "mailto:discegaudere24.7@gmail.com")
                  }
                >
                  discegaudere24.7@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Box>
  );
};

export default Main;

export const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
`;

const Year = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;
