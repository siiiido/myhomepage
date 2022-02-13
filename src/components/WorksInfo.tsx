import {
  Badge,
  Container,
  ListItem,
  List,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import Layout from "./Layout";
import Title from "./Title";
import { FcCheckmark, FcFlashOn } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "@chakra-ui/react";

const WorksInfo = ({ ...children }) => {
  const infoTile = ["website", "stack"];
  return (
    <Layout>
      <Container pt={20}>
        <Title>
          {children.title} <Badge>{children.year}</Badge>
        </Title>
        <Heading as="h4" mb={3}>
          프로젝트 소개
        </Heading>
        {children.content.map((item: string, index: number) => {
          return (
            <Box display="flex" mt={3} key={index}>
              <FcFlashOn style={{ minWidth: "1rem", marginTop: "5px" }} />
              <span style={{ marginLeft: "7px" }}>{item}</span>
            </Box>
          );
        })}
        <List mt={5}>
          {infoTile.map((item, index) => {
            console.log("here", children.info[index]);
            return (
              <ListItem key={index}>
                <Badge mr={3}>{item}</Badge>
                {item === "website" && children.info[index] !== "x" ? (
                  <Link href={children.info[index]}>
                    {children.info[index]}
                  </Link>
                ) : (
                  <span>{children.info[index]}</span>
                )}
              </ListItem>
            );
          })}
        </List>
        <Heading as="h4" mt={6}>
          기능
        </Heading>
        {children.implements.map((item: string, index: number) => {
          return (
            <Box display="flex" mt={3} key={index}>
              <FcCheckmark />
              <span style={{ marginLeft: "10px" }}>{item}</span>
            </Box>
          );
        })}
        <Swiper
          style={{ marginTop: "40px", borderRadius: "20px" }}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {children.imgSrc.map((item: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  alt="images"
                  style={{
                    height: "500px",
                    width: "100%",
                    borderRadius: "20px",
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Layout>
  );
};

export default WorksInfo;
