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
import { Paragraph } from "../screens/Main";
import Title from "./Title";
import { FcCheckmark } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const WorksInfo = ({ ...children }) => {
  const infoTile = ["stack"];
  return (
    <Layout>
      <Container pt={20}>
        <Title>
          {children.title} <Badge>{children.year}</Badge>
        </Title>
        <Paragraph>{children.content}</Paragraph>
        <List mt={5}>
          {infoTile.map((item, index) => {
            return (
              <ListItem key={index}>
                <Badge mr={3}>{item}</Badge>
                <span>{children.info[index]}</span>
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
                <Image src={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Layout>
  );
};

export default WorksInfo;
