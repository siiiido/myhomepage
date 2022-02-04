import React from 'react';
import { Box, Container, Heading, SimpleGrid, LinkBox, Image, LinkOverlay, Text} from '@chakra-ui/react';
import Layout from '../components/Layout';
import { Navbar } from './Navbar';
import { NavLink } from 'react-router-dom';
import Section from '../components/Section';

const Works = () => {
	return (
		<Layout>
			<Box>
				<Navbar/>
				<Container>
					<Heading pt={20}>Works</Heading>

					<SimpleGrid column={{ sm: 1, md: 2}} spacing='10px'>

						<Section>
							<Box w='100%' textAlign='center'>
								<NavLink to='/works/newspring'>
									<LinkBox cursor='pointer'>
									<Image
										src='/'
										alt='새봄'
										borderRadius='12px'
										/>
										<LinkOverlay href='/works/newspring'>
											<Text mt={2} fontSize={20}>
												새봄
											</Text>
										</LinkOverlay>
										<Text fontSize={14} >
											설명, 소개
										</Text>
									</LinkBox>
								</NavLink>
							</Box>
						</Section>

						<Section>
							<Box w='100%' textAlign='center'>
								<NavLink to='/works/artround'>
									<LinkBox cursor='pointer'>
									<Image
										src='/'
										alt='artround'
										borderRadius='12px'
										/>
										<LinkOverlay href='/works/artround'>
											<Text mt={2} fontSize={20}>
											artround
											</Text>
										</LinkOverlay>
										<Text fontSize={14} >
											설명, 소개
										</Text>
									</LinkBox>
								</NavLink>
							</Box>
						</Section>

						<Section delay={0.1}>
							<Box w='100%' textAlign='center'>
								<NavLink to='/works/suyeonghackathon'>
									<LinkBox cursor='pointer'>
									<Image
										src='/'
										alt='수영구 해커톤'
										borderRadius='12px'
										/>
										<LinkOverlay href='/works/suyeonghackathon'>
											<Text mt={2} fontSize={20}>
											수영구 해커톤
											</Text>
										</LinkOverlay>
										<Text fontSize={14} >
											설명, 소개
										</Text>
									</LinkBox>
								</NavLink>
							</Box>
						</Section>

						<Section delay={0.2}>
							<Box w='100%' textAlign='center'>
								<NavLink to='/works/portfolio'>
									<LinkBox cursor='pointer'>
									<Image
										src='/'
										alt='포트폴리오'
										borderRadius='12px'
										/>
										<LinkOverlay href='/works/portfolio'>
											<Text mt={2} fontSize={20}>
												포트폴리오
											</Text>
										</LinkOverlay>
										<Text fontSize={14} >
											설명, 소개
										</Text>
									</LinkBox>
								</NavLink>
							</Box>
						</Section>

						<Section delay={0.3}>
							<Box w='100%' textAlign='center'>
								<NavLink to='/works/capstone'>
									<LinkBox cursor='pointer'>
									<Image
										src='/'
										alt='캡스톤디자인'
										borderRadius='12px'
										/>
										<LinkOverlay href='/works/capstone'>
											<Text mt={2} fontSize={20}>
												캡스톤디자인
											</Text>
										</LinkOverlay>
										<Text fontSize={14} >
											설명, 소개
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
