import React from 'react';
import { Box, Button, Container, Heading, Image, List, ListItem, Link } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { NavLink } from 'react-router-dom';
import styled from "@emotion/styled";
import Section from '../components/Section';


const Main = () => {
	return (
		<Box h="100vh">
			<Container maxW="container.md" pt={14}>
				<Box
					borderRadius="lg"
					mt={10}
					mb={6}
					p={5}
					textAlign="center"
				>
					한줄로 소개하기
				</Box>

				<Box display={{ md: "flex" }}>
					<Box flexGrow={2}>
						<Heading as="h2">송상한</Heading>
					</Box>

					<Box
						mt={{ base: 4, md: 0}}
						ml={{ md: 6 }}
						textAlign="center"
					>
						<Image
							borderColor="whiteAlpha.800"
							borderWidth={2}
							borderStyle="solid"
							maxWidth="100px"
							display="inline-block"
							borderRadius="full"
							src='/images/profile.jpg'
							alt='Profile image'
						/>
					</Box>
				</Box>

				<Section delay={0.1}>
					<Heading as='h3'>
						소개
					</Heading>
					<Paragraph>
						자기소개 글
					</Paragraph>

					<Box alignItems='center' my={4}>
						<NavLink to='/works'>
							<Button colorScheme="blue">My portfolio</Button>
						</NavLink>
					</Box>
				</Section>

				<Section delay={0.2}>
					<Heading as="h3" pb={1}>경력</Heading>
					<Box pl="3.4rem">
						<Year>1997</Year> 탄생
					</Box>
					<Box pl="3.4rem">
						<Year>2016</Year> 부경대학교 입학
					</Box>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3">Contact</Heading>
					<List>
						<ListItem>
							<Link href='https://github.com/siiiido' >
								<Button
									variant="ghost"
									colorScheme="blue"
								>
									이모티콘
								</Button>
								깃허브
							</Link>
						</ListItem>
						<ListItem>
							<Link href='' >
								<Button
									variant="ghost"
									colorScheme="blue"
								>
									이모티콘
								</Button>
								이메일
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Box>
	)
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
