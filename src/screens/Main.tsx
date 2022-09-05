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
import profile from "../img/profile.jpg";
import { FcAbout } from "react-icons/fc";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGit,
  SiStyledcomponents,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

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
            꾸준한 개발자 송상한입니다.
          </Box>

          <Box mt={7} ml={3} textAlign="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src={profile}
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" mt={5} mb={2}>
            Skills
          </Heading>
          <SkillBox>
            <Box display="flex">
              <SkillEmoji>
                <SiJavascript />
              </SkillEmoji>{" "}
              Javascript
            </Box>
            <Box display="flex">
              <SkillEmoji>
                <SiVuedotjs />
              </SkillEmoji>{" "}
              Vue
            </Box>
            <Box display="flex">
              <SkillEmoji>
                <SiVuetify />
              </SkillEmoji>{" "}
              Vuetify
            </Box>

            <Box display="flex">
              <SkillEmoji>
                <SiReact />
              </SkillEmoji>{" "}
              React
            </Box>
            <Box display="flex">
              <SkillEmoji>
                <SiRedux />
              </SkillEmoji>{" "}
              Redux
            </Box>
          </SkillBox>

          <SkillBox>
            <Box display="flex">
              <SkillEmoji>
                <SiHtml5 />
              </SkillEmoji>{" "}
              HTML
            </Box>
            <Box display="flex">
              <SkillEmoji>
                <SiCss3 />
              </SkillEmoji>{" "}
              Css
            </Box>

            <Box display="flex">
              <SkillEmoji>
                <SiStyledcomponents />
              </SkillEmoji>{" "}
              Styled Component
            </Box>

            <Box display="flex">
              <SkillEmoji>
                <SiGit />
              </SkillEmoji>{" "}
              Git
            </Box>
          </SkillBox>

          <Box textAlign="center" my={7}>
            <NavLink to="/works">
              <Button colorScheme="blue">Portfolio </Button>
            </NavLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" pb={2}>
            About me
          </Heading>
          <AboutBox>
            <AboutEmoji>
              <FcAbout />
            </AboutEmoji>{" "}
            학력 : 부경대학교 IT융합응용공학과 졸업 (2022.08 졸업)
          </AboutBox>

          <AboutBox>
            <AboutEmoji>
              <FcAbout />
            </AboutEmoji>{" "}
            자격증 : 정보처리기사 1급, OPIc IH
          </AboutBox>
          <AboutBox>
            <AboutEmoji>
              <FcAbout />
            </AboutEmoji>{" "}
            English : 독해 및 메일 작성 가능, 일상회화 가능
          </AboutBox>
          <Box textAlign="center" my={7}>
            <NavLink to="/profile">
              <Button colorScheme="blue">More </Button>
            </NavLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading mt={7} as="h3">
            Github & Contact
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/siiiido">
                <Button variant="ghost" leftIcon={<Icon as={IoLogoGithub} />}>
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                <Button
                  variant="ghost"
                  leftIcon={<Icon as={SiGmail} />}
                  paddingRight="1"
                ></Button>
                discegaudere24.7@gmail.com
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

const AboutEmoji = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: x-large;
  margin-right: 0.5rem;
  margin-left: 1rem;
`;

export const AboutBox = styled(Box)`
  display: flex;
  margin-top: 0.3rem;
`;

const SkillBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const SkillEmoji = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: x-large;
  margin-right: 0.5rem;
  margin-left: 1rem;
`;
