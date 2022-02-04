import { NavLink } from 'react-router-dom';
import { Heading, Box, Link } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ChildrenProps } from '../type';

const Title = ({ children }: ChildrenProps) => {
	return (
		<Box>
			<NavLink to='/works'>
				<Link>Works</Link>
			</NavLink>
			<span> {' '}
				<ChevronRightIcon/>{' '}
			</span>
			<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
				{children}
			</Heading>
		</Box>
	);
};

export default Title;
