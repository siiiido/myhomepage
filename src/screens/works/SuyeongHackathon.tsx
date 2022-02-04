import React from 'react';
import { Badge, Container, ListItem, List } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { Navbar } from '../Navbar';
import Title from '../../components/Title';
import { Paragraph } from '../Main';

const SuyeongHackathon = () => {
	return (
		<Layout>
			<Navbar/>
			<Container pt={20}>
				<Title>
					어서와수영구는처음이지 <Badge>날짜</Badge>
				</Title>
				<Paragraph>
				어서와수영구는처음이지 설명
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

export default SuyeongHackathon;
