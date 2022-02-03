import React from 'react';
import { Box, Button, Container, Heading, Image, List, ListItem, Link } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { NavLink } from 'react-router-dom';


const Main = () => {
	return (
		<Box h="100vh">
			<Navbar/>
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

				


			</Container>
		</Box>
	)
};

export default Main;
