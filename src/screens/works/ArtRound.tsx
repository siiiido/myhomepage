import React from 'react';
import { Badge, Container, ListItem, List } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { Navbar } from '../Navbar';
import Title from '../../components/Title';
import { Paragraph } from '../Main';

const ArtRound = () => {
	return (
		<Layout>
			<Container pt={20}>
				<Title>
					ArtRound <Badge>날짜</Badge>
				</Title>
				<Paragraph>
				ArtRound 설명
				</Paragraph>
				<List>
					<ListItem>
						<span>세부설명1</span>
					</ListItem>
					<ListItem>
						<span>세부설명2</span>
					</ListItem>
					<ListItem>
						<span>세부설명3</span>
					</ListItem>
				</List>
		</Container>
	</Layout>
	);
};

export default ArtRound;
